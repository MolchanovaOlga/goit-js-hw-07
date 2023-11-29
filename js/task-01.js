const ulCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulCategories.length}`);

for (const category of ulCategories) {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    
    const items = category.querySelectorAll('ul>li');
    console.log(`Elements: ${items.length}`);
}
