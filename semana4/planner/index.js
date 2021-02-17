const criarTarefa = () => {
  let nomeTarefa = document.getElementById("tarefa").value;
  let diaSelecionado = document.getElementById("dias-semana").value;

  if (nomeTarefa === "") {
    alert("Por favor, digite o nome da tarefa!");
  } else {
    document.getElementById("tarefa").value = "";
    document.getElementById(
      diaSelecionado
    ).innerHTML += `<p onclick="riscarTarefa()" id="tarefa-criada"> * ${nomeTarefa} </p>`;
  }
};
let clickado = true;
const riscarTarefa = () => {
  if (clickado) {
    document.getElementById("tarefa-criada").style.textDecoration =
      "line-through";
    document.getElementById("tarefa-criada").style.color = "red";
    clickado = false;
  } else {
    document.getElementById("tarefa-criada").style.textDecoration = "none";
    document.getElementById("tarefa-criada").style.color = "black";
    clickado = true;
  }
};
