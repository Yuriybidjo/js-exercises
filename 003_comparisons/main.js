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

// Task 3

let clientAge = 18;

let enterIsAllow = Number(prompt(`Enter your age`, ''));

if (enterIsAllow >= clientAge) {
  console.log('Enter is allowed');
} else {
  console.log("Enter disallow");
}


// Task 4

let goodsQuantity = Number(prompt(`Quantity of goods is:`, 1 )); 
let goodsPrice = Number(prompt(`Price of goods is:`, 5));

let totalPriceGoods = goodsPrice * goodsQuantity;

console.log(`Total price of goods is: ${totalPriceGoods}`);


// Task 5

let productPrice = Number(prompt(`Enter price the product`, 0));

let amountPerCentOff = 0.5; // 50%

let productNewPrice = productPrice * amountPerCentOff;

alert(`The price of the product with off 50%: ${productNewPrice}`);