console.log(`----- Date.getYear() getFullYear() -----`);

// Task 1: Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік


function getBirthYear(age) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;  
    return birthYear;
};


const userAge = +prompt("Введіть свій вік:", "");

const birthYear = getBirthYear(userAge);

console.log(`Ваш рік народження: ${birthYear}`);  

console.log(`---  Date.toLocaleString: ----`);

// Task 2. Створіть об'єкт Date для поточної дати та часу.

// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.
// Виведіть результат у консоль.
// Створення об'єкта з поточною датою

const currentDate = new Date();

const readableDate = currentDate.toLocaleString('uk-UA'); 

console.log("Поточна дата та час:", readableDate);

console.log(`---- String.split та toUpperCase -----`);

// Task 3: Створіть рядок, який містить слова, розділені пробілами.

// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.

const text = "Привіт Макс! What's up?";

const wordsArray = text.toUpperCase().split(" ");

console.log("Слова у верхньому регістрі:", wordsArray);