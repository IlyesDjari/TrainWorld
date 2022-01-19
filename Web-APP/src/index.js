"use strict"

window.onload = function () {
    showWelcomePopup();
}

function showWelcomePopup() {
    const popup = document.getElementById("welcomePopup");
    popup.style.display = "block";

    const exitPopup = document.getElementById("welcomeClose");
    exitPopup.addEventListener("click", () => popup.style.display = "none");
}

setInterval(() => {
    console.log("Working");
    if (screen.availHeight > screen.availWidth) {
        document.getElementById('askLandscape').style.display = "flex";
    } else if (screen.availHeight < screen.availWidth) {
        document.getElementById('askLandscape').style.display = "none";
    }
}, 1000);