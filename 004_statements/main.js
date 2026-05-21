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

// Ttask 3 Перевірка величини кута
 let angle = Number(prompt(`Enter angle value from 0 to 360`));

 let angleType;

 angle >= 0 && angle < 90 ? angleType = 'Acute angle' : angleType = 'blunt angle';

 console.log(angleType);

// Task 4 Визначення розміру числа
let number = Number(prompt(`Enter positive or negative number or zero `));
let numberType;

if(number > 0){
  numberType = 'Positive number';
} else if (number < 0) {
  numberType = 'Negative number';
} else {
  numberType = 'Zero';
}

console.log(numberType);
*/

// Task 5 Оцінка студента
let studentScore = Number(prompt(`Enter student score from 0 to 100`));

let studentsGrade;

if (studentScore >= 90 && studentScore <= 100) {
  studentsGrade = 'A';
} else if (studentScore >= 80 && studentScore <= 89) {
  studentsGrade = 'B';
} else if (studentScore >= 70 && studentScore <= 79) {
  studentsGrade = 'C';
} else if (studentScore >= 60 && studentScore <= 69) {
  studentsGrade = 'D';
} else if (studentScore < 60 && studentScore >= 0) {
  studentsGrade = 'F';
} else {
  studentsGrade = "The score like this number does't exist";
}
console.log(studentsGrade);

//Збільште оцінку студента на одиницю, використовуючи постфіксний інкремент. Виведіть у консоль повідомлення про оцінку до і після інкремента та визначте за допомогою тернарного оператора, чи студент зарахований чи ні (прохідний бал 60).

let isPassed = 60;

studentScore++;

console.log(`Student score after increment: ${studentScore}`);

let isStudentPassed = studentScore >= isPassed ? 'Student is passed' : 'Student is not passed';
console.log(isStudentPassed); 

