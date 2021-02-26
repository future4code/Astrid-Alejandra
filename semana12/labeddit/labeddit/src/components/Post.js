import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import Votes from "./Votes";
import CommentCount from "./CommentCount";
import { goToPostDetailsPage } from "../routes/Coordinator";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const history = useHistory();
  return (
    <Box align="center">
      <Box
        w="30vw"
        display="flex"
        border="1px solid black"
        p="2em"
        flexDirection="column"
        onClick={() => goToPostDetailsPage(history)}
      >
        <Heading as="h3" size="md" textAlign="left">
          Username
        </Heading>
        <Text w="100%" textAlign="justify"></Text>
      </Box>
      <Box w="30vw" display="flex" border="1px solid black" p="0.5em">
        <Votes justify="flex-start" />
        <CommentCount justify="flex-end" />
      </Box>
    </Box>
  );
};

export default Post;
