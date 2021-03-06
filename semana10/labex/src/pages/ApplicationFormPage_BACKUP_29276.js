import React, { useEffect, useState } from "react";
import { Center, Input, Select, Button, Flex } from "@chakra-ui/react";
import useForm from "../hooks/useForm";
import { applyToTrip, getTrips } from "../services/tripRequests";
import { useToast } from "@chakra-ui/toast";
import { useParams } from "react-router";

const ApplicationFormPage = () => {
  const [trips, setTrips] = useState([]);
<<<<<<< Updated upstream
  const [selectValue, setSelectValue] = useState("");
  const pathParams = useParams();
  const tripId = pathParams.tripId;

  useEffect(() => {
    getTrips(setTrips, trips, toast);
=======
  const pathParams = useParams();

  useEffect(() => {
    getTrips(setTrips, trips);
>>>>>>> Stashed changes
  }, []);

  const toast = useToast();
  const [form, onChange, clear] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
<<<<<<< Updated upstream
    applyToTrip(form, form.trip, toast);
    clear();
  };

  const onChangeSelect = (event) => {
    setSelectValue(event.target.value);
  };

  console.log(form.trip);
  console.log(selectValue);

=======
    console.log(form);
    applyToTrip(form, toast);
  };

>>>>>>> Stashed changes
  return (
    <Center h="90vh">
      <Flex bg="lightBlue" justify="center" align="center" w="100vw" p="2em">
        <form w="40%" p="1em" onSubmit={onSubmitForm}>
          <Flex w="100%">
            <Input
              w="70%"
              name="name"
              value={form.name}
              onChange={onChange}
              isRequired
              variant="filled"
              placeholder="Full Name"
              _placeholder={{ color: "#333333" }}
              type="text"
            />
            <Input
              w="30%"
              name="age"
              value={form.age}
              onChange={onChange}
              isRequired
              variant="filled"
              placeholder="Age"
              _placeholder={{ color: "#333333" }}
              type="number"
            />
          </Flex>
          <Input
            name="profession"
            value={form.profession}
            onChange={onChange}
            variant="filled"
            isRequired
            placeholder="Occupation"
            _placeholder={{ color: "#333333" }}
            type="text"
          />
          <Input
            name="country"
            value={form.country}
            onChange={onChange}
            variant="filled"
            isRequired
            placeholder="Country"
            _placeholder={{ color: "#333333" }}
            type="text"
          />
          <Select
            variant="filled"
            isRequired
            placeholder="Trip of interest"
            _placeholder={{ color: "#333333" }}
<<<<<<< Updated upstream
            name="trip"
            value={form.trip}
            onChange={onChangeSelect}
          >
            {trips &&
              trips.map((trip) => {
                if (tripId === trip.id) {
                  return (
                    <option selected="selected" value={trip.id} key={trip.id}>
=======
          >
            {trips &&
              trips.map((trip) => {
                if (pathParams.tripId === trip.id) {
                  return (
                    <option selected="selected" key={trip.id}>
>>>>>>> Stashed changes
                      {trip.name}
                    </option>
                  );
                } else {
<<<<<<< Updated upstream
                  return (
                    <option key={trip.id} value={trip.id}>
                      {trip.name}
                    </option>
                  );
=======
                  return <option key={trip.id}>{trip.name}</option>;
>>>>>>> Stashed changes
                }
              })}
          </Select>
          <Input
            name="applicationText"
            value={form.applicationText}
            onChange={onChange}
            variant="filled"
            isRequired
            placeholder="Application Message"
            _placeholder={{ color: "#333333" }}
            type="text"
          />
          <Button w="100%" type="submit">
            Apply!
          </Button>
        </form>
      </Flex>
    </Center>
  );
};

export default ApplicationFormPage;
