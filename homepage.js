import {initializeApp} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js"; /* connect to firebase*/
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"; /* Creates the authentication system. watches whether a user is logged in or logged out. Logs the user out. */
import {getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js" /* Firestore is where you store user data.*/

const firebaseConfig = { /* firebase project to connect to*/
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
const app = initializeApp(firebaseConfig); // connects firebase to website*/

// Create authentication and database connections
const auth=getAuth(); // login,signup, logout and current user
const db=getFirestore(); // data, saving data and updating data

onAuthStateChanged(auth, (user) => {  // checks if user is logged in
    const loggedInUserId = localStorage.getItem('loggedInUserId'); // gets user ID from local storage
        if (loggedInUserId) { // checks if user exist, otherwise no document is found in local storage
            console.log(user);
            const docRef = doc(db, "users", loggedInUserId); // Tells firebase to go to users data and find this person
            getDoc(docRef) // Gets user's data
            .then ((docSnap) => {
                if (docSnap.exists()) { // Checks if document exists
                    const userData = docSnap.data(); // Converst Firebase data to JavaScript =
                    document.getElementById('loggedUserFName').innerText=userData.firstName; // Places user info in website (area to put total distance and show the values that are saved)
                    document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUsername').innerText=userData.username;
            } else {
                console.log("no document found matching id")
            }
        })
        .catch ((error) => {
            console.log("Error getting document");
        })
    } else{ 
        console.log("User Id not Found in Local storage")
        window.location.href = "index.html";
    }
})

const logoutButton = document.getElementById('logout'); // connects to html

logoutButton.addEventListener('click', ()=> { // When logout is clicked the user id is removed from local storage and window goes to index.html (login) page
    localStorage.removeItem('loggedInUserId');
    signOut(auth)  //logout on firebase
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error) => {
        console.error('Error Signing out:', error);
    })
})