import { Request, Response } from "express";
import connection from "../../connection";
import { User } from "../../types/types";

const createUser = async (req: Request, res: Response) => {
  try {
    const { id, name, nickname, email } = req.body;
    const userData: User = {
      id: id,
      name: name,
      nickname: nickname,
      email: email,
    };
    const newUser = await 
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
};

const insertUser = async (userData: User) => {
  const result = await connection("TDLUser")
  .insert(userData);

    return result
};

export default createUser;
