const button = document.querySelector("#btn");
const body_element   = document.querySelector('body');

function onCLick(e) {
    e.preventDefault();
    console.log("clicked");
    const red  = (Math.random()*255);
    const blue = (Math.random()*255);
    const green= (Math.random()*255);
    
    body_element.style.backgroundColor = 'rgb(' + red + ',' + blue + ',' + green + ')';//Math.floor(Math.random() * 0xffffff);
    //console.log(Math.floor(Math.random() * 0xffffff));
}
button.addEventListener('click',onCLick);