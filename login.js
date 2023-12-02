// Odniesienie się zmiennymi do elementów w login.html
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// Sprwadzanie czy przycisk zostal kliknięty
loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Pobranie loginu wpisanego przez użytkownika
    const username = loginForm.username.value;
    // Pobranie hasła wpisanego przez użytkownika
    const password = loginForm.password.value;

    // W tej instrukcji warunkowej w pierwotnej wersji był błąd
    // Jeżeli pola są puste powinien pojawić się komunikat o błędynm logowaniu
    if (username === "" && password === "") {
        // Wyświetlenie alertu o błędnym logowaniu
        loginErrorMsg.style.opacity = 1;
    } else {
        // w przeciwnym wypadku wyświetla komunikat o pomyślnym logowaniu
        alert("You have successfully logged in.");
        location.reload();
    }
});
