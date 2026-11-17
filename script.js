let tarefa = document.querySelector("#tarefa");
let enviar = document.querySelector("#enviar");
let listaTararefas = document.querySelector("#listaTarefa");

function criarTarefa(texto) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let button = document.createElement("button");

    div.classList.add("conteudo");
    p.textContent = texto;
    button.textContent = "apagar";


    button.addEventListener("click", () => {
        div.remove();
    });
    div.append(p, button);
    document.querySelector("#listaTarefas").append(div)

}
enviar.addEventListener("click", () => {
    let valor = tarefa.value;
    if (valor.length == 0) {
        alert("não pode criar tarefas em branco")
        return;
    }

    criarTarefa(valor);
    tarefa.value = "";

}); 
