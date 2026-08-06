const regexForm = document.getElementById('regex-form');
const regexInput = document.getElementById('regex-input');
const resultDiv = document.getElementById('results');
// 1 Знаходження всіх великих літер в тексті і збереження їх в масив... /[A-ZА-ЯҐЄІЇ]/g
let textStr = "Morem ipsum dolor sit Amet consectetur adipisicing elit. Xos itaque vero laborum fugit harum! quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, Ipsa vitae Minima quasi doloribus repellendus cupiditate!";

let upperCaseLetters = textStr.match(/[A-ZА-ЯҐЄІЇ]/g);

console.log(upperCaseLetters);

// 2 Вибір числових значень з строки
let operation = "5 плюс 7 = 3";//...  /[0-9]+/g

let getNumbers = operation.match(/[0-9]+/g);

console.log(getNumbers);

// 3  Знаходження слів із певною кількістю символів:... \b[A-Za-zА-Яа-яҐєІіЇїєґ]{5}\b

let getWords = textStr.match(/\b[A-Za-zА-Яа-яҐєІіЇїєґ]{5}\b/g);

console.log(getWords);