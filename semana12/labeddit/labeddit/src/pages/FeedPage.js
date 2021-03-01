import React, { useEffect } from "react";
import { Center } from "@chakra-ui/react";
import CreateNewPost from "../components/CreateNewPost";
import useProtectedPage from "../hooks/useProtectedPage";
import { goToPostDetailsPage } from "../routes/Coordinator";
import { useHistory } from "react-router-dom";
import Post from "../components/Post";
import { BASE_URL } from "../constants/requestsData";
import useRequestData from "../hooks/useRequestData";

const FeedPage = () => {
  useProtectedPage();

  const getPostsRequest = useRequestData([], `${BASE_URL}/posts`);
  const postsResponse = getPostsRequest.posts;
  const history = useHistory();

  const onClickPost = (id) => {
    goToPostDetailsPage(history, id);
  };

  return (
    <Center flexDirection="column">
      <CreateNewPost />
      {postsResponse &&
        postsResponse.map((post) => {
          return (
            <Post
              key={post.id}
              username={post.username}
              title={post.title}
              text={post.text}
              votesCount={post.votesCount}
              commentsCount={post.commentsCount}
              userVoteDirection={post.userVoteDirection}
              onClick={() => onClickPost(post.id)}
            />
          );
        })}
    </Center>
  );
};

export default FeedPage;
