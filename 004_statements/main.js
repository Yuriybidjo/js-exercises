// Task 1 Порівняння трьох чисел:

let number1 = Number(prompt(`Enter first number`, ''));
let number2 = Number(prompt(`Enter second number`, ''));
let number3 = Number(prompt(`Enter third number`, ''));

console.log(number1);
console.log(number2);
console.log(number3);

let numberValue1 = number1 >= number2 && number1 >= number3;
let numberValue2 = number2 >= number1 && number2 >= number3;
let numberValue3 = number3 >= number2 && number3 >= number1;

let biggerNumber;

if (numberValue1) {
  biggerNumber = numberValue1;
  console.log(`the bigger number is: ${number1}`);
} else if (numberValue2) {
  biggerNumber = numberValue2;
  console.log(`the bigger number is: ${number2}`);
} else {
  biggerNumber = numberValue3;
  console.log(`the bigger number is: ${number3}`);
}
