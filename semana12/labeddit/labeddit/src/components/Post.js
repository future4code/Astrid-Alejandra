import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import Votes from "./Votes";
import CommentCount from "./CommentCount";

const Post = () => {
  return (
    <Box align="center">
      <Box
        w="30%"
        display="flex"
        border="1px solid black"
        p="2em"
        flexDirection="column"
      >
        <Heading as="h3" size="md" textAlign="left">
          Username:
        </Heading>
        <Text textAlign="justify">
          I can haz chase the pig around the house, so drink from the toilet so
          pet right here, no not there, here, no fool, right here that other cat
          smells funny you should really give me all the treats because i smell
          the best and omg you finally got the right spot and i love you right
          now the best thing in the universe is a cardboard box. Push your water
          glass on the floor drink from the toilet or behind the couch, or find
          something else more interesting eat from dog's food naughty running
          cat cuddle no cuddle cuddle love scratch scratch. Sleep in the
          bathroom sink sleep on my human's head scratch my tummy actually i
          hate you now fight me sit as close as possible to warm fire without
          sitting on cold floor.{" "}
        </Text>
      </Box>
      <Box w="30%" display="flex" border="1px solid black" p="0.5em">
        <Votes justify="flex-start" />
        <CommentCount justify="flex-end" />
      </Box>
    </Box>
  );
};

export default Post;
