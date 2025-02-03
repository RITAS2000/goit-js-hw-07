'use strict';
const inputValue = document.querySelector('#name-input');

const titleValue = document.querySelector('#name-output');

inputValue.addEventListener('input', event => {
  const trimedValue = event.currentTarget.value.trim();
  titleValue.textContent = trimedValue || 'Anonymous';
});
