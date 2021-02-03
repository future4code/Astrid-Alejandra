import React from "react";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";

function Header() {
  return (
    <Flex>
      <Tabs>
        <TabList>
          <Tab></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p></p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default Header;
