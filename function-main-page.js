// Declarations for Const Statements
const C = 5514; // Distance of Canada 
const A = 634; // Distance of Alberta 
const BC = 700; // Distance of British Columbia 
const M = 800; // Distance of Manitoba 
const NB = 242; // Distance of New Brunswick
const NL = 1088; // Distance of Newfoundland and Labrador
const NS = 579; // Distance of Nova Scotia
const O = 1568; // Distance of Ontario
const PEI = 275; // Distance of Prince Edward Island
const Q = 1570; // Distance of Quebec
const S = 632; // Distance of Saskatchewan
const calendar = document.getElementById("calendar");
const today = new Date();
let total = 0;
let i = 0;
let storageAlbertaTrips = 0;
let storageBritishColumbia = 0;
let storageManitoba = 0;
let newBrunswickStorage = 0;
let newfoundlandAndLabradorStorage = 0;
let novaScotiaStorage = 0;
let ontarioStorage = 0;
let princeEdwardIslandStorage = 0;
let quebecStorage = 0;
let saskatchewanStorage = 0;
let day = today.getDate(); 
let month = today.getMonth() + 1; 
let year = today.getFullYear();
let myDistance = document.getElementById("total-distance");
let submitButton = document.getElementById("submit");
let myTotal = document.getElementById("my-total");
let albertaTrips = document.getElementById("alberta-trips");
let britishColumbiaTrips = document.getElementById("british-columbia-trips");
let manitobaTrips = document.getElementById("manitoba-trips");
let newBrunswickTrips = document.getElementById("new-brunswick-trips");
let newfoundlandAndLabradorTrips = document.getElementById("newfoundland-and-labrador-trips");
let novaScotiaTrips = document.getElementById("nova-scotia-trips");
let ontarioTrips = document.getElementById("ontario-trips");
let princeEdwardIslandTrips = document.getElementById("prince-edward-island-trips");
let quebecTrips = document.getElementById("quebec-trips");
let saskatchewanTrips = document.getElementById("saskatchewan-trips");
let albertaTrips2 = document.getElementById("alberta-trips2");
let britishColumbiaTrips2 = document.getElementById("british-columbia-trips2");
let manitobaTrips2 = document.getElementById("manitoba-trips2");
let newBrunswickTrips2 = document.getElementById("new-brunswick-trips2");
let newfoundlandAndLabradorTrips2 = document.getElementById("newfoundland-and-labrador-trips2");
let novaScotiaTrips2 = document.getElementById("nova-scotia-trips2");
let ontarioTrips2 = document.getElementById("ontario-trips2");
let princeEdwardIslandTrips2 = document.getElementById("prince-edward-island-trips2");
let quebecTrips2 = document.getElementById("quebec-trips2");
let saskatchewanTrips2 = document.getElementById("saskatchewan-trips2");
let myTotalActiveDuration = document.getElementById("active-duration-percentage");
let myTotalSession = document.getElementById("session-number");
let myTotalSession2 = document.getElementById("session-number2");
let myTotalCalorieBurn = document.getElementById("calorie-burnt");
let resetButton = document.getElementById("reset");
let totalTrips = document.getElementById("number-trips");
let wordQuoteBox = document.getElementById("word-quote-box");

// Conditional for Calendar Feature
if (day < 10) {
    day = "0" + day;
}

if (month < 10) {
    month = "0" + month;
}

calendar.value =  year + "-" + month + "-" + day;

