import { Request, Response } from "express";
import connection from "../../connection";
import { User } from "../../types/types";

const editUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: number = Number(req.params.id);
    const { name, nickname, email } = req.body;
    const userData: User = {
      name: name,
      nickname: nickname,
      email: email,
    };
    if (!id || isNaN(id)) {
      res.statusCode = 400;
      throw new Error("And Id must be given, and it must be a number");
    }
    if (
      name === "" ||
      nickname === "" ||
      email === "" ||
      !email.includes("@")
    ) {
      res.statusCode = 400;
      throw new Error(
        "Updating any field to empty is not allowed and email must include @ when updated"
      );
    }
    const updateUser = await queryUpdateById(userData, id);
    const updatedUser = await queryUserById(id);

    res.send({ message: "User was updated", updatedUser });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send("Internal Server Error");
    } else {
      res.send({ message: error.message });
    }
  }
};

const queryUpdateById = async (
  userData: User,
  reqId: number
): Promise<number> => {
  const result = await connection("TDLUser")
    .update(userData)
    .where({ id: reqId });

  return result;
};

const queryUserById = async (reqId: number): Promise<User[]> => {
  const result = await connection("TDLUser").select("*").where({ id: reqId });

  return result[0];
};

export default editUserById;
