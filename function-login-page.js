let submit = document.getElementById("submit");
let register = document.getElementById("register-word");

function callUserCredentials() {
    window.location.href = "index-user-credentials.html";
}

function callAccountRegistration() {
    window.location.href = "index-account-registration.html"; 
}

submit.addEventListener("click", callUserCredentials);
register.addEventListener("click", callAccountRegistration);