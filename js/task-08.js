const form = document.querySelector(".login-form");
form.addEventListener("submit", handleClick);
function handleClick(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (email.length === 0 || password.length === 0) {
    alert("All fields must be filled!");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  form.reset();
}
