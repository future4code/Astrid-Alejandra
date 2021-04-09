import { Router } from "express";
import editUser from "./endpoints/editUser";
import getAllUsers from "./endpoints/getAllUsers";
import logIn from "./endpoints/logIn";
import signUp from "./endpoints/signUp";

const index = Router();

index.get("/users", getAllUsers);
index.post("/users/signup", signUp);
index.post("/users/login", logIn);
index.put("/users/edit", editUser);

export default index;
