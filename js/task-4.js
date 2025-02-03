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
    if (element.type !== 'submit') {
      objValue[element.name] = element.value.trim();
    }
  }
  console.log(objValue);
  formUse.reset();
});
// розбіжності з макетом и ТЗ в конспекті)
const buttonUse = document.querySelector('.login-form button');
buttonUse.textContent = 'Log in';
