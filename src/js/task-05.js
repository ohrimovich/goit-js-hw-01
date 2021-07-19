const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
inputRef.addEventListener('input', onInputChange);

function onInputChange() {

    outputRef.textContent = inputRef.value;
    if (!outputRef.textContent) {
        outputRef.textContent = 'незнакомец'

    }
}
    
