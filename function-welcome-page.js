let createAnAccount = document.getElementById("create-an-account");
let signIn = document.getElementById("sign-in");

function callAccountRegistrationPage() {
    window.location.href = "index-account-registration.html";
}

function callLoginPage() {
    window.location.href = "index-login-page.html";
}

createAnAccount.addEventListener("click", callAccountRegistrationPage);
signIn.addEventListener("click", callLoginPage);