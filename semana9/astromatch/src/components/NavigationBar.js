import {
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MatchesPage from "../pages/MatchesPage";
import ProfilesPage from "../pages/ProfilesPage";

const NavigationBar = () => {
  const toast = useToast();
  const [profile, setProfile] = useState({});
  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/astrid-epps/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
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

  const clearMatches = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/astrid-epps/clear"
      )
      .then((response) => {
        getProfileToChoose();
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
    getProfileToChoose();
  }, []);

  return (
    <Center h="90%">
      <Tabs w="80%" h="100%" isFitted variant="unstyled">
        <TabList mb="1em">
          <Tab
            _hover={{ bg: "#00F5AB", border: "none", borderRadius: "16px 0" }}
            _focus={{ border: "none" }}
          >
            Perfis
          </Tab>
          <Tab
            _hover={{ bg: "#00F5AB", border: "none", borderRadius: "16px 0" }}
            _focus={{ border: "none" }}
          >
            Matches
          </Tab>
        </TabList>
        <TabPanels grow="1" h="100%">
          <TabPanel h="100%" p="0">
            <ProfilesPage
              profile={profile}
              getProfileToChoose={getProfileToChoose}
              clearMatches={clearMatches}
            />
          </TabPanel>
          <TabPanel h="100%" p="0">
            <MatchesPage clearMatches={clearMatches} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
};

export default NavigationBar;
