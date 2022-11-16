const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const items = document.querySelector("#ingredients");
items.classList.add("item");
const firstIngredient = document.createElement("li");
firstIngredient.textContent = "Potatoes";

const secondIngredient = document.createElement("li");
secondIngredient.textContent = "Mushrooms";

const thirdIngredient = document.createElement("li");
thirdIngredient.textContent = "Garlic";

const fourhIngredient = document.createElement("li");
fourhIngredient.textContent = "Tomatoes";

const fifthIngredient = document.createElement("li");
fifthIngredient.textContent = "Herbs";

const sixthIngredient = document.createElement("li");
sixthIngredient.textContent = "Condiments";

items.prepend(
  firstIngredient,
  secondIngredient,
  thirdIngredient,
  fourhIngredient,
  fifthIngredient,
  sixthIngredient
);
