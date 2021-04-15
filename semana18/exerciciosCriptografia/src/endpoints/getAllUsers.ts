import { Request, Response } from "express";
import connection from "../connection";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await queryAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryAllUsers = async () => {
  const result = await connection.select("*").from("User");
  return result;
};

export default getAllUsers;
