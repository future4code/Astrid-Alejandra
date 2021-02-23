import React from "react";
import { IconButton, Flex, Text } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Votes = () => {
  return (
    <Flex w="50%">
      <IconButton icon={<IoIosArrowUp />}></IconButton>
      <Text alignSelf="center">1</Text>
      <IconButton icon={<IoIosArrowDown />}> </IconButton>
    </Flex>
  );
};

export default Votes;
