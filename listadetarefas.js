let input = document.querySelector("#tarefa");
let btn = document.querySelector("#adicionar");
let lista = document.querySelector("#tarefas");

btn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;

    let btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.addEventListener("click", () => {
      lista.removeChild(li);
    });

    li.appendChild(btnRemover);
    lista.appendChild(li);
  }

  input.value = "";
});