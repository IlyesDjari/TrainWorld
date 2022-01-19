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