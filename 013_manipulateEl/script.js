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

  const tdAuthor =document.createElement('td');
  tdAuthor.textContent = book.author;

  tr.appendChild(tdTitle);
  tr.appendChild(tdYear);
  tr.appendChild(tdRating);
  tr.appendChild(tdAuthor);

  tbody.appendChild(tr);
};






