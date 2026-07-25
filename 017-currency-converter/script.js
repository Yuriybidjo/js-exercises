const selectElements = document.querySelectorAll('.currency');
const amountInput = document.getElementById('num');
const resultInput = document.getElementById('ans');
const convertBtn = document.getElementById('btn');

const exchangeRates = {
  USD: 1.0,
  EUR: 0.92,
  UAH: 41.5,
  GBP: 0.78
};

selectElements.forEach((select, index) => {
  Object.keys(exchangeRates).forEach(currency => {
    const option = document.createElement('option');
    option.value = currency;
    option.textContent = currency;
    select.appendChild(option);
  });

  select.selectedIndex = index;
});

function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const fromCurrency = selectElements[0].value;
  const toCurrency = selectElements[1].value;

  if (isNaN(amount) || amount <= 0) {
    alert('Введіть коректну суму!');
    return;
  }

  const amountInUSD = amount / exchangeRates[fromCurrency];
  const convertedAmount = amountInUSD * exchangeRates[toCurrency];

  resultInput.value = convertedAmount.toFixed(2);
}

convertBtn.addEventListener('click', convertCurrency);
