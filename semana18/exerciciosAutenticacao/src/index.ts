import { Router } from "express";
import createUser from "./endpoints/createUser";
import getAllUsers from "./endpoints/getAllUsers";

const index = Router();

index.get("/users", getAllUsers);
index.post("/users", createUser);

export default index;
