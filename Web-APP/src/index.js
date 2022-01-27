"use strict"

import "../node_modules/@fortawesome/fontawesome-free/js/brands.js";
import "../node_modules/@fortawesome/fontawesome-free/js/solid.js";
import "../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js";

// code to register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../docs/sw.js')
        .then((registration) => console.log('Service worker registered', registration))
        .catch((error) => console.log('Service worker not registered', error));
}

window.onload = function () {
    showWelcomePopup();

    // removing the content from the popups when one is closed
    document.getElementById('popupClose').addEventListener("click", (e) => {
        closePopups();
    })

    let closeBtns = document.getElementsByClassName('popupBtn');
    for (let btn of closeBtns) {
        btn.addEventListener('click', e => {
            closePopups();
        })
    }

    document.getElementById('overlay').addEventListener("click", e => {
        closePopups();
    })

    //detect if a clickable element is clicked and open correct popup
    document.getElementById('groundPlanSvg').addEventListener("click", (e) => {
        const clickedObject = e.target.closest('.clickableObject');
        if (clickedObject) {
            document.getElementById("popupContainer").style.display = 'inherit';
            document.getElementById("overlay").style.display = 'inherit';
            const objectName = clickedObject.getAttribute('data-name');
            document.getElementById(`${objectName}Popup`).style.display = 'flex';

            if (objectName == "portrait") {
                const guidoVideo = document.getElementById("guidoVideo");
                guidoVideo.play();
            }

            let pulseElement = document.getElementById(`${objectName}Pulse`);
            if (pulseElement) {
                console.log(pulseElement);
                pulseElement.setAttribute("stroke", "#eadec7")
            }
        }
    })

    // when the switch is toggled, classes are added or removed
    document.getElementById('darkmodeSlider').addEventListener('change', () => {
        document.body.classList.toggle("darkmode");
        document.getElementById("popupContainer").classList.toggle("darkmodePopup");
        document.getElementById("askLandscape").classList.toggle("darkmode");
    })

    // change language menu when language is clicked
    const buttonFR = document.getElementById("buttonFR");
    const buttonNL = document.getElementById("buttonNL");
    const buttonEN = document.getElementById("buttonEN");


    buttonNL.addEventListener('click', e => {
        buttonNL.style.display = "none";
        buttonFR.style.display = "block";
        buttonEN.style.display = "block";
    });

    buttonFR.addEventListener('click', e => {
        buttonFR.style.display = "none";
        buttonNL.style.display = "block";
        buttonEN.style.display = "block";
    });
    buttonEN.addEventListener('click', e => {
        buttonEN.style.display = "none";
        buttonFR.style.display = "block";
        buttonNL.style.display = "block";
    });

}


function showWelcomePopup() {
    const popup = document.getElementById("welcomePopup");
    popup.style.display = "flex";

    // when the cross is clicked, the popup disappears
    const exitPopup = document.getElementById("welcomeClose");
    const welcomeBtn = document.getElementById("welcomeBtn");
    exitPopup.addEventListener("click", () => {
        closeWelcomePopup();
    });
    welcomeBtn.addEventListener("click", () => {
        closeWelcomePopup();
    });
}

function closeWelcomePopup() {
    const popup = document.getElementById("welcomePopup");
    popup.style.display = "none";
    document.getElementById('homepage').style.display = "flex";
}

function closePopups() {
    document.getElementById('popupContainer').style.display = "none";
    document.getElementById("overlay").style.display = 'none';

    const popupContents = document.getElementsByClassName('popupContent');
    for (let content of popupContents) {
        content.style.display = "none";
    }

    const guidoVideo = document.getElementById("guidoVideo");
    guidoVideo.pause();
    guidoVideo.currentTime = 0;
    guidoVideo.load();
}