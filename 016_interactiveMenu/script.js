// Комбіноване завдання 5 'keydown' і 'keyup' для створення інтерактивного меню: Коли користувач натискає певну клавішу М, з'являється  меню ul елемент в якому 3 li, і зробити можливість  переміщатися по пунктах меню, використовуючи клавіші вгору/вниз змінюючи бекграунд. При натиску клавіші С меню зникає.

const menu = document.getElementById('interactive-menu');

const menuItems = Array.from(menu.querySelectorAll('li'));

let activeIndex = -1;

function updateMenuHighlight() {
  menuItems.forEach((item, index) => {
    if (index === activeIndex) {
      item.classList.add('active'); 
    } else {
      item.classList.remove('active'); 
    }
  });
};

window.addEventListener('keydown', (event) => {
  if (menu.style.display === 'block') {

    if (event.key === 'ArrowDown') {
      event.preventDefault(); 

      activeIndex = activeIndex + 1;

      if (activeIndex >= menuItems.length) {
        activeIndex = 0; 
      }

      updateMenuHighlight();
    }
    
    if (event.key === 'ArrowUp') {
      event.preventDefault(); 

      activeIndex = activeIndex - 1;

      if (activeIndex < 0) {
        activeIndex = menuItems.length - 1; 
      }

      updateMenuHighlight(); 
    }
  }
});


window.addEventListener('keyup', (event) => {
  const key = event.key.toLowerCase(); 

  if (key === 'm' || key === 'ь') {
    menu.style.display = 'block'; 

    if (activeIndex === -1) {
      activeIndex = 0;
      updateMenuHighlight();
    }
  }

  if (key === 'c' || key === 'с') {
    menu.style.display = 'none'; 
    activeIndex = -1; 
    updateMenuHighlight();
  }
});