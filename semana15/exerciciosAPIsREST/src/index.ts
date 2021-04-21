import express, { Express, request, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { USERTYPES, user, users } from "./users";

const app: Express = express();

app.use(express.json());
app.use(cors());

//EXERCICIO 1

app.get("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    res.status(200).send(users);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

//EXERCICIO 2

app.get("/users", (req: Request, res: Response) => {
  let userByType: user[] = users;
  let errorCode: number = 400;

  try {
    const userType: string = req.query.userType as string;

    if (!userType) {
      errorCode = 404;
      throw new Error("Please, specify a type");
    }
    if (userType in USERTYPES) {
      userByType = users.filter((fUser) => userType === fUser.type);
    }
    res.status(200).send(userByType);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.log(`Failure upon starting server`);
  }
});
