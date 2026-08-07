const button = document.getElementById("bg-color-btn");

// Варіант з простим Array of colors
/*
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD"];
function changeBg() {
  const colorIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[colorIndex];
}

button.addEventListener("click", changeBg);
*/

// Варіант з використанням CSS змінних
const colorVariables = ["--bg-1", "--bg-2", "--bg-3", "--bg-4", "--bg-5"];

function changeBg() {
  const randomIndex = Math.floor(Math.random() * colorVariables.length);
  const selectedVariable = colorVariables[randomIndex];
  const rootStyles = getComputedStyle(document.documentElement);
  const colorValue = rootStyles.getPropertyValue(selectedVariable).trim();

  document.body.style.backgroundColor = colorValue;
}

button.addEventListener("click", changeBg);
