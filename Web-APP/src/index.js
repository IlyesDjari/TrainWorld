"use strict"

window.onload = function () {
    showWelcomePopup();

    document.getElementById('planelement').addEventListener("click", (e) => {
        e.preventDefault;
        document.getElementById('planelement').style.display = "none";
        document.getElementById('houseplanpopup').style.display = "inherit";
    })

    document.getElementById('firstpopupquit').addEventListener("click", (e) => {
        e.preventDefault
        document.getElementById('planelement').style.display = "inherit";
        document.getElementById('houseplanpopup').style.display = "none";
    })
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
        document.getElementById('groundPlan').style.display = "none";
    } else if (screen.availHeight < screen.availWidth) {
        document.getElementById('askLandscape').style.display = "none";
        document.getElementById('groundPlan').style.display = "block";
    }
}