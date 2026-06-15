const header = document.querySelector('header');
const titleElement = document.querySelector('#main-title');
let descriptionEl = document.getElementsByTagName('p');
let mainContent = document.getElementById('main-content');
let instructions = document.getElementsByClassName('instructions');

console.log(header, titleElement, descriptionEl, mainContent, instructions);

const listItems = document.querySelectorAll('.item');
const listItemFirst = document.querySelectorAll('.item:first-child');
const listItemMiddle = document.querySelectorAll('.item:nth-child(2)');
const listItemLast = document.querySelectorAll('.item:last-child');

console.log('---------------------');

console.log('NodeLists:');
console.log(listItems);
console.log(listItemFirst);
console.log(listItemMiddle);
console.log(listItemLast);

console.log('---------------------');

console.log('--------- Array from NodeList ------------');
const itemsArray = Array.from(listItems);
console.log(itemsArray);

console.log('--------- Spread NodeList to Array ------------');
let [...itemsElements] = document.querySelectorAll('.item');
console.log(itemsElements);

console.log('--------- Compare NodeList and Array ------------');
console.log(itemsArray === itemsElements); // false







