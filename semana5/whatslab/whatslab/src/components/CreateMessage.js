import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: green;
  width: 40vw;
  height: 2em;
  display: flex;
`;

const UserInput = styled.input`
  background-color: lemonchiffon;
  width: 25%;
`;

const MessageInput = styled.input`
  background-color: tomato;
  flex-grow: 1;
`;

const SendMessage = styled.button`
  background-color: fuchsia;
`;

class CreateMessage extends React.Component {
  render() {
    return (
      <Container>
        <UserInput placeholder="Usuário" />
        <MessageInput placeholder="Mensagem" />
        <SendMessage>Enviar</SendMessage>
      </Container>
    );
  }
}
export default CreateMessage;
