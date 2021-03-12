import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";

const MatchesPage = ({ clearMatches, matches, setMatches }) => {
  const toast = useToast();
  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/astrid-epps/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        toast({
          title: "Ooops, houve um problema!",
          description: error.message,
          status: "error",
          duration: 2500,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    getMatches();
  }, [matches]);

  return (
    <Box h="100%">
      <Grid
        h="90%"
        templateColumns="1fr 1fr"
        gridGap="0.5em"
        autoRows="30%"
        overflowY="auto"
      >
        {matches.map((match) => {
          return (
            <GridItem bg="#F6F0FA" borderRadius="32px 0" key={match.id}>
              <Flex h="70%" justify="center" p="0.3em">
                <Image src={match.photo} borderRadius="16px 0" />
              </Flex>
              <Flex justify="center" p="0">
                <Text textAlign="center" lineHeight="1em">
                  {match.name}
                </Text>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
      <Flex h="10%" justify="center" paddingTop="0.5em">
        <Button bg="#F6F0FA" onClick={() => clearMatches(setMatches)}>
          Limpar matches
        </Button>
      </Flex>
    </Box>
  );
};

export default MatchesPage;
