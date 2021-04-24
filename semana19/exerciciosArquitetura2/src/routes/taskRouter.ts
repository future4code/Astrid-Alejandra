import express from "express";
import app from "../controller/app";
import { createTask } from "../controller/createTask";
import { getTaskById } from "../controller/getTaskById";

export const taskRouter = express.Router();

app.put("/task", createTask);
app.get("/task/:id", getTaskById);
