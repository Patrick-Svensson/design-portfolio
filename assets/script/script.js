"use strict";

// ***** Variables *****
const menuToggle = document.querySelector(".c-navbar-toggler");
const toggleClose = document.querySelector(".c-navbar-toggler__close");

// ***** Toggle Close Menu *****
menuToggle.addEventListener("click", () => {
    toggleClose.classList.toggle("menuTogglerClose");
});
