import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import Votes from "../components/Votes";

const Comment = () => {
  return (
    <Box align="center">
      <Box
        w="30%"
        display="flex"
        border="1px solid black"
        p="2em"
        flexDirection="column"
      >
        <Heading as="h4" size="sm" textAlign="left">
          Username:
        </Heading>
        <Text textAlign="justify">
          Shake treat bag stare at ceiling light so scratch at the door then
          walk away. Hunt by meowing loudly at 5am next to human slave food
          dispenser wake up human for food at 4am or stare at the wall.
        </Text>
      </Box>
      <Box w="30%" display="flex" border="1px solid black" p="0.5em">
        <Votes justify="flex-start" />
      </Box>
    </Box>
  );
};

export default Comment;
