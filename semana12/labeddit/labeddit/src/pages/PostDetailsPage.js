import React from "react";
import { Center } from "@chakra-ui/react";
import CreateNewComment from "../components/CreateNewComment";
import Comment from "../components/Comment";
import Post from "../components/Post";

const PostDetailsPage = () => {
  return (
    <Center flexDirection="column">
      <Post />
      <CreateNewComment />
      <Comment />
    </Center>
  );
};

export default PostDetailsPage;
