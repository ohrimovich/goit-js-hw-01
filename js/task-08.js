const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const containerRef = document.querySelector('#boxes');
const inputAmoutRef = document.querySelector('input');

inputAmoutRef.addEventListener('input', onInputChange);
renderBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

let amount = 0;
 function onInputChange(event) {
     amount = event.currentTarget.value;
     
}


function createBoxes() {
    let width = 30;
    let height = 30;
    for (let i = 0; i < amount; i += 1) {
        containerRef.insertAdjacentHTML('beforeend', `<div style= 'width:${width}px; height:${height}px; background-color: rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)});'></div>` )

        width += 10;
        height += 10;
    }
   console.log(width);

}

function destroyBoxes() {
    containerRef.innerHTML = '';
}
