import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MatchesPage = ({ clearMatches }) => {
  const [matches, setMatches] = useState([]);
  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/astrid-epps/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error.message);
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
        <Button bg="#F6F0FA" onClick={clearMatches}>
          Limpar matches
        </Button>
      </Flex>
    </Box>
  );
};

export default MatchesPage;
