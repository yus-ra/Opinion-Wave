// public/script.js
const formBuilder = document.querySelector('.form-builder');
const addButton = document.querySelector('#add-button');

addButton.addEventListener('click', () => {
    const inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('placeholder', 'Enter your question');
    formBuilder.appendChild(inputField);
});
