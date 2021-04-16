import { Router } from "express";
import getUserById from "./controller/user/getUserById";
import getAllUsers from "./controller/user/getAllUsers";
import logIn from "./controller/user/logIn";
import signUp from "./controller/user/signUp";
import deleteUserById from "./controller/user/deleteUserById";

const index = Router();

index.get("/users", getAllUsers);
index.get("/users/profile", getUserById);
index.post("/users/signup", signUp);
index.post("/users/login", logIn);
index.delete("/users/:id", deleteUserById);

// const lalala = async () => {
//   const hehehe = await getAllUsersBusiness();
//   console.log(hehehe);
// };

// lalala();

export default index;
