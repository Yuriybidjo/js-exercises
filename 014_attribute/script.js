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

