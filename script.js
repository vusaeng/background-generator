const css = document.querySelector("h3");
var color1 = document.querySelector(".js-color1");
var color2 = document.querySelector(".js-color2");
const body = document.getElementById("gradient");
const button = document.querySelector(".js-random");

function setGradient() {
  body.style.background = "linear-gradient(to right, " 
  + color1.value 
  + ", " 
  + color2.value 
  + ")";
  css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomGradient() {
  color1 = getRandomColor();
  document.querySelector(".js-color1").value = color1;  //color input to match randomly selected color 
  color2 = getRandomColor();
  document.querySelector(".js-color2").value = color2;
  body.style.background = "linear-gradient(to right, " 
  + color1
  + ", " + color2 
  + ")";
  css.textContent = body.style.background + ";";
}


 
window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient); 

button.addEventListener("click", setRandomGradient);