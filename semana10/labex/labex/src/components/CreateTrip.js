import React from "react";
import axios from "axios";
import { Input, FormControl, Center, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import useInput from "../hooks/useInput";

function CreateTrip() {
  const [name, handleName] = useInput();
  const [planet, handlePlanet] = useInput();
  const [date, handleDate] = useInput();
  const [description, handleDescription] = useInput();
  const [durationInDays, handleDurationInDays] = useInput();
  useProtectedPage();

  //Requisição
  const createTripFunction = () => {
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: durationInDays,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/astrid-epps/trips",
        body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Trip successfully created!");
      })
      .catch((error) => {
        console.log(error.message);
      });

    return (
      <Center m="10px">
        <FormControl w="40%" isRequired errorBorderColor="red">
          <Input
            value={name}
            onChange={handleName}
            placeholder="Trip name"
            type="text"
          />
          <Input
            value={planet}
            onChange={handlePlanet}
            placeholder="Planet"
            type="text"
          />
          <Input
            value={date}
            onChange={handleDate}
            placeholder="Date"
            type="date"
          />
          <Input
            value={description}
            onChange={handleDescription}
            placeholder="Description"
            type="text"
          />
          <Input
            value={durationInDays}
            onChange={handleDurationInDays}
            placeholder="Duration in days"
            type="number"
          />
          <Button onSubmit={createTripFunction}>Create</Button>
        </FormControl>
      </Center>
    );
  };
}

export default CreateTrip;
