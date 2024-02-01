const countvalue = document.querySelector('.counter');
function decrement(){
    
    let value = parseInt(countvalue.innerText);
    value=value-1;
    countvalue.innerText = value;
}

function increment(){
   
    let value = parseInt(countvalue.innerText);
    value=value+1;
    countvalue.innerText = value;
}