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


function addTarefa(){
    var tarefa = document.getElementById("tarefa");
    var cb = document.createElement("input");
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("id",tarefa.value);
    cb.setAttribute("name",tarefa.value);
    cb.setAttribute("value",tarefa.value);
    var rotulo = document.createElement("label");
    rotulo.setAttribute("for",cb.id);
    rotulo.innerHTML=cb.id;
    var itemLista = document.createElement("li");
    var lista = document.getElementById("listaDeTarefas");
    

    itemLista.append(cb);
    itemLista.append(rotulo);
    lista.appendChild(itemLista);
    console.log(itemLista);


}