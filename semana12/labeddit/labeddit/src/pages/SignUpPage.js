import React from "react";
import { FormControl, Input, Button, Center } from "@chakra-ui/react";

const SignUpPage = () => {
  return (
    <Center>
      <FormControl
        as="form"
        w="30%"
        p="1em"
        display="flex"
        flexDirection="column"
        border="1px solid black"
      >
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />

        <Button colorScheme="green" variant="outline">
          Sign Up
        </Button>
      </FormControl>
    </Center>
  );
};

export default SignUpPage;
