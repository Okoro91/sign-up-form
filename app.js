document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#signup-form');
    const inputs = document.querySelectorAll('input');
    const passwordInput = document.querySelector('#password');
    const confirmInput = document.querySelector('#confirm');



    function validateInput(input) {
        const errorMessage = input.nextElementSibling;
        if (input.value.trim() === '') {
            errorMessage.textContent = "This field is required.";
            errorMessage.style.color = "red";
        } else {
            errorMessage.textContent = "";
        }
    }

      function validatePasswordMatch() {
    const confirmErrorMessage = confirmInput.nextElementSibling;
    if (passwordInput.value !== confirmInput.value && confirmInput.value !== '') {
        confirmErrorMessage.textContent = "Passwords do not match.";
        confirmErrorMessage.style.color = "red";
    } else {
        confirmErrorMessage.textContent = "";
    }
}

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateInput(input);
        if (input === passwordInput || input === confirmInput) {
            validatePasswordMatch();
        }
    });
});

form.addEventListener('submit', (e) => {
        e.preventDefault();
        let hasErrors = false;
        inputs.forEach(input => {
            if (!validateInput(input)) {
                hasErrors = true;
            }
        });
        if (!validatePasswordMatch()) {
            hasErrors = true;
        }
        if (!hasErrors && isFormValid()) {
            form.submit();
        }
    });
})