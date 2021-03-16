import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex>
      <Tabs variant="enclosed" defaultIndex={1}>
        <TabList>
          <Tab>Matches</Tab>
          <Tab>Cards</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default NavBar;
