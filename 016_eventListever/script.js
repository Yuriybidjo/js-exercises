// Завдання 1 'onMouseOver' і 'onMouseOut': Створіть область на сторінці (наприклад, div), яка змінює свій фоновий колір, коли користувач наводить на неї курсор миші, та повертає початковий колір, коли курсор покидає цю область.
const newBackgroundColor = document.querySelector('.box-1');

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = 'lightblue';
};

function resetBgColor() {
  newBackgroundColor.style.backgroundColor = '';
};

newBackgroundColor.addEventListener('mouseover', changeBgColor);
newBackgroundColor.addEventListener('mouseout', resetBgColor);

// Завдання 2 'onContextMenu': 
// Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент".

const textBlock = document.getElementById('text-block');
const targetText = document.getElementById('target-text');
const customMenu = document.getElementById('custom-menu');

textBlock.addEventListener('contextmenu', function (event) {
  event.preventDefault(); 
  customMenu.style.display = 'block';
});

customMenu.addEventListener('click', function (event) {
  const action = event.target.getAttribute('data-action');

  if (action === 'center') {
    targetText.style.textAlign = 'center';
  } else if (action === 'right') {
    targetText.style.textAlign = 'right';
  } else if (action === 'left') {
    targetText.style.textAlign = 'left';
  } else if (action === 'hide') {
    textBlock.style.display = 'none'; 
  }

  customMenu.style.display = 'none';
});

document.addEventListener('click', function () {
  customMenu.style.display = 'none';
});

// Завдання 3 'onMouseOver' і 'onMouseOut': 
// Розмістіть зображення на сторінці, та додайте події де при наведенні курсору на зображення воно збільшується або підсвічується.Коли курсор миші покидає зображення, воно повертається до свого початкового розміру або стилю.

const image = document.querySelector('#target-image');

image.addEventListener('mouseover', function () {
  image.classList.add('img-hovered');
});

image.addEventListener('mouseout', function () {
  image.classList.remove('img-hovered');
});

// Завдання 4 'keyup': Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок. Рух об'єкта повинен зупинятися, коли клавіша відпущена
const player = document.getElementById('player');

let positionX = 0;
let positionY = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    positionX += 10;
    player.style.left = positionX + 'px';
  };
  if (event.key === 'ArrowLeft') {
    positionX -= 10;
    player.style.left = positionX + 'px';
  };
  if (event.key === 'ArrowUp') {
    positionY -= 10;
    player.style.top = positionY + 'px';
  };
  if (event.key === 'ArrowDown') {
    positionY += 10;
    player.style.top = positionY + 'px';
  }

  event.preventDefault();
});

