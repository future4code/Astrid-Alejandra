import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types/types";

const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization as string;
    if (!token) {
      res.statusCode = 401;
      throw new Error("A token is required");
    }

    const authData: authenticationData | null = getTokenData(token);
    if (!authData) {
      res.statusCode = 403;
      throw new Error("Token not valid");
    }

    const user = await queryUserById(authData.id);

    res.send({ id: user[0].id, email: user[0].email });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryUserById = async (reqId: string): Promise<any[]> => {
  const result = await connection("User")
    .select("id", "email")
    .where({ id: reqId });

  return result;
};

export default getUserById;
