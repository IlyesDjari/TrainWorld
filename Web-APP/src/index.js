"use strict"

window.onload = function () {
    showWelcomePopup();

    document.getElementById('popupClose').addEventListener("click", (e) => {
        document.getElementById('popupContainer').style.display = "none";
        const popupContents = document.getElementsByClassName('popupContent');
        for (let content of popupContents) {
            content.style.display = "none";
        }
    })

    document.getElementById('groundPlanSvg').addEventListener("click", (e) => {
        const clickedObject = e.target.closest('.clickableObject');
        if (clickedObject) {
            document.getElementById("popupContainer").style.display = 'inherit';
            const objectName = clickedObject.getAttribute('data-name');
            document.getElementById(`${objectName}Popup`).style.display = 'flex';
        }
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
        document.getElementById('groundPlan').style.display = "flex";
        document.getElementById('askLandscape').style.display = "none";
    }
}