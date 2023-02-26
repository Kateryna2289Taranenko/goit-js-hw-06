const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const arrayIngredients = [];
ingredients.map((ingredient) => {
  const ingredientEL = document.createElement("li");
  ingredientEL.classList.add("item");
  ingredientEL.textContent = ingredient;
  arrayIngredients.push(ingredientEL);
});
ingredientsList.append(...arrayIngredients);
