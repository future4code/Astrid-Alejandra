import { Request, Response } from "express";
import connection from "../../connection";
import { User } from "../../types/types";

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, nickname, email } = req.body;
    const userData: User = {
      name: name,
      nickname: nickname,
      email: email,
    };
    if (!name || !nickname || !email.includes("@")) {
      res.statusCode = 400;
      throw new Error("All fields are required");
    }

    const verifiedEmail = await verifyEmail(email);
    if (!verifiedEmail) {
      res.statusCode = 409;
      throw new Error(`${email} is already being used`);
    } else {
      const newUser = await insertUser(userData);
      const createdUser = await queryUserById(newUser[0]);
      res
        .status(201)
        .send({ message: `${name}'s user successfully created`, createdUser });
    }
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal Server Error");
    } else {
      res.send({ message: error.message });
    }
  }
};

const insertUser = async (userData: User): Promise<number[]> => {
  const result = await connection("TDLUser").insert(userData);

  return result;
};

const verifyEmail = async (reqEmail: string): Promise<boolean> => {
  const result = await connection("TDLUser")
    .select("*")
    .where({ email: reqEmail });

  if (result.length === 0) {
    return true;
  } else {
    return false;
  }
};
const queryUserById = async (id: number): Promise<User[]> => {
  const result = await connection("TDLUser").select("*").where({ id: id });

  return result[0];
};
export default createUser;
