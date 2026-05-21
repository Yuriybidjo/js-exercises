// Task 1 Порівняння трьох чисел:
/*
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

// Task 2 Визначення сезону

// 1 Зима 12, 1, 2 Весна 3, 4, 5 Літо 6, 7, 8 Осінь 9, 10, 11

let currentMonth = Number(prompt(`For define season enter number from 1 to 12 `));

let season;

switch (currentMonth) {
  case 1:
    season = 'Winter';
  case 2:
    season = 'Winter';
  case 12:
    season = 'Winter';
    break;

  case 3:
    season = 'Spring';
  case 4:
    season = 'Spring';
  case 5:
    season = 'Spring';
    break;

  case 6:
    season = 'Summer';
  case 7:
    season = 'Summer';
  case 8:
    season = 'Summer';
    break;

  case 9:
    season = 'Autumn';
  case 10:
    season = 'Autumn';
  case 11:
    season = 'Autumn';
    break;

  default:
    season = "The season like this number does't exist";
    break;
};

console.log(season);

*/
// Ttask 3 Перевірка величини кута
 let angle = Number(prompt(`Enter angle value from 0 to 360`));

 let angleType;

 angle >= 0 && angle < 90 ? angleType = 'Acute angle' : angleType = 'blunt angle';

 console.log(angleType);