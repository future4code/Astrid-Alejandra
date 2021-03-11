import {
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import MatchesPage from "../pages/MatchesPage";
import ProfilesPage from "../pages/ProfilesPage";

const NavigationBar = () => {
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
            <ProfilesPage />
          </TabPanel>
          <TabPanel h="100%" p="0">
            <MatchesPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
};

export default NavigationBar;
