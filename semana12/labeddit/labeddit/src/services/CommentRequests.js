import axios from "axios";
import { BASE_URL, headers } from "../constants/requestsData";

export const createCommentRequest = (body) => {
  axios
    .post(`${BASE_URL}/posts/:postId/comment`, body, headers)
    .then((response) => {
      console.log("entrou no then newcomment", response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const voteCommentRequest = (body) => {
  axios
    .put(`${BASE_URL}/posts/:postId/comment/:commentId/vote`, body, headers)
    .then((response) => {
      console.log("entrou no then", response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
