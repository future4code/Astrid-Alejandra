import React from "react";
import { Box, Textarea, Button } from "@chakra-ui/react";

const CreateNewPost = () => {
  return (
    <Box
      w="30%"
      border="1px solid black"
      p="1em"
      display="flex"
      flexDirection="column"
    >
      <Textarea placeholder="Write your post in here"></Textarea>
      <Button colorScheme="green" variant="solid">
        Post
      </Button>
    </Box>
  );
};

export default CreateNewPost;
