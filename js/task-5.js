function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyStyle = document.querySelector('body');
const spanColor = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyStyle.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});
