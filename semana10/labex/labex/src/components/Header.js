import React from "react";
import { Flex, Link, Button } from "@chakra-ui/react";

function Header() {
  return (
    <Flex>
      <Link>Home</Link>
      <Link>Trips</Link>
      <Button>Apply for a trip</Button>
      <Button>Log In</Button>
    </Flex>
  );
}

export default Header;
