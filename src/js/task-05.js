// Obține elementele necesare din DOM
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Adaugă un event listener pentru evenimentul "input" pe input#name-input
nameInput.addEventListener("input", () => {
  // Obține valoarea din input#name-input
  const inputValue = nameInput.value.trim();

  // Actualizează conținutul span#name-output în funcție de valoarea din input
  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});
