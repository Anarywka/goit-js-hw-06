const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const ingredientsEl = document.querySelector('ul#ingredients');

const li = ingredients.map((ingredient) => {
    const item = document.createElement("li");
  item.className = "item";
  item.textContent = ingredient;

  return item
});


ingredientsEl.append(...li);
