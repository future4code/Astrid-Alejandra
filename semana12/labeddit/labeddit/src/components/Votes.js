import React from "react";
import { IconButton, Flex, Text } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Votes = ({ votesCount }) => {
  return (
    <Flex w="50%" justify="flex-start" px="3px">
      <IconButton
        size="xs"
        backgroundColor="white"
        fontSize="1.8em"
        icon={<IoIosArrowUp />}
      />
      <Text alignSelf="center" px="3px">
        {votesCount}
      </Text>
      <IconButton
        size="xs"
        backgroundColor="white"
        fontSize="1.8em"
        icon={<IoIosArrowDown />}
      />
    </Flex>
  );
};

export default Votes;
