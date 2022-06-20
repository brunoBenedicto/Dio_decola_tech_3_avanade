var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function mudaCor(){
    if(currentNumber >6){
        currentNumberWrapper.style.color = "green";
    }
    else if(currentNumber >=4 && currentNumber < 7){
        currentNumberWrapper.style.color = "yellow";
    } 
    else {
        currentNumberWrapper.style.color = "red";
    }
}

function increment(){
    if (currentNumber < 10){
        currentNumber += 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    mudaCor();
}

function decrement(){
    if(currentNumber > 0){ 
        currentNumber -= 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    mudaCor();
}


