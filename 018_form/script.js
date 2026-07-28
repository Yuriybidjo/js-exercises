
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
