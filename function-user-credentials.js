// Basically, gets the values that the user puts in (e.g. username, age, gender, etc) it forces them to insert input and storages information into the fire store.

import {initializeApp} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getFirestore, doc, updateDoc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyANYbFNAyk1fAaDXc7gPnkeRNTTgXyeViU",
    authDomain: "testing-database-c0a2c.firebaseapp.com",
    projectId: "testing-database-c0a2c",
    storageBucket: "testing-database-c0a2c.firebasestorage.app",
    messagingSenderId: "879740645963",
    appId: "1:879740645963:web:f7419ce03565bf401fd3ce",
};

// Custom user message function
function customAlert(message) {
    // links to html element for formating 
    const alertBox = document.getElementById("customAlert");

    document.getElementById("alertText").textContent = message;
    alertBox.style.display = "block";

    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000); // Hides after 3 seconds
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const submit = document.getElementById("submit");

submit.addEventListener("click", async () => {
    const username = document.getElementById("username").value.trim();
    const age = document.getElementById("age-number").value.trim();
    const gender = document.getElementById("gender-details").value.trim();
    const height = document.getElementById("height-details").value.trim();
    const weight = document.getElementById("weight-details").value.trim();

    // Make sure every field is filled in
    if (username === "" || age === "" || gender === "" || height === "" || weight === "") {
        customAlert("Please fill out all information before continuing.");
        return;
    }

    const userID = localStorage.getItem("loggedInUserId");
    const userData = {username: username, age: age, gender: gender, height: height, weight: weight, credentialsCompleted: true};
    const userRef = doc(db, "users", userID);
    await updateDoc(userRef, userData);
    window.location.href = "homepage.html";
});

let submitButton = document.getElementById("submit");

function callAboutYouPage() {
    window.location.href = "index-about-you-page.html";
}

submitButton.addEventListener("click", callAboutYouPage);