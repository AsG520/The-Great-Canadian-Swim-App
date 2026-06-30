// Declarations for Const Statements
const D = 5514;
const calendar = document.getElementById("calendar");
const today = new Date();

// Declarations for Let Statements
let total = 0;
let i = 0;
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let myDistance = document.getElementById("total-distance");
let submitButton = document.getElementById("submit");
let myTotal = document.getElementById("my-total");
let resetButton = document.getElementById("reset");
let totalTrips = document.getElementById("number-trips");
let instagramLogo = document.getElementById("instagram-picture");
let tiktokLogo = document.getElementById("tiktok-picture");
let twitterLogo = document.getElementById("twitter-picture");
let emailAccount = document.getElementById("word-email");
let phoneNumber = document.getElementById("word-phone");
let areaAddress = document.getElementById("word-address");
let wordQuoteBox = document.getElementById("word-quote-box");
let loader = document.querySelector(".loader");

// Conditional for Calendar Feature
if (day < 10) {
    day = "0" + day;
}

if (month < 10) {
    month = "0" + month;
}

calendar.value =  year + "-" + month + "-" + day;

// Append .disappear in CSS to loader in HTML 
window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disappear");
}

// Updating Quotes
let quotes = [
    "Effort is the point.", 
    "Trying Counts.", 
    "You Belong Here.",
    "If you showed up, it counts.",
    "Effort looks different.", 
    "You're allowed to stop.",
    "This includes you.", 
    "Trying is human.",
    "One attempt is enough.",
    "Outcomes are optional.",
    "Different still counts.",
    "Invisible effort still counts."
];

function updateQuotes() {
    wordQuoteBox.innerHTML = quotes[i];
    i++;
    if (i >= quotes.length) {
        i = 0;
    }
}

setInterval(updateQuotes, 5000);
   
// Function Methods
function updateMyTotal() {
    total += Number (myDistance.value);
    myTotal.value = total;
}

function openEmail() {
    const confirmEmail = confirm("Email - iPOTS (Improving Postural Orthostatic Tachycardia Syndrome)");
    if (confirmEmail) {
        window.open("mailto:steffimanica@gmail.com", "_blank");
    }
}

function openAddress() {
    const confirmAddress = confirm("Address - iPOTS (Improving Postural Orthostatic Tachycardia Syndrome)");
    if (confirmAddress) {
        window.open("https://ul.waze.com/ul?place=EjpDbGF5aGlsbCBSZCAmIER1bmRhcyBTdCBXLCBNaXNzaXNzYXVnYSwgT04gTDVCIDJOOCwgQ2FuYWRhImYiZAoUChIJ9W4IdupGK4gR9dogcXjXvCwSFAoSCfVuCHbqRiuIEfXaIHF417wsGhQKEgkbpcN-wUYriBHXF0FT783zKRoUChIJ0TmvlX82K4gR5XjdDgvDK5AiCg22VvgZFUHIidA&ll=43.57055260%2C-79.62766710&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location", "_blank");
    }
}

function openNumber() {
    const confirmNumber = confirm("Phone Number - iPOTS (Improving Postural Orthostatic Tachycardia Syndrome)");
    if (confirmNumber) {
        window.open("wa.me/4165509762", "_blank");
    }
}

function alertInstagram() {
    const userConfirmInstagram = confirm("Instagram Account - iPOTS (Improving Postural Orthostatic Tachycardia Syndrome)");
    if (userConfirmInstagram) {
        window.open("https://www.instagram.com/improvingpots", "_blank")
    }
}

function alertTiktok() {
    const userConfirmTiktok = confirm("TikTok Account - iPOTS (Improving Postural Orthostatic Tachycardia Syndrome)");
    if (userConfirmTiktok) {
        window.open("https://www.tiktok.com/improvingpots", "_blank");
    }
}

function resetMyDistance() {
    myDistance.value = "0";
}

function alarmReset() {
    const confirmReset = confirm("Proceed with restarting your progress?");
    if (confirmReset) {
        myDistance.value = "0"
    }
}

function alertTwitter() {
    const userConfirmTwitter = confirm("Twitter Account - iPOTS (Improving Postural Orthostatic Tachycardia Syndrome)");
    if (userConfirmTwitter) {
        window.open("https://www.twitter.com/improvingpots", "_blank");
    }   
}

function updateTrips(){
    totalTrips.value = (myTotal.value / D).toFixed(3);
}

// .addEventListener Methods
submitButton.addEventListener("click", updateMyTotal);
submitButton.addEventListener("click", updateTrips);
resetButton.addEventListener("click", alarmReset);
instagramLogo.addEventListener("click", alertInstagram);
tiktokLogo.addEventListener("click", alertTiktok);
twitterLogo.addEventListener("click", alertTwitter);
emailAccount.addEventListener("click", openEmail);
phoneNumber.addEventListener("click", openNumber);
areaAddress.addEventListener("click", openAddress);