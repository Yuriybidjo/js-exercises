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