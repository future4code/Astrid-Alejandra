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
    if (!email || !password || !email.includes("@")) {
      res.statusCode = 422;
      throw new Error(`Please enter a valid email and a password!`);

    }

    const verifiedEmail = await queryIsEmailOnDatabase(email);
    if (verifiedEmail[0] === false) {
      res.statusCode = 403;
      throw new Error(
        `This email ${email} doesn't exist. Please sign up first.`
      );
    }
    const id = String(verifiedEmail[1]);
    const token: string = generateToken({ id });

    const verifiedPassword = await queryValidPassword(email, password);

    if (!verifiedPassword) {
      res.statusCode = 403;
      throw new Error("The password you’ve entered is incorrect.");
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
    .select("id")
    .where({ email: reqEmail });
  if (result.length === 0) {
    return [false];
  } else {
    const id: string = result[0].id;
    return [true, id];
  }
};

const queryValidPassword = async (
  reqEmail: string,
  reqPassword: string
): Promise<boolean> => {
  const result = await connection("User")
    .select("password")
    .where({ email: reqEmail })
    .andWhere({ password: reqPassword });

  if (result.length === 0) {
    return false;
  } else {
    return true;
  }
};

export default logIn;
