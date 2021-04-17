import { Request, Response } from "express";
import getAllUsersBusiness from "../../business/getAllUsersBusiness";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization as string;
    const users = await getAllUsersBusiness(token);
    res.status(200).send(users);
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
};

export default getAllUsers;
