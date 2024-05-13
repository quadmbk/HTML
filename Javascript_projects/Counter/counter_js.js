const counter_digital = document.querySelector('#counter-digital');
const decrease_button = document.querySelector('#decrease-button');
const increase_button = document.querySelector('#increase-button');
const reset_button = document.querySelector('#reset-button');

let counter_val = 0;

function onClickReset(e) {
    e.preventDefault();
    console.log("Reset Button clicked");
    counter_digital.textContent=0;
    counter_val = 0;
}

function onClickIncr(e) {
    e.preventDefault();
    console.log("Increase Button clicked");
    counter_digital.textContent = ++counter_val;
}

function onClickDecr(e) {
    e.preventDefault();
    console.log("Decrease Button clicked");
    counter_digital.textContent = --counter_val;
}


reset_button.addEventListener('click', onClickReset);
increase_button.addEventListener('click', onClickIncr);
decrease_button.addEventListener('click', onClickDecr);