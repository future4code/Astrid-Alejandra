import { Request, Response } from "express";
import getAllUsersBusiness from "../../business/getAllUsersBusiness";
import { selectAllUsers } from "../../data/selectAllUsers";
import { User } from "../../model/types";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsersBusiness();
    res.status(200).send(users);
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
};

export default getAllUsers;
