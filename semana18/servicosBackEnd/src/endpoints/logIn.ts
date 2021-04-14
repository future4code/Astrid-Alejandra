import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";

const logIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!password || !email.includes("@")) {
      res.statusCode = 422;
      throw new Error("Please enter both email and password");
    }

    const verifiedEmail = await queryIsEmailOnDatabase(email);
    if (verifiedEmail[0] === false) {
      res.statusCode = 403;
      throw new Error(
        `This email ${email} doesn't exist. Please sign up first.`
      );
    }
    const id = String(verifiedEmail[1]);
    const role = String(verifiedEmail[2]);

    const token: string = generateToken({ id, role });
    const verifiedPassword = await queryValidPassword(email);

    if (verifiedPassword) {
      const hashCompare = await compare(password, verifiedPassword[1]);
      if (!hashCompare) {
        res.statusCode = 401;
        throw new Error("The password you’ve entered is incorrect.");
      }
    }

    res.status(200).send({
      token: token,
      message: "Successfully logged in. ",
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryIsEmailOnDatabase = async (reqEmail: string): Promise<any[]> => {
  const result = await connection("User")
    .select("id", "role")
    .where({ email: reqEmail });

  if (result.length === 0) {
    return [false];
  } else {
    const id: string = result[0].id;
    const role: string = result[0].role;
    return [true, id, role];
  }
};

const queryValidPassword = async (reqEmail: string): Promise<any[]> => {
  const result = await connection("User")
    .select("password")
    .where({ email: reqEmail });

  if (result.length === 0) {
    return [false];
  } else {
    const password: string = String(result[0].password);
    return [true, password];
  }
};

export default logIn;
