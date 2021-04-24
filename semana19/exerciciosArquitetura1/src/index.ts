import { Router } from "express";
import getUserById from "./controller/user/getUserById";
import getAllUsers from "./controller/user/getAllUsers";
import logIn from "./controller/user/logIn";
import signUp from "./controller/user/signUp";
import deleteUserById from "./controller/user/deleteUserById";
import { getTokenData } from "./services/authenticator";

const index = Router();

index.get("/users", getAllUsers);
index.get("/users/profile", getUserById);
index.post("/users/signup", signUp);
index.post("/users/login", logIn);
index.delete("/users/:id", deleteUserById);

// const lalala = async () => {
//   const hehehe = await getTokenData(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFhYTY5YmRlLTRmM2MtNGIxMS1iNDVjLWYxMGY3ZjM0ZTY1ZSIsInJvbGUiOiJOT1JNQUwiLCJpYXQiOjE2MTg2NjY3MTAsImV4cCI6MTYxODc1MzExMH0.YwjmcSaapiK8JCN5HvLySBn1OKhKnlFqekIlf9vvjbU"
//   );
//   console.log(hehehe);
// };

// lalala();

export default index;
