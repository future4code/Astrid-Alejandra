import React, { useState } from "react";
import { Heading, Image, Text, IconButton, Flex } from "@chakra-ui/react";
import { GoHeart, GoX } from "react-icons/go";
import NavBar from "./NavBar";
import axios from "axios";

const ProfileCards = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");
  // const [isMatch, setIsMatch] = useState(false);

  const axiosBaseUrl =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno";
  const headersAuth = { headers: { Authorization: "astrid-bemporad-epps" } };

  const getProfileCards = () => {
    axios
      .get(`${axiosBaseUrl}/person`, headersAuth)
      .then((response) => {
        setId(response.data.profile.id);
        setName(response.data.profile.name);
        setAge(response.data.profile.age);
        setPhoto(response.data.profile.photo);
        setBio(response.data.profile.bio);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // FUNCAO CHOOSEPERSON, onde eu tenho que passar ela? Pensar.
  //   const choosePerson = () => {
  //     const body = { id: id, choice: "" };
  //     axios
  //       .post(`${axiosBaseUrl}/choose-person`, body)
  //       .then((response) => {
  //         setIsMatch(true);
  //         console.log(isMatch);
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      bg="lightblue"
      w="300px"
      p="20px"
      borderRadius="8px"
    >
      <NavBar />
      <Image
        w="200px"
        borderTopLeftRadius="40px"
        borderBottomRightRadius="40px"
        src={photo}
        alt="Loading..."
      />
      <Flex direction="column" align="center" m="1em">
        <Flex>
          <Heading as="h3" size="md" px="10px">
            {name}
          </Heading>
          <Text>{age}</Text>
        </Flex>
        <Text align="center">{bio}</Text>
      </Flex>
      <Flex>
        <IconButton
          fontSize="40px"
          bg="none"
          mx="30px"
          icon={<GoX />}
          aria-label="Next"
          onClick={getProfileCards}
        />
        <IconButton
          fontSize="40px"
          bg="none"
          mx="30px"
          color="tomato"
          icon={<GoHeart />}
          aria-label="Match"
          onClick={getProfileCards}
        />
      </Flex>
    </Flex>
  );
};

export default ProfileCards;
