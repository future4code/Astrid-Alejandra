import React from "react";
import { Flex } from "@chakra-ui/react";
import TripsList from "../components/TripsList";

function TripsPage() {
  return (
    <Flex w="100vw">
      <TripsList />
    </Flex>
  );
}

export default TripsPage;
