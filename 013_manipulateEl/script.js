// виберіть всі елементи першого рівня вкладення і виведіть в консоль їх кількість

const listEl = document.querySelector('#tree');

const firstLevelItems = listEl.children;

//  виведіть в консоль кількість елементів 2 рівня вкладення.
let secondLevelCount = 0;

for (const li of firstLevelItems) {
  const subList = li.querySelector('ul');
  if (subList) {
    secondLevelCount += subList.children.length;
  }
};

console.log('----- first level length -------');

console.log(`Кількість елементів 1-го рівня: ${firstLevelItems.length}`); 

console.log('----- second level items length -------');

console.log(`Кількість елементів 2-го рівня: ${secondLevelCount}`); 




