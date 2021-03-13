import React from "react";
import {
  FormControl,
  Center,
  Input,
  Select,
  Button,
  Flex,
} from "@chakra-ui/react";
import useForm from "../hooks/useForm";
import { applyToTrip } from "../services/tripRequests";
import { useToast } from "@chakra-ui/toast";

const ApplicationFormPage = () => {
  const toast = useToast();
  const [form, onChange, clear] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  // EU DEVIA TER COMECADO FAZENDO O TRIP DETAILS, PRA DAI PEGAR O ID E DEPOIS FAZER O APPLYTOTRIP, BELE, VOU LÁ

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
    applyToTrip(form, toast);
  };
  return (
    <Center h="90vh">
      <Flex bg="lightBlue" justify="center" align="center" w="100vw" p="2em">
        <FormControl
          w="40%"
          id="name"
          isRequired
          errorBorderColor="red"
          p="1em"
        >
          <Flex w="100%">
            <Input
              w="70%"
              variant="filled"
              placeholder="Full Name"
              type="text"
            />
            <Input w="30%" variant="filled" placeholder="Age" type="number" />
          </Flex>
          <Input variant="filled" placeholder="Occupation" type="text" />
          <Input variant="filled" placeholder="Country" type="text" />
          <Select variant="filled" placeholder="Trip of interest">
            {/* through a map, put the trips in here, should be easy-peasy! */}
          </Select>
          <Input
            variant="filled"
            placeholder="Application Message"
            type="text"
          />
          <Button w="100%">Apply!</Button>
        </FormControl>
      </Flex>
    </Center>
  );
};

export default ApplicationFormPage;
