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
        document.getElementById('popupContainer').style.display = "none";
        const popupContents = document.getElementsByClassName('popupContent');
        for (let content of popupContents) {
            content.style.display = "none";
        }

        const guidoVideo = document.getElementById("guidoVideo");
        guidoVideo.pause();
        guidoVideo.currentTime = 0;
        guidoVideo.load();
    })

    document.getElementById('groundPlanSvg').addEventListener("click", (e) => {
        const clickedObject = e.target.closest('.clickableObject');
        if (clickedObject) {
            document.getElementById("popupContainer").style.display = 'inherit';
            const objectName = clickedObject.getAttribute('data-name');
            document.getElementById(`${objectName}Popup`).style.display = 'flex';
            if (objectName == "portrait") {
                const guidoVideo = document.getElementById("guidoVideo");
                guidoVideo.play();
            }
        }
    })

    // when the switch is toggled, classes are added or removed
    document.getElementById('darkmodeSlider').addEventListener('change', () => {
        document.body.classList.toggle("darkmode");
        document.getElementById("popupContainer").classList.toggle("darkmodePopup");
        document.getElementById("askLandscape").classList.toggle("darkmode");
    })
}


function showWelcomePopup() {
    const popup = document.getElementById("welcomePopup");
    popup.style.display = "block";

    // when the cross is clicked, the popup disappears
    const exitPopup = document.getElementById("welcomeClose");
    exitPopup.addEventListener("click", () => {
        popup.style.display = "none";
        document.getElementById('homepage').style.display = "flex";
    });
}