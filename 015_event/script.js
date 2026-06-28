const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('#text');
const generate_btn = document.querySelector('#generate');

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

generate_btn.addEventListener('click', () => {
  const newColor = getRandomColor();

  text.style.color = newColor;
  text.style.borderColor = newColor;
  text.innerText = newColor;
});

// 2. ondblclick
// Задача: Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази(змінюємо width i height).

let changeSize = document.querySelector('.change-size');

changeSize.ondblclick = function () {
  let newWidth = this.offsetWidth * 2;
  let newHeight = this.offsetHeight * 2;

  this.style.width = newWidth + 'px';
  this.style.height = newHeight + 'px';
};

// 3. addEventListener і removeEventListener

// Створити кнопку і текстовий елемент в якому розмість лічільник: 0, при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.

const counter = document.querySelector('.counter');
const btnIncrease = document.querySelector('.button.increase');

let count = 0;

counter.innerText = count;

btnIncrease.addEventListener('click', () => {
  count++;
  counter.innerText = count;

  if (count >= 10) {
    btnIncrease.setAttribute('disabled', 'disabled');
    btnIncrease.style.pointerEvents = 'none';
  }
  // або через функцію і css стилі 
  // checkLimits();
});

// function checkLimits() {
//   counter.innerText = count;
//   btnIncrease.disabled = count >= 10;
// }

// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу. Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки

const listEl = document.querySelector('#list-items');
const linksEl = listEl.querySelectorAll('.item');


for (let i = 0; i < linksEl.length; i++) {
  linksEl[i].addEventListener('click', () => {
    linksEl[i].remove();
  });
};

// 5.event.target   
// Створіть блок з классом blockContainer з 3 кнопками, в кожної з яких унікальний клас button.first, button.second, button.third.
// Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік

const blockContainer = document.querySelector('.block-container');

blockContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('button')) {

    const classesAsArray = [...event.target.classList];

    const uniqueClass = classesAsArray.find(className => className !== 'button');

    alert(`Клік отримала кнопка: ${uniqueClass}`); 
  }
});


