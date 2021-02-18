import React from "react";
import CreateMessage from "./components/CreateMessage";
import MessagesList from "./components/MessagesList";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <MessagesList />
      <CreateMessage />
    </MainContainer>
  );
}

export default App;
