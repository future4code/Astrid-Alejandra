import React from "react";
import { FormControl, Center, Input, Select, Button } from "@chakra-ui/react";

function ApplicationFormPage() {
  return (
    <Center m="10px">
      <FormControl w="40%" id="name" isRequired errorBorderColor="red">
        <Input placeholder="Full Name" type="text" />
        <Input placeholder="Age" type="number" />
        <Input placeholder="Occupation" type="text" />
        <Input placeholder="Country" type="text" />
        <Select placeholder="Trip of interest">
          {/* aqui tem que passar por ?props? os valores trip.trip.name? cada um vai renderizar como uma option do select. onde tem que fazer isso? */}
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
        <Input placeholder="Application Message" type="text" />
        <Button>Apply!</Button>
      </FormControl>
    </Center>
  );
}

export default ApplicationFormPage;
