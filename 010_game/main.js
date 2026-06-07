const computerChoices = ['камінь', 'папір', 'ножиці'];

const randomIndex = Math.floor(Math.random() * computerChoices.length);

let playerChoice = prompt("Введіть камінь, папір або ножиці:").toLowerCase();

const computerChoice = computerChoices[randomIndex];

if (playerChoice === computerChoice) {
  alert("Нічия!");
} else if ((playerChoice === 'камінь' && computerChoice === 'ножиці') ||
  (playerChoice === 'папір' && computerChoice === 'камінь') ||
  (playerChoice === 'ножиці' && computerChoice === 'папір  ')) {
  alert("Ви виграли!");
} else {
  alert("Ви програли!");
}

console.log(`Ваш вибір: ${playerChoice}`);
console.log(`Вибір комп'ютера: ${computerChoice}`);