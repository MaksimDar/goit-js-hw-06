const inputSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputSizeControl.addEventListener("input", (event) => {
  text.style.fontSize = inputSizeControl.value + "px";
});
