import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainPage from "./pages/MainPage";
import astroTheme from "./theme/astroTheme";

const App = () => {
  return (
    <ChakraProvider theme={astroTheme}>
      <MainPage />
    </ChakraProvider>
  );
};

export default App;
