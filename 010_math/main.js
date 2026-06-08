// Task 1 a) Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.
function findSmaller(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(findSmaller(5, 10)); // Виведе: 5
console.log(findSmaller(-3, 2)); // Виведе: -3

// Task 1 b) Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.

function findLarger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(findLarger(5, 10)); // Виведе: 10
console.log(findLarger(-3, 2)); // Виведе: 2

// Task 2 Створіть функцію, яка підносить число до заданого ступеня
function power(base, exponent) {
  return Math.pow(base, exponent);
}

console.log(power(2, 3)); // Виведе: 8
console.log(power(5, 2)); // Виведе: 25

// Task 3 a) Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.

function floorNumber(num) {
  return Math.floor(num);
}

console.log(floorNumber(3.7)); // Виведе: 3
console.log(floorNumber(-2.3)); // Виведе: -3

// Task 3 b) Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.
function ceilNumber(num) {
  return Math.ceil(num);
} 

console.log(ceilNumber(3.7)); // Виведе: 4
console.log(ceilNumber(-2.3)); // Виведе: -2