import express from "express";
import app from "../controller/app";
import { login } from "../controller/login";
import { signup } from "../controller/signup";

export const userRouter = express.Router();

app.post("/user/signup", signup);
app.post("/user/login", login);
