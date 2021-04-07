import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";

const logIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const userData = {
      email: email,
      password: password,
    };
    if (!email || !password) {
      res.statusCode = 422;
      throw new Error(`Please enter an email and a password!`);
    }
    const verifiedEmail = await verifyEmail(email);

    if (!verifiedEmail) {
      res.status(404).send({
        message: `This email ${email} doesn't exist. Please sign up first.`,
      });
    }
    const id = String(verifiedEmail[1]);
    const token: string = generateToken({ id });

    const verifiedPassword = await verifyPassword(email, password);
    if (!verifiedPassword) {
      res.status(403).send({ message: `Invalid password` });
    } else {
      res.status(200).send({ token, message: `Successfully logged in!` });
    }
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.status(400).send({ message: error.message });
    }
  }
};

const verifyEmail = async (reqEmail: string): Promise<(boolean | any[])[]> => {
  const result = await connection("User")
    .select("id")
    .where({ email: reqEmail });

  const id = result[0].id;

  if (result.length > 0) {
    return [true, id];
  } else {
    return [false];
  }
};

const verifyPassword = async (
  reqEmail: string,
  reqPassword: string
): Promise<boolean> => {
  const result = await connection("User")
    .select("password")
    .where({ email: reqEmail })
    .andWhere({ password: reqPassword });

  if (result.length > 0) {
    return true;
  } else {
    return false;
  }
};

export default logIn;
