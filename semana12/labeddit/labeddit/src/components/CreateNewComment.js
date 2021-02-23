import React from "react";
import { Box, Textarea, Button } from "@chakra-ui/react";

const CreateNewComment = () => {
  return (
    <Box
      w="30%"
      border="1px solid black"
      p="1em"
      display="flex"
      flexDirection="column"
    >
      <Textarea placeholder="Write your comment in here"></Textarea>
      <Button colorScheme="green" variant="solid">
        Comment
      </Button>
    </Box>
  );
};

export default CreateNewComment;
