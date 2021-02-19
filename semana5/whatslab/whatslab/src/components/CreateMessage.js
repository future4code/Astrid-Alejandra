import React from "react";
import styled from "styled-components";
import MessagesList from "./MessagesList";

const Container = styled.div`
  background-color: green;
  width: 45vw;
  height: 2em;
  display: flex;
`;

const UserInput = styled.input`
  background-color: lemonchiffon;
  width: 80px;
`;

const MessageInput = styled.input`
  background-color: tomato;
  flex-grow: 1;
`;

const SendMessage = styled.button`
  background-color: fuchsia;
`;

class CreateMessage extends React.Component {
  state = {
    user: "",
    message: "",
    mensagens: [],
  };

  onChangeUser = (event) => {
    this.setState({ user: event.target.value });
  };
  onChangeMessage = (event) => {
    this.setState({ message: event.target.value });
  };

  onClickSendMessage = () => {
    const newMessage = {
      userValue: this.state.user,
      messageValue: this.state.message,
    };
    const newArray = [newMessage, ...this.state.mensagens];
    this.setState({ mensagens: newArray });
    this.setState({ message: "" });
    console.log(newArray);
  };

  render() {
    console.log(this.state.mensagens);
    return (
      <div>
        <MessagesList
          mensagens={this.state.mensagens}
          user={this.state.user}
          message={this.state.message}
        />
        <Container>
          <UserInput
            placeholder="Usuário"
            onChange={this.onChangeUser}
            value={this.state.user}
          />
          <MessageInput
            placeholder="Mensagem"
            onChange={this.onChangeMessage}
            value={this.state.message}
          />
          <SendMessage onClick={this.onClickSendMessage}>Enviar</SendMessage>
        </Container>
      </div>
    );
  }
}
export default CreateMessage;
