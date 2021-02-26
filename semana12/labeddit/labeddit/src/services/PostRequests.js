import axios from "axios";
import { BASE_URL, token, headers } from "../constants/requestsData";

export const createPostRequest = (body, clear) => {
  if (token) {
    axios
      .post(`${BASE_URL}/posts`, body, headers)
      .then((response) => {
        console.log("entrou no then", response.data);
        clear();
        //funcao para atualizar os posts
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};

export const votePostRequest = (body) => {
  axios
    .put(`${BASE_URL}/posts/:postId/vote`, body, headers)
    .then((response) => {
      console.log("entrou no then", response.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
