import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import generateId from "../services/idGenerator";
import { User, userRole } from "../types/types";

const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = generateId();
    const { email, password, role } = req.body;
    let userData = {
      id: id,
      email: email,
      password: password,
      role: role,
    };

    if (!password || !email.includes("@") || !role) {
      res.statusCode = 422;
      throw new Error(`Please, complete every field`);
    }

    if (
      role.toUpperCase() !== userRole.ADMIN &&
      role.toUpperCase() !== userRole.NORMAL
    ) {
      res.statusCode = 422;
      throw new Error("Please, pick NORMAL or ADMIN");
    }

    const verifiedEmail = await verifyUniqueEmail(email);
    if (!verifiedEmail) {
      res.statusCode = 409;
      throw new Error(`This email ${email} already exists`);
    } else {
      const cypherText = await hash(password);
      userData.password = cypherText;
      await insertUser(userData);

      const token: string = generateToken({ id, role });

      res.status(200).send({ message: "User was created!", token });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const insertUser = async (userData: User) => {
  const result = await connection.insert(userData).into("User");

  return result;
};

const verifyUniqueEmail = async (reqEmail: string): Promise<boolean> => {
  const result = await connection("User")
    .select("email")
    .where({ email: reqEmail });

  if (result.length > 0) {
    return false;
  } else {
    return true;
  }
};

export default signUp;
