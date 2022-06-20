function addTarefa(){
    var tarefa = document.getElementById("tarefa");
    if(!tarefa.value){
        alert("campo vazio");
        return;
    }
    var cb = document.createElement("input");
    var rotulo = document.createElement("label");
    var itemLista = document.createElement("li");
    var lista = document.getElementById("listaDeTarefas");
    
    cb.setAttribute("type", "checkbox");
    cb.setAttribute("id",tarefa.value);
    cb.setAttribute("name",tarefa.value);
    cb.setAttribute("value",tarefa.value);
    
    
    rotulo.setAttribute("for",cb.id);
    rotulo.innerHTML=cb.id;
    
    itemLista.append(cb);
    itemLista.append(rotulo);
    itemLista.classList.add("itemLista");
    lista.appendChild(itemLista);
    tarefa.value = "";
}

function removeTodas(){
    var lista = document.getElementById("listaDeTarefas");
    var itens = lista.getElementsByTagName('li');
    for (let i = itens.length-1; i >=0; i--){
        lista.removeChild(itens[i]);
    }
}

function removeTarefa(){
    var lista = document.getElementById("listaDeTarefas");
    var itens = lista.getElementsByTagName('li');
    console.log("antes do for o tamanho é "+ itens.length);
    for (let i = itens.length-1; i >=0; i--){
        let cb = itens[i].getElementsByTagName('input');
        console.log("olha o check");
        console.log(cb);
        if (cb[0].checked){
            console.log("entrou no if")
            lista.removeChild(itens[i]);
        }

    }
}


document.getElementById("btnAdicionar").addEventListener("click", addTarefa);
document.getElementById("btnRemoveConcluida").addEventListener("click", removeTarefa);
document.getElementById("btnRemoveTudo").addEventListener("click", removeTodas);

