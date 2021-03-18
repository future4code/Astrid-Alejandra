const criarTarefa = () => {
  let nomeTarefa = document.getElementById("tarefa").value;
  let diaSelecionado = document.getElementById("dias-semana").value;

  if (nomeTarefa === "") {
    alert("Por favor, digite o nome da tarefa!");
  } else {
    document.getElementById("tarefa").value = "";
    console.log();
    document.getElementById(
      diaSelecionado
    ).innerHTML += `<p onclick="riscarTarefa()" id="tarefaCriada"> - ${nomeTarefa} </p>`;
  }
};

const riscarTarefa = () => {
  let x = document.getElementById("tarefaCriada");
  let clickado = true;
  const riscarTarefaFalse = () => {
    x.style.textDecoration = "none";
    x.style.color = "black";
    console.log("entrou no false");
  };

  const riscarTarefaTrue = () => {
    x.style.textDecoration = "line-through";
    x.style.color = "red";
    clickado = false;
    console.log("entro no true");
  };

  if (clickado) {
    riscarTarefaTrue();
  } else {
    riscarTarefaFalse();
  }
};
