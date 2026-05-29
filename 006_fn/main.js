// Task 1 Калькулятор використовуючи switch

function addNumbers(a, b) {
  return a + b;
};

function subtractNumbers(a, b) {
  return a - b;
};

function multiplyNumbers(a, b) {
  return a * b;
};

function divideNumbers(a, b) {
  if (b === 0) {
    return "Помилка: ділення на нуль неможливе!";
  }
  return a / b;
};

//Function with switch case
function calculateValue(a, b, operator) {
  switch (operator) {
    case '+':
      return addNumbers(a, b);
    case '-':
      return subtractNumbers(a, b);
    case '*':
      return multiplyNumbers(a, b);
    case '/':
      return divideNumbers(a, b);
    default:
      return "Помилка: невідомий оператор!";
  }
};
console.log(calculateValue(10, 2, '+'));
console.log(calculateValue(9, 3, '-'));
console.log(calculateValue(2, 5, '*'));
console.log(calculateValue(5, 5, '/'));
console.log(calculateValue(10, 0, '/'));

// Task 2 Параметри та колбеки: welcomeUser array callback hiUser console.log('Вітаю ${user}) для кожного юзер в масиві

let users = ['Степан', 'Симон', 'Василь', 'Дмитро', 'Роман'];

function welcomeUser(users, hiUser) {
  for (let i = 0; i < users.length; i++) {
    hiUser(users[i]);
  }
};

let hiUser = (user) => {
  console.log(`Вітаю ${user}`);
};

welcomeUser(users, hiUser);