'use strict';
const formUse = document.querySelector('.login-form');
formUse.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = event.target.email.value.trim();
  const passValue = event.target.password.value.trim();
  if (emailValue === '' || passValue === '') {
    alert('All form fields must be filled in');
  }
  const objValue = {};
  for (let element of event.target.elements) {
    if (element.type !== 'submit' && element.value.trim() !== '') {
      objValue[element.name] = element.value.trim();
    }
  }
  if (Object.keys(objValue).length > 0) {
    console.log(objValue);
    formUse.reset();
  }
});
// розбіжності з макетом и ТЗ в конспекті)
const buttonUse = document.querySelector('.login-form button');
buttonUse.textContent = 'Log in';

// const inputEl = document.querySelector('input');
// const targetKey = 'a'; // змінюй на потрібну клавішу
// let keyPressCount = 0;

// document.addEventListener('keydown', event => {
//   if (event.key === targetKey) {
//     keyPressCount++;

//     if (keyPressCount === 7) {
//       inputEl.style.color = 'red'; // змінюємо колір тексту
//     }
//   }
// });
