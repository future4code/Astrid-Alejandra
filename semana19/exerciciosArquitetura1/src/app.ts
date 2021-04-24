import express, { Express } from "express";
import cors from "cors";
import index from "./index";

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(index);

export default app;
