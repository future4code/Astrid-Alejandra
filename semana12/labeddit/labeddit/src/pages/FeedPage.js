import React from "react";
import { Center } from "@chakra-ui/react";
import CreateNewPost from "../components/CreateNewPost";
import Post from "../components/Post";

const FeedPage = () => {
  return (
    <Center flexDirection="column">
      <CreateNewPost />
      <Post />
    </Center>
  );
};

export default FeedPage;
