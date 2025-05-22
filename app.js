document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#signup-form');
    const inputs = document.querySelectorAll('input');

    function validateInput(input) {
        const errorMessage = input.nextElementSibling;
        if (input.value.trim() === '') {
            errorMessage.textContent = "This field is required.";
            errorMessage.style.color = "red";
        } else {
            errorMessage.textContent = "";
        }
    }

    inputs.forEach(input => {
        input.addEventListener('blur', () => validateInput(input));
    });
})