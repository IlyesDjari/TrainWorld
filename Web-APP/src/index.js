"use strict"

window.onload = function () {}

setInterval(() => {
    console.log("Working");
    if (screen.availHeight > screen.availWidth) {
        document.getElementById('askLandscape').style.display = "flex";
    } else if (screen.availHeight < screen.availWidth) {
        document.getElementById('askLandscape').style.display = "none";
    }
}, 1000);