import React from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";

const Main = styled.div `
  text-align: center;
`
class App extends React.Component {
  state = {
    username: "",
    email: "",
    users: []
  };

  createUser = (username, email) => {
    const body = {
      name: this.state.username,
      email: this.state.email
    };
    const request = axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: "astrid-bemporad-epps"
      }
    })
    request.then((response) => {
    alert("Usuário cadastrado com sucesso")
    this.getUsers()
    this.setState({username: "", email: ""})
    }).catch((error) => {
      alert("Deu errado com alguma coisa " + error.message)
    });
    };

  getUsers = () => {
    const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "astrid-bemporad-epps"
      }
    })
    request.then((response) => {
      this.setState({users: response.data})  
    }).catch((error) => {
      alert("Não foi possível mostrar os usuários já existentes. " + error.message)
    })
  };

  deleteUsers = () => {
    const userId = this.state.users.id;
    const request = axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/id=userId", {
      headers: {
        Authorization: "astrid-bemporad-epps"
      }, 
    })
    request.then((response) => {
      alert("O usuário foi apagado!")
      console.log(this.state.users.id)
    }).catch((error) => {
      alert("Opa! Não foi possível apagar esse usuário " + error.message)
    })
  }


  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  };
  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  };
  
  render() {
      const renderedUsers = this.state.users.map((user) => {
      return <li key={user.id}>{user.name} <button onClick={() => this.deleteUsers(user.id)}>x</button></li>
    })

    return(
      <Main>
      <div>
        <button onClick={this.getUsers}>Ir para a lista de usuários</button>
        <br/>
        <br/>
        <label>Nome: </label>
        <input type="text" onChange={this.onChangeUsername} value={this.state.username}/>
        <br/>
        <br/>
        <label>Email: </label>
        <input type="email" onChange={this.onChangeEmail} value={this.state.email}/>
        <br/>
        <br/>
        <button onClick={this.createUser}>Salvar</button>
      </div>
      <hr/>
      <div>
      <button>Ir para a página de cadastro</button>
        <p>Lista de usuários</p>
        <ul>
          {renderedUsers}
          
        </ul>
      </div>
      </Main>
    )
  }
}

export default App;

