// radio-buttons
const formEl = document.querySelector('form');
const body = document.body;

formEl.addEventListener('change', changeBg);

function changeBg() {
  let [...radiobuttons] = document.querySelectorAll('input[name="color"]');

  for (const radiobutton of radiobuttons) {
    if (radiobutton.checked) {
      body.style.backgroundColor = radiobutton.value;
    }
  }
}

// checkboxes

const checkboxFormEl = document.getElementById('hobby');
const outputEl = document.getElementById('output-result'); 

checkboxFormEl.addEventListener('change', showOptions);

function showOptions() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const checkedValues = [];

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      checkedValues.push(checkbox.value.toUpperCase()); 
    }
  }

  outputEl.textContent = checkedValues.length > 0 ? checkedValues.join(', ') : 'None';
}


