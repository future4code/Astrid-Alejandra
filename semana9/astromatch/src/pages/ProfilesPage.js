import { Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import { GoHeart, GoX } from "react-icons/go";
import axios from "axios";

const ProfilesPage = ({ profile, getProfileToChoose, clearMatches }) => {
  const onClickMatch = () => {
    const body = {
      id: profile.id,
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/astrid-epps/choose-person",
        body
      )
      .then((response) => {
        getProfileToChoose();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const onClickNoMatch = () => {
    const body = {
      id: profile.id,
      choice: false,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/astrid-epps/choose-person",
        body
      )
      .then((response) => {
        getProfileToChoose();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      {profile ? (
        <Flex w="100%" h="100%" margin="auto" direction="column">
          <Flex direction="column" h="90%" justify="space-between" p="0.5em">
            <Image
              h="75%"
              objectFit="cover"
              src={profile.photo}
              borderRadius="32px 0"
              marginBottom="0.3em"
            />
            <Flex
              direction="column"
              p="0.5em 1em"
              bg="#F6F0FA"
              borderRadius="0 32px"
              justify="center"
              grow="1"
            >
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
              onClick={onClickNoMatch}
            ></IconButton>
            <IconButton
              bg="none"
              fontSize="3em"
              color="red"
              _hover={{ bg: "none" }}
              _active={{ bg: "none" }}
              _focus={{ bg: "none", border: "none" }}
              icon={<GoHeart />}
              onClick={onClickMatch}
            ></IconButton>
          </Flex>
        </Flex>
      ) : (
        <Flex direction="column" justify="center" h="100%">
          <Text fontSize="xl" textAlign="center">
            <strong>Acabaram os perfis :( </strong>
          </Text>
          <Text textAlign="center">
            Se você quiser ver os perfis de novo, é só limpar os matches!
          </Text>
          <Flex h="10%" justify="center" paddingTop="0.5em">
            <Button variant="outline" onClick={clearMatches}>
              Limpar matches
            </Button>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default ProfilesPage;
