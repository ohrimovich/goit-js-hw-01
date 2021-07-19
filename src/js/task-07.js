const inputRef = document.querySelector('#font-size-control');
const textElementRef = document.querySelector('#text');
inputRef.addEventListener('input', onInputChange);

function onInputChange() {
    textElementRef.setAttribute('style', `font-size: ${inputRef.value}px`)
    
}