// Updating Quotes
let quotes = [
    "Effort is the point. - Stephanie Manica", 
    "Trying Counts. - Stephanie Manica", 
    "You Belong Here. - Stephanie Manica",
    "If you showed up, it counts. - Stephanie Manica",
    "Effort looks different. - Stephanie Manica", 
    "You're allowed to stop. - Stephanie Manica",
    "This includes you. - Stephanie Manica", 
    "Trying is human. - Stephanie Manica",
    "One attempt is enough. - Stephanie Manica",
    "Outcomes are optional. - Stephanie Manica",
    "Different still counts. - Stephanie Manica",
    "Invisible effort still counts. - Stephanie Manica",
    "Today can look different. - Stephanie Manica",
    "You don't have to win. - Stephanie Manica",
    "This moment counts. - Stephanie Manica",
    "There is no wrong way to try. - Stephanie Manica",
    "Trying is not a straight line. - Stephanie Manica",
    "Listening to your body counts. - Stephanie Manica",
    "Today is enough. - Stephanie Manica"
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

function resetMyDistance() {
    myDistance.value = "0";
}

function alarmReset() {
    const confirmReset = confirm("Proceed with restarting your progress?");
    if (confirmReset) {
        myDistance.value = "0"
    }
}

function updateTrips() {
    totalTrips.value = (myTotal.value / C).toFixed(3);
}

function albertaConditional() {
    albertaTrips.value = ((myTotal.value / A) * 100).toFixed(3);
    albertaTrips2.value = albertaTrips.value;
    if (storageAlbertaTrips == 0 && albertaTrips.value >= 100) {
        alert("Congratulations! You've Completed 1 Full round across Alberta.");
        albertaTrips.value = 100;
        albertaTrips++;
    }
} 

function britishColumbiaConditional() {
    britishColumbiaTrips.value = ((myTotal.value / BC) * 100).toFixed(3);
    britishColumbiaTrips2.value = britishColumbiaTrips.value;
    if (storageBritishColumbia == 0 && britishColumbiaTrips.value >= 100) {
        alert("Congratulations! You've Completed 1 Full round across British Columbia.");
        britishColumbiaTrips.value = 100;
        britishColumbiaTrips++;
    }
} 

function manitobaConditional() {
    manitobaTrips.value = ((myTotal.value / M) * 100).toFixed(3);
    manitobaTrips2.value = manitobaTrips.value;
    if (storageManitoba == 0 && manitobaTrips.value >= 100) {
        alert("Congratulations! You've Completed 1 Full round across Manitoba.");
        manitobaTrips.value = 100;
        manitobaTrips++;
    }
} 

function newBrunswickConditional() {
    newBrunswickTrips.value = ((myTotal.value / NB) * 100).toFixed(3);
    newBrunswickTrips2.value = newBrunswickTrips.value;
    if (newBrunswickStorage == 0 && newBrunswickTrips.value >= 100) {
        alert("Congratulations! You've Completed 1 Full round across New Brunswick.");
        newBrunswickTrips.value = 100;
        newBrunswickTrips++;
    }
} 

function newfoundlandAndLabradorConditional() {
    newfoundlandAndLabradorTrips.value = ((myTotal.value / NL) * 100).toFixed(3);
    newfoundlandAndLabradorTrips2.value = newfoundlandAndLabradorTrips.value;
    if (newfoundlandAndLabradorStorage == 0 && newfoundlandAndLabradorTrips.value >= 100) {
        alert("Congratulations! You've Completed 1 Full round across Newfoundland and Labrador.");
        newfoundlandAndLabradorTrips.value = 100;
        newfoundlandAndLabradorTrips++;
    }
} 

function novaScotiaConditional() {
    novaScotiaTrips.value = ((myTotal.value / NS) * 100).toFixed(3);
    novaScotiaTrips2.value = novaScotiaTrips.value;
    if (novaScotiaStorage == 0 && novaScotiaTrips.value >= 100) {
        alert("Congratulations! You've Completed 1 Full round across Nova Scotia.");
        novaScotiaTrips.value = 100;
        novaScotiaTrips++;
    }
} 

function ontarioConditional() {
    ontarioTrips.value = ((myTotal.value / O) * 100).toFixed(3);
    ontarioTrips2.value = ontarioTrips.value;
    if (ontarioStorage == 0 && ontarioTrips.value >= 100) {
        alert("Congratulations! You've Completed 1 Full round across Ontario.");
        ontarioTrips.value = 100;
        ontarioTrips++;
    }
} 

function princeEdwardIslandConditional() {
    princeEdwardIslandTrips.value = ((myTotal.value / PEI) * 100).toFixed(3);
    princeEdwardIslandTrips2.value = princeEdwardIslandTrips.value;
    if (princeEdwardIslandStorage == 0 && princeEdwardIslandTrips.value >= 100) {
        alert("Congratulations! You've Completed 1 Full round across Prince Edward Island.");
        princeEdwardIslandTrips.value = 100;
        princeEdwardIslandTrips++;
    }
} 

function quebecConditional() {
    quebecTrips.value = ((myTotal.value / Q) * 100).toFixed(3);
    quebecTrips2.value = quebecTrips.value;
    if (quebecStorage == 0 && quebecTrips.value >= 100) {
        alert("Congratulations! You've Completed 1 Full round across Prince Edward Island.");
        quebecTrips.value = 100;
        quebecTrips++;
    }
} 

function saskatchewanConditional() {
    saskatchewanTrips.value = ((myTotal.value / S) * 100).toFixed(3);
    saskatchewanTrips2.value = saskatchewanTrips.value;
    if (saskatchewanStorage == 0 && saskatchewanTrips.value >= 100) {
        alert("Congratulations! You've Completed 1 Full round across Prince Edward Island.");
        saskatchewanTrips.value = 100;
        saskatchewanTrips++;
    }
} 

function updateMySessions() {
    if (myDistance.value <= 0) {
        alert("Invalid Distance!.");
        return;
    } else {
        myTotalSession.value = Number(myTotalSession.value) + 1;
        myTotalSession2.value = myTotalSession.value;
    }
}

// .addEventListener Methods
submitButton.addEventListener("click", updateMyTotal);
submitButton.addEventListener("click", updateTrips);
submitButton.addEventListener("click", albertaConditional);
submitButton.addEventListener("click", britishColumbiaConditional);
submitButton.addEventListener("click", manitobaConditional);
submitButton.addEventListener("click", newBrunswickConditional);
submitButton.addEventListener("click", newfoundlandAndLabradorConditional);
submitButton.addEventListener("click", novaScotiaConditional);
submitButton.addEventListener("click", ontarioConditional);
submitButton.addEventListener("click", princeEdwardIslandConditional);
submitButton.addEventListener("click", quebecConditional);
submitButton.addEventListener("click", saskatchewanConditional);
submitButton.addEventListener("click", updateMySessions);
resetButton.addEventListener("click", alarmReset);