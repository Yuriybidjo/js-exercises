const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('#text');
const generate_btn = document.querySelector('#generate');

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

generate_btn.addEventListener('click', () => {
  const newColor = getRandomColor(); 

  text.style.color = newColor;          
  text.style.borderColor = newColor;           
  text.innerText = newColor; 
});

