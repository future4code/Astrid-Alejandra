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
    messages: [],
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
    const newArray = [newMessage, ...this.state.messages];
    this.setState({ messages: newArray });
    this.setState({ message: "" });
  };

  enterSendMessage = (event) => {
    if (event.key === "Enter") {
      this.onClickSendMessage();
    }
  };

  deleteMessage = (index) => {
    if (window.confirm("Tem certeza que quer remover essa mensagem?")) {
      const deletedMessage = this.state.messages;
      deletedMessage.splice(index, 1);
      this.setState({ messages: deletedMessage });
    }
  };

  render() {
    return (
      <div>
        <MessagesList
          messages={this.state.messages}
          user={this.state.user}
          message={this.state.message}
          onDoubleClick={this.deleteMessage}
        />
        <Container onKeyPress={this.enterSendMessage}>
          <UserInput
            placeholder="Usuário"
            onChange={this.onChangeUser}
            value={this.state.user}
            required
          />
          <MessageInput
            placeholder="Mensagem"
            onChange={this.onChangeMessage}
            value={this.state.message}
            required
          />
          <SendMessage onClick={this.onClickSendMessage} type="submit">
            Enviar
          </SendMessage>
        </Container>
      </div>
    );
  }
}
export default CreateMessage;
