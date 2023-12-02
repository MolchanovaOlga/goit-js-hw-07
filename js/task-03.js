const inputName = document.querySelector('#name-input');
const nameUser = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
   if (inputName.value.trim() == ''){
    nameUser.textContent = "Anonymous";
    }
    
    nameUser.textContent = inputName.value.trim();
})

