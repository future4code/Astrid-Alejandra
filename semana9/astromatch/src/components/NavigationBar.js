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
    <Center>
      <Tabs w="80%" isFitted variant="unstyled">
        <TabList mb="1em">
          <Tab
            _hover={{ bg: "#00F5AB", border: "none", borderRadius: "16px 0" }}
            _focus={{ border: "none" }}
          >
            Profiles
          </Tab>
          <Tab
            _hover={{ bg: "#00F5AB", border: "none", borderRadius: "16px 0" }}
            _focus={{ border: "none" }}
          >
            Matches
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ProfilesPage />
          </TabPanel>
          <TabPanel>
            <MatchesPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
};

export default NavigationBar;
