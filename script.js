var _ = require('lodash');

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array, 5));
const css = document.querySelector("h3");
const color1 = document.querySelector(".js-color1");
const color2 = document.querySelector(".js-color2");
const body = document.getElementById("gradient");

function setGradient() {
  body.style.background = "linear-gradient(to right, " 
  + color1.value 
  + ", " + color2.value 
  + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient); 