const ulCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulCategories.length}`);

ulCategories.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    
    const items = category.querySelectorAll('ul>li');
    console.log(`Elements: ${items.length}`);
})



/* HTML містить список категорій ul#categories.
З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст
заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього). */