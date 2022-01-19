"use strict"

setInterval(() => {
    console.log("Working");
    if (screen.availHeight > screen.availWidth) {
        console.log("Please use Landscape!");
    }
}, 1000);