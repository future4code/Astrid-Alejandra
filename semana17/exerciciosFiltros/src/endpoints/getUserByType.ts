import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types/types";

const getUserByType = async (req: Request, res: Response): Promise<void> => {
  try {
    const type: string = req.params.type as string;
    if (!type) {
      res.statusCode = 400;
      throw new Error("Please, send a valid type");
    }
    const user = await queryUserByType(type);
    if (user.length === 0) {
      res.statusCode = 404;
      throw new Error(
        `You searched for ${type}, but no matching user was found`
      );
    }
    res.send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryUserByType = async (reqType: string): Promise<user[]> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .where("type", "like", `%${reqType}%`);

  return result;
};

export default getUserByType;
