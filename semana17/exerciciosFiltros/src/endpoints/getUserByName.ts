import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types/types";

const getUserByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const name: string = req.query.name as string;
    if (!name) {
      res.statusCode = 400;
      throw new Error("Please, send a valid name");
    }
    const user = await queryUserByName(name);
    if (user.length === 0) {
      res.statusCode = 404;
      throw new Error(
        `You searched for ${name}, but no matching user was found`
      );
    }
    res.send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryUserByName = async (reqName: string): Promise<user[]> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .where("name", "like", `%${reqName}%`);

  return result;
};

export default getUserByName;
