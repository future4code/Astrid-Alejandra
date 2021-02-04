import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import {
  goToLoginPage,
  goToApplicationFormPage,
  goToHomePage,
  goToTripsPage,
} from "../router/Coordinator";

function Header() {
  const history = useHistory();

  return (
    <Flex p="10px" background="#455561">
      <Flex p="10px" w="50%" justify="center">
        <Button
          p="0 20px"
          variant="link"
          color="#B7D5D4"
          onClick={() => goToHomePage(history)}
        >
          Home
        </Button>
        <Button
          p="0 20px"
          variant="link"
          color="#B7D5D4"
          onClick={() => goToTripsPage(history)}
        >
          Trips
        </Button>
        <Button p="0 20px" variant="link" color="#B7D5D4">
          OUTRO BOTÃO
        </Button>
      </Flex>
      <Flex w="50%" justify="flex-end">
        <Button
          mx="8px"
          variant="solid"
          onClick={() => goToApplicationFormPage(history)}
        >
          Apply for a trip
        </Button>
        <Button mx="8px" variant="solid" onClick={() => goToLoginPage(history)}>
          Log In
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
