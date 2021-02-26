import React from "react";
import { Center, Button } from "@chakra-ui/react";
import CreateNewComment from "../components/CreateNewComment";
import Comment from "../components/Comment";
import Post from "../components/Post";
import { goToFeedPage } from "../routes/Coordinator";
import { useHistory, useParams } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/requestsData";

const PostDetailsPage = () => {
  useProtectedPage();
  const params = useParams();
  console.log(params.postId);
  const postDetailsGet = useRequestData(
    {},
    `${BASE_URL}/posts/${params.postId}`
  );
  console.log(
    postDetailsGet && postDetailsGet.post && postDetailsGet.post.title
  );

  const history = useHistory();
  return (
    <Center flexDirection="column">
      <Button
        alignSelf="flex-start"
        m="0 20px"
        colorScheme="orange"
        variant="outline"
        onClick={() => goToFeedPage(history)}
      >
        Go back to feed
      </Button>

      <Post />
      <CreateNewComment />
      <Comment />
    </Center>
  );
};

export default PostDetailsPage;
