const numberOfCategories = document.querySelector("#categories");
console.log("Number of categories:", numberOfCategories.children.length);
const items = document.querySelectorAll(".item");
items.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  const elementsInCategory = element.querySelectorAll("li");
  console.log("Elements:", elementsInCategory.length);
});
