'use strict';
const commonLiInUl = document.querySelectorAll('.item');
let namberLi = commonLiInUl.length;
let string1 = `Namber of categories: ${namberLi}`;
console.log(string1);

commonLiInUl.forEach(item => {
  const titleInUl = item.querySelector('h2').textContent;
  const liCount = item.querySelectorAll('ul li').length;
  let string2 = `Category: ${titleInUl}`;
  let string3 = `Elements: ${liCount}`;
  console.log(string2);
  console.log(string3);
});
