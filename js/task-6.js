'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

input.addEventListener('input', event => {
  if (input.value < 0) {
    event.target.value = 0;
  } else if (input.value > 100) {
    event.target.value = 100;
  }
});

buttonCreate.addEventListener('click', () => {
  divBoxes.innerHTML = '';
  const inputValue = Math.floor(Number(input.value));
  input.value = '';
  const createUl = document.createElement('ul');
  createUl.style.minWidth = '426px';
  createUl.style.display = 'flex';
  createUl.style.flexDirection = 'row';
  createUl.style.flexWrap = 'wrap';
  createUl.style.gap = '44px';
  for (let i = 0; i < inputValue; i++) {
    const createLi = document.createElement('li');
    createLi.style.width = `${30 + i * 10}px`;
    createLi.style.height = `${30 + i * 10}px`;
    createLi.style.backgroundColor = getRandomHexColor();
    createUl.appendChild(createLi);
  }
  divBoxes.appendChild(createUl);
});

buttonDestroy.addEventListener('click', () => {
  divBoxes.innerHTML = '';
});
