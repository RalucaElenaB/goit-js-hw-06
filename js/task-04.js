const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById("value");

// Declara variabila pentru stocarea valorii contorului
let counterValue = 0;

// Funcție pentru actualizarea interfeței cu noua valoare a contorului
function updateCounterUI() {
  valueSpan.textContent = counterValue;
}

// Adaugă handler pentru clic pe butonul de decrementare
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterUI();
});

// Adaugă handler pentru clic pe butonul de incrementare
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterUI();
});

// Inițializează interfața cu valoarea inițială a contorului
updateCounterUI();
