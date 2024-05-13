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
    setColor(counter_digital,counter_digital.textContent);
}

function onClickIncr(e) {
    e.preventDefault();
    console.log("Increase Button clicked");
    counter_digital.textContent = ++counter_val;
    setColor(counter_digital,counter_digital.textContent);
}

function onClickDecr(e) {
    e.preventDefault();
    console.log("Decrease Button clicked");
    counter_digital.textContent = --counter_val;
    setColor(counter_digital,counter_digital.textContent);
}

function setColor(element,number){
    if(number > 0) {
        element.style.color = 'green';
    }
    else if (number < 0) {
        element.style.color = 'red';
    } else {
        element.style.color = 'black';
    }
}

reset_button.addEventListener('click', onClickReset);
increase_button.addEventListener('click', onClickIncr);
decrease_button.addEventListener('click', onClickDecr);