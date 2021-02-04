import React from "react";
import { Flex, Input, Button, Center, FormControl } from "@chakra-ui/react";

function LoginPage() {
  return (
    <Center m="10px">
      <FormControl w="40%" isRequired errorBorderColor="red">
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Password" type="password" />
        <Button>Log In</Button>
      </FormControl>
    </Center>
  );
}

export default LoginPage;
