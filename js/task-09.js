function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const buttonChangeColor = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

buttonChangeColor.addEventListener("click", ChangeColor);

// function ChangeColor(event) {
//   body.style.backgroundColor = getRandomHexColor();
//   colorValue.textContent = body.style.backgroundColor;
// }
