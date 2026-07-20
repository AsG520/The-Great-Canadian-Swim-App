let createAnAccount = document.getElementById("create-an-account");
let signIn = document.getElementById("sign-in");
let buildCommunityOption = document.getElementById("build-community-option");
let swimAcrossCanadaOption = document.getElementById("swim-across-canada-option");
let makeADifferenceOption = document.getElementById("make-a-difference-option");

function callAccountRegistrationPage() {
    window.location.href = "index-account-registration.html";
}

function callLoginPage() {
    window.location.href = "index-login-page.html";
}

function openAppContent() {
    window.open("app-content.pdf", "_blank");
}

createAnAccount.addEventListener("click", callAccountRegistrationPage);
signIn.addEventListener("click", callLoginPage);
buildCommunityOption.addEventListener("click", openAppContent);
swimAcrossCanadaOption.addEventListener("click", openAppContent);
makeADifferenceOption.addEventListener("click", openAppContent); 