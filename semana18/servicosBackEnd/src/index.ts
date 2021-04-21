import { Router } from "express";
import getUserById from "./endpoints/getUserById";
import getAllUsers from "./endpoints/getAllUsers";
import logIn from "./endpoints/logIn";
import signUp from "./endpoints/signUp";
import deleteUserById from "./endpoints/deleteUserById";
import getAddressInfo from "./services/getAddressInfo";
import resetPassword from "./endpoints/resetPassword";

const index = Router();

index.get("/users", getAllUsers);
index.get("/users/profile", getUserById);
index.post("/users/signup", signUp);
index.post("/users/login", logIn);
index.delete("/users/:id", deleteUserById);
index.post("/users/password/reset", resetPassword)

export default index;
