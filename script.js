"use strict";

let toggleButtons = document.querySelectorAll(".item");

toggleButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    } else {
      btn.classList.add("active");
    }
  });
});
