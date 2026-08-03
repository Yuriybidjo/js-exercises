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

// countries
const selectCountry = document.getElementById('country');
const capitalText = document.getElementById('capital-text');
const populationText = document.getElementById('population-text');

const countriesData = {
  ukraine: { capital: 'Kyiv', population: '38 million' },
  japan: { capital: 'Tokyo', population: '125 million' },
  france: { capital: 'Paris', population: '68 million' },
  england: { capital: 'London', population: '56 million' }
};


selectCountry.addEventListener('change', (event) => {
  const selectedCountry = event.target.value; 

  if (selectedCountry && countriesData[selectedCountry]) {
    const data = countriesData[selectedCountry];

    capitalText.textContent = data.capital;
    populationText.textContent = data.population;
  } else {
    capitalText.textContent = '-';
    populationText.textContent = '-';
  }
});

// rating
const ratingForm = document.getElementById('rating-form');
const ratingMessage = document.getElementById('rating-message');

const feedbackMessages = {
  '1': 'Нам дуже прикро.',
  '2': 'Шкода, що вам не сподобалося.',
  '3': 'Дякуємо!',
  '4': 'Раді, що вам сподобалося.',
  '5': 'Дякуємо за найвищу оцінку!'
};

ratingForm.addEventListener('change', (event) => {
  const userRating = event.target.value;

  ratingMessage.textContent = feedbackMessages[userRating];
});

// pizza
const pizzaForm = document.getElementById('pizza-form');
const totalPriceEl = document.getElementById('total-price');

pizzaForm.addEventListener('change', calculatePizzaPrice);

function calculatePizzaPrice() {
  const pizzaSelect = document.getElementById('pizza-select');
  const basePrice = Number(pizzaSelect.value);

  if (basePrice === 0) {
    totalPriceEl.textContent = '0';
    return;
  }

  const selectedSize = document.querySelector('input[name="size"]:checked');
  const sizePrice = Number(selectedSize.value);

  const checkedToppings = document.querySelectorAll('input[name="topping"]:checked');
  let toppingsPrice = 0;

  for (const topping of checkedToppings) {
    toppingsPrice += Number(topping.value);
  }

  const finalPrice = basePrice + sizePrice + toppingsPrice;

  totalPriceEl.textContent = finalPrice;
}

