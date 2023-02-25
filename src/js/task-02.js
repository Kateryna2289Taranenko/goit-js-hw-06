const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
console.log(list);

const ingredientsEl = ingredients.forEach((ingredient) => {
  const ingredientEL = document.createElement("li");
  ingredientEL.classList.add = "item";
  ingredientEL.textContent = `${ingredient}`;
  list.append(ingredientEL);
  console.log(ingredientEL);
});
