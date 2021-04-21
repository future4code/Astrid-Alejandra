import { Request, Response } from "express";
import connection from "../../connection";
import { User } from "../../types/types";

const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = Number(req.params.id);
    if (isNaN(id)) {
      res.statusCode = 400;
      throw new Error("Id must be a number");
    }
    const user = await queryUserById(id);
    if (user.length === 0) {
      res.statusCode = 404;
      throw new Error(`No users found with ${id} as id`);
    } else {
      res.send(user);
    }
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal Server Error");
    } else {
      res.send({ message: error.message });
    }
  }
};

const queryUserById = async (reqId: number): Promise<User[]> => {
  const result = await connection("TDLUser").select("*").where({ id: reqId });

  return result;
};
export default getUserById;
