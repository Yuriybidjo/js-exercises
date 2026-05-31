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