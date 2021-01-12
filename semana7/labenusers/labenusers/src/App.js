import React from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";

const Main = styled.div `
  text-align: center;
`

class App extends React.Component {
  render() {
    return(
      <Main>
      <div>
        <button>Ir para a lista de usuários</button>
        <p>Nome:</p>
        <input type="text"/>
        <p>Email:</p>
        <input type="email"/>
        <br/>
        <button>Salvar</button>
      </div>
      <div>
      <button>Ir para a página de cadastro</button>
        <p>Lista de usuários</p>
        <ul>
          <li>Nome do usuário</li>
          <button>Delete</button>
        </ul>
      </div>
      </Main>
    )
  }
}

export default App;

