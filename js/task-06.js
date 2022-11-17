const input = document.querySelector("#validation-input");

input.addEventListener("blur", onFocus);

function onFocus(event) {
  input.classList.remove("invalid");
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
