import React from "react";
import { Input, FormControl, Center, Button } from "@chakra-ui/react";

function CreateTrip() {
  return (
    <Center m="10px">
      <FormControl w="40%" isRequired errorBorderColor="red">
        <Input placeholder="Trip name" type="text" />
        <Input placeholder="Planet" type="text" />
        <Input placeholder="Date" type="date" />
        <Input placeholder="Description" type="text" />
        <Input placeholder="Duration in days" type="number" />
        <Button>Create</Button>
      </FormControl>
    </Center>
  );
}

export default CreateTrip;
