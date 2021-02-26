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
      alignSelf="center"
    >
      <Textarea
        placeholder="Write your comment in here"
        variant="outline"
        borderColor="gray"
        _hover="none"
        _focus={{ border: "1px solid orange" }}
        isRequired
      ></Textarea>
      <Button colorScheme="orange" variant="solid">
        Comment
      </Button>
    </Box>
  );
};

export default CreateNewComment;
