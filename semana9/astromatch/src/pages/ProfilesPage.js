import { Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import prupru from "../images/DSC01354.JPG";
import { GoHeart, GoX } from "react-icons/go";
import axios from "axios";

const ProfilesPage = () => {
  const [profile, setProfile] = useState({});
  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/astrid-bemporad-epps/person"
      )
      .then((response) => {
        console.log("entrou no then", response.data);
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);
  //passar no useeffect como component did mount e depois passar no array de dependencias algo do state que vai mudar cuando eu clicar os botoes (no caso um state liked?)

  return (
    <Flex w="100%" h="100%" margin="auto" direction="column">
      <Flex direction="column" h="90%" justify="space-between" p="0.5em">
        <Image
          h="80%"
          objectFit="cover"
          src={profile.photo}
          borderRadius="32px 0"
        />
        <Flex direction="column" p="0.5em 1em">
          <Text>
            <strong>{profile.name}</strong>, {profile.age}.
          </Text>
          <Text fontSize="sm">{profile.bio}</Text>
        </Flex>
      </Flex>
      <Flex justify="space-around" p="0.5em 1em" h="10%">
        <IconButton
          bg="none"
          fontSize="3em"
          _hover={{ bg: "none" }}
          _active={{ bg: "none" }}
          _focus={{ bg: "none", border: "none" }}
          icon={<GoX />}
        ></IconButton>
        <IconButton
          bg="none"
          fontSize="3em"
          color="red"
          _hover={{ bg: "none" }}
          _active={{ bg: "none" }}
          _focus={{ bg: "none", border: "none" }}
          icon={<GoHeart />}
        ></IconButton>
      </Flex>
    </Flex>
  );
};

export default ProfilesPage;
