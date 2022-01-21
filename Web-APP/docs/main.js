(() => {
  "use strict";

  function e() {
    screen.availHeight > screen.availWidth ? (document.getElementById("askLandscape").style.display = "flex", document.getElementById("homepage").style.display = "none") : screen.availHeight < screen.availWidth && (document.getElementById("homepage").style.display = "flex", document.getElementById("askLandscape").style.display = "none")
  }
  window.onload = function () {
    ! function () {
      const t = document.getElementById("welcomePopup");
      t.style.display = "block", document.getElementById("welcomeClose").addEventListener("click", (() => {
        t.style.display = "none", e(), setInterval((() => e()), 1e3)
      }))
    }(), document.getElementById("popupClose").addEventListener("click", (e => {
      document.getElementById("popupContainer").style.display = "none";
      const t = document.getElementsByClassName("popupContent");
      for (let e of t) e.style.display = "none";
      const n = document.getElementById("guidoVideo");
      n.pause(), n.currentTime = 0, n.load()
    })), document.getElementById("groundPlanSvg").addEventListener("click", (e => {
      const t = e.target.closest(".clickableObject");
      if (t) {
        document.getElementById("popupContainer").style.display = "inherit";
        const e = t.getAttribute("data-name");
        document.getElementById(`${e}Popup`).style.display = "flex", "portrait" == e && document.getElementById("guidoVideo").play()
      }
    })), document.getElementById("darkmodeSlider").addEventListener("change", (() => {
      document.body.classList.toggle("darkmode"), document.getElementById("popupContainer").classList.toggle("darkmodePopup")
    }))
  }
})();