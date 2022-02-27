"use strict";

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");

function toggleMenu() {
  hamburger.classList.toggle("opened");
  menu.classList.toggle("opened");
  body.classList.toggle("opened");
}

hamburger.addEventListener("click", toggleMenu);
navLinks.forEach((link) => link.addEventListener("click", toggleMenu));
