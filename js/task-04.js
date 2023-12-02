const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const emailUser = event.target.elements.email;
    const passwordUser = event.target.elements.password;
    const result = {
        email: emailUser.value.trim(),
        password: passwordUser.value.trim()
    }

if (result.email === '' || result.password === '') {
    alert('All form fields must be filled in.');
}
    console.log(result);
    form.reset()
})



/* 
Напиши скрипт управління формою логіна.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>


Обробка відправлення форми form.login-form повинна відбуватися за подією submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те,
що 'All form fields must be filled in'. Не додавай на інпути атрибут required,
валідація має відбуватися саме через JS.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт
з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення 
 інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/