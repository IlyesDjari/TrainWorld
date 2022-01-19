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

document.getElementById('planelement').addEventListener("click", (e) => {
    e.preventDefault;

    document.getElementById('planelement').style.display = "none";

    console.log("clicked");
})