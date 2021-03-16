import React from "react";
import axios from "axios";
import { Center, Flex, Heading, Text } from "@chakra-ui/react";

function TripsList() {
  return (
    <Center w="100%">
      <Flex direction="column">
        <Heading>Trip Name</Heading>
        <Text>Planet</Text>
        <Text>Description</Text>
        <Text>Date</Text>
        <Text>Duration in days</Text>
      </Flex>
    </Center>
  );
}

export default TripsList;
