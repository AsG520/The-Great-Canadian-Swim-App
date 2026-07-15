let getStarted = document.getElementById("get-started");

function callWelcomePage () {
    window.location.href = "index-welcome-page.html";
}

getStarted.addEventListener("click", callWelcomePage);