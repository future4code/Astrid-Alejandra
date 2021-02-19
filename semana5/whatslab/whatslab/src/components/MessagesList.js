import React from "react";
import styled from "styled-components";

const MessagesContainer = styled.div`
  background-color: darkblue;
  width: 45vw;
  height: 90vh;
  margin-top: 10px;
  display: flex;
  flex-direction: column-reverse;
`;
const Message = styled.p`
  background-color: olivedrab;
  margin: 3px;
  padding: 10px 15px;
`;

class MessagesList extends React.Component {
  render() {
    console.log(this.props.mensagens);
    return (
      <MessagesContainer>
        {this.props.mensagens &&
          this.props.mensagens.map((mensagem, index) => {
            return (
              <Message key={index}>
                <strong>{mensagem.userValue}: </strong>
                {mensagem.messageValue}
              </Message>
            );
          })}
      </MessagesContainer>
    );
  }
}
export default MessagesList;
