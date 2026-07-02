// Додаткове Завдання
// 'onMouseDown' і 'onMouseUp': Реалізуйте просту гру "Перетягування": створіть об'єкт, який можна перетягувати в межах певної області, використовуючи події натискання та відпускання кнопки миші

const dragZone = document.getElementById('game-zone');
const dragObj = document.getElementById('drag-object');

let offsetX = 0;
let offsetY = 0;
let isDragging = false;

dragObj.addEventListener('mousedown', (e) => {
  isDragging = true;

  offsetX = e.clientX - dragObj.offsetLeft;
  offsetY = e.clientY - dragObj.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) {
    return;
  };

  let newLeft = e.clientX - offsetX;
  let newTop = e.clientY - offsetY;

  dragObj.style.transform = 'none';
  dragObj.style.left = `${newLeft}px`;
  dragObj.style.top = `${newTop}px`;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
