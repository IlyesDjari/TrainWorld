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
        document.getElementsByTagName('nav')[0].style.display = "none";
    } else if (screen.availHeight < screen.availWidth) {
        document.getElementsByTagName('nav')[0].style.display = "block";
        document.getElementById('askLandscape').style.display = "none";
    }
}

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
