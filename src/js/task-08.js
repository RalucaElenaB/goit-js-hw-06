const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Opriți reîncărcarea paginii la trimiterea formularului

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Te rog completeaza toate câmpurile ");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData); // Afișează obiectul cu datele introduse în consolă
    loginForm.reset(); // Șterge valorile câmpurilor din formular
  }
});
