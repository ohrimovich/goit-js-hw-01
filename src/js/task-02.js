const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredientsList = arr => {
  const containerRef = document.querySelector('#ingredients');
  const ingredientsList = arr.map(item => {
    const ingredientItem = document.createElement('li');
    ingredientItem.classList.add('ingredient-item');
    ingredientItem.textContent = item;
    return ingredientItem;
  })
  containerRef.append(...ingredientsList);
}

console.log(createIngredientsList(ingredients));
