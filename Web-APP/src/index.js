"use strict"

window.onload = function () {
    showWelcomePopup();
}

function showWelcomePopup() {
    const popup = document.getElementById("welcomePopup");
    popup.style.display = "block";

    const exitPopup = document.getElementById("welcomeClose");
    exitPopup.addEventListener("click", () => {
        popup.style.display = "none";
        checkOrientation();
        setInterval(() => checkOrientation(), 1000);
    });
}

function checkOrientation() {
    if (screen.availHeight > screen.availWidth) {
        document.getElementById('askLandscape').style.display = "flex";
    } else if (screen.availHeight < screen.availWidth) {
        document.getElementById('askLandscape').style.display = "none";
    }
}