// task 1


let number1 = 33;
let number2 = 25;

//  Варіант 1 

let resultValue = number1 === number2;

alert(`Result to compare the numbers to equal value ${number1} and ${number2} is: ${resultValue}`);

// ВАріант 2

resultValue = alert(number1 < number2); // false
resultValue = alert(number1 > number2); // true
resultValue = alert(number1 >= number2); // true
resultValue = alert(number1 <= number2); // false
resultValue = alert(number1 == number2); // false
resultValue = alert(number1 === number2); // false
resultValue = alert(number1 != number2); // true
resultValue = alert(number1 !== number2); //true

// Task 2

let anyNumber = Number(prompt(`Enter any number`, ''));

let evenNumber = anyNumber % 2 === 0;

console.log(evenNumber);

