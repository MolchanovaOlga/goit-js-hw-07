const ulCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulCategories.length}`);

ulCategories.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    
    const items = category.querySelectorAll('ul>li');
    console.log(`Elements: ${items.length}`);
})