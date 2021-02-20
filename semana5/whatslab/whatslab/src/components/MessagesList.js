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
    return (
      <MessagesContainer>
        {this.props.messages &&
          this.props.messages.map((message, index) => {
            return (
              <Message
                key={index}
                onDoubleClick={() => this.props.onDoubleClick(index)}
              >
                <strong>{message.userValue}: </strong>
                {message.messageValue}
              </Message>
            );
          })}
      </MessagesContainer>
    );
  }
}
export default MessagesList;
