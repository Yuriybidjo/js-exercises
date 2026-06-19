// виберіть всі елементи першого рівня вкладення і виведіть в консоль їх кількість

const listEl = document.querySelector('#tree');

const firstLevelItems = listEl.children;

//  виведіть в консоль кількість елементів 2 рівня вкладення.
let secondLevelCount = 0;

for (const li of firstLevelItems) {
  const subList = li.querySelector('ul');
  if (subList) {
    secondLevelCount += subList.children.length;
  }
};

console.log('----- first level length -------');

console.log(`Кількість елементів 1-го рівня: ${firstLevelItems.length}`);

console.log('----- second level items length -------');

console.log(`Кількість елементів 2-го рівня: ${secondLevelCount}`);

// 2) пройдіть по масиву і зробіть заповнення таблиці даними з масива

const booksArray = [
  {
    title: 'Пригоди Аліси в Країні Див',
    year: 1865,
    rating: 4.5,
    author: 'Lewis Carroll',
  },
  {
    title: '1984',
    year: 1949,
    rating: 4.8,
    author: 'George Orwell',
  },
  {
    title: 'Гаррі Поттер і філософський камінь',
    year: 1997,
    rating: 4.7,
    author: 'Joanne Rowling',
  }
];

const tbody = document.querySelector('tbody');

for (let i = 0; i < booksArray.length; i++) {
  const book = booksArray[i];

  const tr = document.createElement('tr');

  const tdTitle = document.createElement('td');
  tdTitle.textContent = book.title;

  const tdYear = document.createElement('td');
  tdYear.textContent = book.year;

  const tdRating = document.createElement('td');
  tdRating.textContent = book.rating;

  const tdAuthor = document.createElement('td');
  tdAuthor.textContent = book.author;

  tr.appendChild(tdTitle);
  tr.appendChild(tdYear);
  tr.appendChild(tdRating);
  tr.appendChild(tdAuthor);

  tbody.appendChild(tr);
};

//  3)   Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript.

// 4)Створіть блок контейнер та перебераючи маси створіть елемент Р в залежності від usePrepend розмість його перед контейнером або за контейнером 

const boxElements = document.getElementById('box');
const boxElements2 = document.getElementById('box2');

const elementsArray = [
  {
    tag: 'p',
    text: 'Element 1',
  },
  {
    tag: 'div',
    text: 'Element 2',
  },
  {
    tag: 'span',
    text: 'Element 3'
  }
];

const elementsArray2 = [
  {
    text: 'Element 2.1',
    usePrepend: true,
  },
  {
    text: 'Element 2.2',
    usePrepend: false,
  },
  {
    text: 'Element 3.3',
    usePrepend: true,
  }
]

// Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента та повертає його в контейнер.

const createElement = ({ tag, text }) => {
  const newElement = document.createElement(tag);
  newElement.textContent = text;
  return newElement;
};


// Пройдіть циклом по масиву і для кожного обєкту застосуйте створену функцію

elementsArray.forEach(item => {
  const domElement = createElement(item);
  boxElements.appendChild(domElement);
});

// before / after the container
elementsArray2.forEach(({ text, usePrepend }) => {
  const pElement = document.createElement('p');
  pElement.textContent = text;

  if (usePrepend) {
    boxElements2.before(pElement); 
  } else {
    boxElements2.after(pElement);
  }
});











