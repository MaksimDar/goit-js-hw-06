const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const ingredientsList = (items) => {
  return items.map((item) => {
    const itemsList = document.createElement("li");
    itemsList.classList.add("item");
    itemsList.textContent = item;
    return itemsList;
  });
};

const elements = ingredientsList(ingredients);
console.log(elements);
list.append(...elements);

// const items = document.querySelector("#ingredients");
// items.classList.add("item");
// const firstIngredient = document.createElement("li");
// firstIngredient.textContent = "Potatoes";

// const secondIngredient = document.createElement("li");
// secondIngredient.textContent = "Mushrooms";

// const thirdIngredient = document.createElement("li");
// thirdIngredient.textContent = "Garlic";

// const fourhIngredient = document.createElement("li");
// fourhIngredient.textContent = "Tomatoes";

// const fifthIngredient = document.createElement("li");
// fifthIngredient.textContent = "Herbs";

// const sixthIngredient = document.createElement("li");
// sixthIngredient.textContent = "Condiments";

// items.prepend(
//   firstIngredient,
//   secondIngredient,
//   thirdIngredient,
//   fourhIngredient,
//   fifthIngredient,
//   sixthIngredient
// );
