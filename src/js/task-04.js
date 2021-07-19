let counterValue = 0;
const value = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action-increment]');
incrementBtn.addEventListener('click', incrementCounterValue);
const decrementBtn = document.querySelector('[data-action-decrement]');
decrementBtn.addEventListener('click', decrementCounterValue);

function incrementCounterValue() {
    counterValue += 1;
    value.textContent = counterValue;
}

function decrementCounterValue() {
    counterValue -= 1;
    value.textContent = counterValue;
}


console.log(counterValue);