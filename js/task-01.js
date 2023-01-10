const categoriesListEl = document.querySelector('ul#categories');
// console.log(categoriesListEl)
const categoryItems = categoriesListEl.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const category = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll(':scope > ul > li').length;
  console.log(`Category: ${category}\n  Elements: ${elementsCount}`)
}
)
