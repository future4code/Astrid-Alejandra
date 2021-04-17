import { Request, Response } from "express";
import connection from "../../data/connection";
import { getTokenData } from "../../services/authenticator";
import { User } from "../../model/types";

const deleteUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id as string;
    const token = req.headers.authorization as string;

    if (!token) {
      res.statusCode = 401;
      throw new Error("A token is required");
    }
    const authData = await getTokenData(token);

    if (!authData) {
      res.statusCode = 403;
      throw new Error("Token not valid");
    }

    if (authData.role !== "admin") {
      res.statusCode = 403;
      throw new Error("Only 'admin' users can delete");
    }

    const deletedUser = await queryDeleteUserById(id);
    if (!deletedUser) {
      res.statusCode = 404;
      throw new Error("No user found with given id");
    }

    res.send("User was successfully deleted");
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
};

const queryDeleteUserById = async (reqId: string): Promise<boolean> => {
  const result = await connection("User").select("*").where({ id: reqId });
  if (result.length === 0) {
    return false;
  } else {
    await connection("User").delete("*").where({ id: reqId });
    return true;
  }
};

export default deleteUserById;
