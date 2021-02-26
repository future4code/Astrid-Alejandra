import React, { useEffect } from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import CreateNewPost from "../components/CreateNewPost";
import useProtectedPage from "../hooks/useProtectedPage";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/requestsData";
import { goToPostDetailsPage } from "../routes/Coordinator";
import Votes from "../components/Votes";
import CommentCount from "../components/CommentCount";
import { useHistory } from "react-router-dom";

const FeedPage = () => {
  useProtectedPage();

  const history = useHistory();
  const postsGet = useRequestData([], `${BASE_URL}/posts`);

  const onClickPost = (postId) => {
    goToPostDetailsPage(history, postId);
  };

  const postsToRender = postsGet.posts;
  console.log(postsToRender && postsToRender[0]);
  return (
    <Center flexDirection="column">
      <CreateNewPost />
      {postsToRender &&
        postsToRender.map((post) => {
          return (
            // <Post
            //   username={post.username}
            //   title={post.title}
            //   text={post.text}
            // />
            <Box align="center">
              <Box
                w="30vw"
                display="flex"
                border="1px solid black"
                p="2em"
                flexDirection="column"
                onClick={() => onClickPost(post.id)}
              >
                <Heading as="h3" size="md" textAlign="left">
                  {post.username}
                </Heading>
                <Text textAlign="justify">
                  <strong>{post.title} </strong>
                  {post.text}
                </Text>
              </Box>
              <Box w="30vw" display="flex" border="1px solid black" p="0.5em">
                <Votes justify="flex-start" />
                <CommentCount
                  justify="flex-end"
                  commentsCount={
                    post && post.posts && post.posts[0].commmentsCount
                  }
                />
              </Box>
            </Box>
          );
        })}
    </Center>
  );
};

export default FeedPage;
