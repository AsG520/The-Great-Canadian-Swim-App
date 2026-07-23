// Basically, allows user to create an account (e.g. email/password, Google) and creates the storage base for data handling.

// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js"; // Imports firebase connection tools 
 import{getFirestore, setDoc, updateDoc, doc, getDoc, collection, query, where, getDocs} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js" // connects to Firebase's database, Firebase stores UID, Email and password, while Firestore holds other info
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

 const firebaseConfig = { // Identifies firebase project to link to 
    apiKey: "AIzaSyANYbFNAyk1fAaDXc7gPnkeRNTTgXyeViU",
    authDomain: "testing-database-c0a2c.firebaseapp.com",
    projectId: "testing-database-c0a2c",
    storageBucket: "testing-database-c0a2c.firebasestorage.app",
    messagingSenderId: "879740645963",
    appId: "1:879740645963:web:f7419ce03565bf401fd3ce",
    measurementId: "G-TVHDNT78JT"
 //WATCH THIS VIDEO TO LEARN WHAT TO PUT HERE   https://youtu.be/_Xczf06n6x0
 };
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);

 const db = getFirestore(app);


 const forgotPassword = document.getElementById("forgot-password-word");
console.log(forgotPassword);
if (forgotPassword) {

    forgotPassword.addEventListener("click", async () => {

        const email = document.getElementById("email").value.trim().toLowerCase();

        if (!email) {
            customAlert("Please enter your email first.");
            return;
        }

        try {

            await sendPasswordResetEmail(auth, email); //video: https://www.youtube.com/watch?v=XpMnUNWMyQI

            customAlert("Password reset email sent. Check your inbox. (It may appear in Spam/Trash)"); 

        } catch (error) {

            if (error.code === "auth/user-not-found") {
                customAlert("No account found with this email.");
            }
            else {
                customAlert("Unable to send reset email.");
                console.log(error);
            }
        }

    });

}
 // google stuff

 const googleProvider = new GoogleAuthProvider(); // link: https://firebase.google.com/docs/auth/web/google-signin?utm_source

 googleProvider.setCustomParameters({
    prompt: "select_account"
});

const googleSignIn = document.getElementById("googleSignIn");

if (googleSignIn) {

googleSignIn.addEventListener("click", async () => {

    try {
        const result = await signInWithPopup(auth, googleProvider);

        const user = result.user;

    let firstName = "N/A";
    let lastName = "N/A";

        if (user.displayName) {
    const name = user.displayName.split(" ");

    firstName = name[0];

    if (name[1]) {  // Not using last name
        lastName = name[1];
    }
}
       const docRef = doc(db, "users", user.uid);

    const docSnap = await getDoc(docRef);
if (!docSnap.exists()) {

    await setDoc(docRef, {
        firstName: firstName,
        email: user.email.toLowerCase(),
        provider: "google",
        totalDistance: 0,
        totalHours: 0,
        sessions: 0,
        attempts: 0,
        username: "",
        credentialsCompleted: false,
        aboutYouCompleted: false,
        whatReasonCompleted: false,
        yourGoalCompleted: false,
        allSetPageCompleted: false,
    });

} else {

    await updateDoc(docRef, {
        provider: "google"
    });
}
        localStorage.setItem("loggedInUserId", user.uid);
       checkUserInfo(user);

    } catch (error) {
        console.error(error);
    }
});

}

//const analytics = getAnalytics(app);

function customAlert(message) {
    const alertBox = document.getElementById("customAlert");

    document.getElementById("alertText").textContent = message;
    alertBox.style.display = "block";

    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000); // Hides after 3 seconds
}

// Function to ensure user filled out about you page, if yes, skips the page
async function checkUserInfo(user) {
  const docRef = doc(db, "users", user.uid);

  const docSnap = await getDoc(docRef);

  // Check if it exists
  if (!docSnap.exists()) {
    return;
  }
  const userData = docSnap.data();

  if (!userData.credentialsCompleted) {
    window.location.href = "index-user-credentials.html";
    return;
  }

  if (!userData.aboutYouCompleted) {
    window.location.href = "index-about-you-page.html";
    return;
  }

  if (!userData.whatReasonCompleted) {
    window.location.href = "index-reason-swimming-page.html";
    return;
  }

  if (!userData.yourGoalCompleted) {
    window.location.href = "index-what-goal-page.html";
    return;
  }

  if (!userData.allSetPageCompleted) {
    window.location.href = "index-all-set-page.html";
    return;
  }

  // Everything completed
  window.location.href = "index-home-page.html";
}

 const signUp=document.getElementById('submitSignUp'); 
 if (signUp) {
 signUp.addEventListener('click', (event)=>{ // When signUp button is clicked, it prevent page refresh, gets user info
    event.preventDefault();
    const email=document.getElementById('rEmail').value.trim().toLowerCase();
    const password=document.getElementById('rPassword').value;
    const firstName=document.getElementById('fName').value.trim();
 
    //creates firebase account 
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential)=>{ // userCredentials are uid and email
        const user=userCredential.user; // user is now seen as the uid  
        const userData={ // Creates user data
            email: email,
            firstName: firstName,
            provider: "password",
            totalDistance: 0,
            totalHours: 0,
            sessions: 0,
            attempts: 0,
            username: "",
            credentialsCompleted: false,
            aboutYouCompleted: false,
            whatReasonCompleted: false,
            yourGoalCompleted: false,
            allSetPageCompleted: false,
        };
        customAlert('Account Created Successfully'); // Show message that account was created sussessfully
  const docRef = doc(db, "users", user.uid);

const docSnap = await getDoc(docRef);

if (!docSnap.exists()) {
    await setDoc(docRef, userData);
}

window.location.href = "index-login-page.html";
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            customAlert('Email Address Already Exists !!!');
        }
        else{
            customAlert('unable to create User');
        }
    })
 });

}
 
 const signIn=document.getElementById('submitSignIn'); // connects html to js, login button
if(signIn) {
 signIn.addEventListener('click', async (event) => {
    event.preventDefault();

    try {

        const email = document.getElementById('email').value.trim().toLowerCase();
        const password = document.getElementById('password').value;

        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;

        localStorage.setItem('loggedInUserId', user.uid);

       await checkUserInfo(user);
        //window.location.href = 'index.html';

    } catch (error) {
    console.error(error.code);
    console.error(error.message);

    if (error.code === "auth/invalid-credential") {
        customAlert("Incorrect email or password. If you created your account with Google, please use the Google Sign-In button.");
    }
    else if (error.code === "auth/too-many-requests") {
        customAlert("Too many failed attempts. Please try again later.");
    }
    else {
        customAlert("Unable to sign in.");
    }
}
});
}