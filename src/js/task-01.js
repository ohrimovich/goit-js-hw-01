///////// #1 ///////

const itemsRef = document.querySelectorAll('.item')
const countCategories = ref => console.log(`В списке ${itemsRef.length} категории`);
const countItems = ref => {
    itemsRef.forEach(item => console.log(`Категория:${item.querySelector('h2').textContent} Количество элементов: ${item.querySelector('ul').children.length}`));
}
countCategories(itemsRef);
countItems(itemsRef);

////////// #2 //////////////
