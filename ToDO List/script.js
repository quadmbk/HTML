const inputBox = document.querySelector(".txt-box");
const addItemBtn = document.querySelector(".btn");
const listContainer =document.querySelector(".list-container");

let counter = 0;

function onBtnClick(e) {
    e.preventDefault();
    
    if(inputBox.value == null || inputBox.value == "")
    {
        alert("Empty value not allowed");
        return;
    }

    console.log("Button Pressed");
    counter++;
    //console.log("You Entered: " + inputBox.value );
    
    

    const listelem = document.createElement('li');
    
    listelem.appendChild(document.createTextNode(inputBox.value));
    listContainer.appendChild(listelem);
    //console.log(document);
    //Reset TextBox value to empty string
    inputBox.value = null;
    
}

function onClick(e){
    e.preventDefault();
    console.log('lis item clicked');
    console.log(e); 
    e.srcElement.className = 'checked';
}
addItemBtn.addEventListener('click', onBtnClick);
listContainer.addEventListener('click', onClick);