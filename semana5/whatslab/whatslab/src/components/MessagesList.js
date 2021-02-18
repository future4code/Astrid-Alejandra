import React from "react";
import styled from "styled-components";

const MessagesContainer = styled.div`
  background-color: darkblue;
  width: 40vw;
  height: 90vh;
  margin-top: 10px;
`;
const Message = styled.p`
  background-color: olivedrab;
`;

class MessagesList extends React.Component {
  render() {
    return (
      <MessagesContainer>
        <Message>Eba!</Message>
      </MessagesContainer>
    );
  }
}
export default MessagesList;
