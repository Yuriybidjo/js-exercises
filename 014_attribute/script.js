// 1) Створіть сторінку та підключіть до неї js

// 2) За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background - color жовтого кольору і властивість text - align center
const body = document.querySelector('body');
const header = document.createElement('header');

header.style.backgroundColor = 'yellow';
header.style.padding = '50px';
header.style.textAlign = 'center';

body.prepend(header);

// 3) Header Menu Array
const menuData = [
  { name: 'Головна', url: '/' },
  { name: 'Про нас', url: '/about' },
  { name: 'Послуги', url: '/services' },
  { name: 'Контакти', url: '/contacts' },
];

// Створіть в хедері А теги зі значенням з обєкта name  встановленим значенням в href з url.

menuData.forEach(item => {
  const link = document.createElement('a');
  link.textContent = item.name;
  link.href = item.url;
  link.target = '_blank';

  // link.setAttribute('class', 'link');
  link.classList.add('link');

  header.append(link);
});

// 5)
// Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color

const container = document.createElement('div');
container.classList.add('container');
body.append(container);

const flexBoxContainer = document.createElement('div');
flexBoxContainer.classList.add('flex');

container.append(flexBoxContainer);

for (let i = 1; i <= 50; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.classList.add('circle-element');
  
  flexBoxContainer.prepend(box);
};



