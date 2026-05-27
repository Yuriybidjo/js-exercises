'use strict';

// Task 1 Визначення типу геометричної фігури за допомогою switch:
let shape = prompt("Enter the type of geometric shape (circle, square, triangle):",'');
// Можна використати toLowerCase() щоб не писати по два case
// shape.toLowerCase();

switch (shape) {
  case "circle":
  case "Circle":
    console.log("Circle has 0 sides");
    break;
  case "square":
  case "Square":
    console.log("Square has 4 sides");
    break;
  case "triangle":
  case "Triangle":
    console.log("Triangle has 3 sides");
    break;
  default:
    console.log("Unknown shape");
};

// Task 2 Підрахунок суми всіх парних чисел від 0 до 20 за допомогою while:
const startNumber = 1;
const endNumber = 21;

let sum = 0;
let addedNumbers = startNumber;

while (addedNumbers < endNumber) {
  if (addedNumbers % 2 === 0) {
    sum += addedNumbers;
  }
  addedNumbers++;
};

console.log(`сума парних чисел від 0 до 20: ${sum}`);

// Task 3 Таблиця множення для числа 5
const number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
};

// Task 4 Зворотний лічильник від 10 до 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
};

// Task 5 Визначення парності числа до 10 використовуючи if та for
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`The number: ${i} is even`);
  } else {
    console.log(`The number: ${i} is odd`);
  }
};

// Task 6 Знаходження першого парного числа від 1 до 10

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {  
    console.log(`The first even number between 1 and 10 is: ${i}`);
    break;
  }
};

// Task 7 Виведення всіх парних чисел від 1 до 10 оператор continue

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  } else {
    console.log(`The even number between 1 and 10 is: ${i}`);
  }   
};