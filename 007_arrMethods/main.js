//push:

// Завдання 1:
//  Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів(наприклад, чисел чи рядків).

//   Завдання 2:
//  Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

let products = [];

products.push('Apple');
products.push('Banana');
products.push('Orange');

let newProducts = products.push('Grapes');

console.log(products);

// console.log(newProducts);

function addNewProduct(products, newProduct){
  products.push(newProduct);
  return products;
};

let updatedProducts = addNewProduct(products, 'Mango');

console.log(updatedProducts);

// pop:

// Завдання 1:
//  Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

//   Завдання 2:
//  Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

products.pop();

console.log(products);

function removeLastProduct(products){
  products.pop();
  return products;
};

let updatedRemovedProducts = removeLastProduct(products);
console.log(updatedRemovedProducts);

// unshift:

// Завдання 1:
//  Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.
//   Завдання 2:
//  Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.
products.unshift('Strawberry');
products.unshift('Blueberry');

console.log(products);

function addFirstProduct(products, newProduct){
  products.unshift(newProduct);
  return products;
};

// shift:
// Завдання 1:
//  Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.
//   Завдання 2: 
// Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

products.shift();

console.log(products); 

function removeFirstProduct(products){
  products.shift();
  return products;
};

let updatedRemovedFirstProducts = removeFirstProduct(products);
console.log(updatedRemovedFirstProducts);

// fill:
// Завдання 1:
//  Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.
//   Завдання 2:
//  Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.

let fillNumbers = new Array(7).fill(10);

console.log(fillNumbers);

fillNumbers.fill(20, 1, 4);

fillNumbers.fill(110, 5);

fillNumbers.fill('13', 6);

console.log(fillNumbers);

function fillArray(arr, value, start, end){
  arr.fill(value, start, end);
  return arr;
};

let filledArray = fillArray(fillNumbers, 50, 2, 5);

console.log(filledArray);

// splice:
// Завдання 1:
//  Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.
//   Завдання 2:
//  Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з масиву.

fillNumbers.splice(2, 3);

console.log(fillNumbers);

function removeElements(arr, index, count){
  arr.splice(index, count);
  return arr;
};

let splicedArray = removeElements(fillNumbers, 1, 2);

console.log(splicedArray);

// reverse:
// Завдання 1:
// Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.
//   Завдання 2:
//  Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

let reverseLetters = ['M', 'a', 'x', 'i', 'M'];
reverseLetters.reverse();

console.log(reverseLetters);

function reverseArray(arr){
  arr.reverse();
  return arr;
}

let reversedArray = reverseArray(reverseLetters);

console.log(reversedArray);

// concat:
// Завдання 1:
//  Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.
// Завдання 2: 
// Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.

let myMentor = ['M', 'a', 'x', 'i', 'm'];
let theBestMentor = ['i', 's', 't', 'h', 'e', 'B', 'e', 's', 't'];

let combinedMentors = myMentor.concat(theBestMentor);
console.log(combinedMentors);

function combineArrays(arr1, arr2){
  return arr1.concat(arr2);
};

// includes:
// Завдання 1:
//  Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.
//   Завдання 2:
//  Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в масиві.

let hasLetterM = combinedMentors.includes('M');
let hasLetter_m = combinedMentors.includes('m');

console.log(hasLetterM);
console.log(hasLetter_m);

function checkElement(arr, element){
  return arr.includes(element);
};  

let hasLetterA = checkElement(combinedMentors, 'a');
let hasLetterZ = checkElement(combinedMentors, 'z');
console.log(hasLetterA);
console.log(hasLetterZ);

// filter:
// Завдання 1:
//  Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише парні числа.
//   Завдання 2:
//  Напишіть функцію, яка приймає масив і функцію - умову, і використовує filter для створення нового масиву, що містить елементи, які задовольняють умову.

let numbersFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbersFiltered = numbersFilter.filter((num) => {
  num = num % 2 === 0;
  return num;
});

console.log(numbersFiltered);

function filterArray(arr, condition){
  return arr.filter(condition);
};    

let evenNumbers = filterArray(numbersFilter, (num) => num % 2 === 0);
let oddNumbers = filterArray(numbersFilter, (num) => num % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);

// map:
// Завдання 1:
//  Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.
//   Завдання 2:
//  Напишіть функцію, яка приймає масив і функцію - перетворювач, і використовує map для створення нового масиву, в якому кожен елемент отримує стрінг до значення

let numbersMap = [1, 2, 3, 4, 5];

let squaredNumbers = numbersMap.map((num) => {
  return num ** 2;
}); 

console.log(squaredNumbers);

function mapArray(arr, transformer){
  return arr.map(transformer);
};

let stringNumbers = mapArray(squaredNumbers, (element) => {
  return ` New  Map number in square: ${element}`;
});

console.log(stringNumbers); 