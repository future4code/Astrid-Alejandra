import { Request, Response } from "express";
import connection from "../../data/connection";
import { getTokenData } from "../../services/authenticator";
import { User } from "../../model/types";
import deleteUserByIdBusiness from "../../business/deleteUserByIdBusiness";

const deleteUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id as string;
    const token = req.headers.authorization as string;
    await deleteUserByIdBusiness(token, id);

    res.send({ message: "User was successfully deleted" });
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
};

export default deleteUserById;
