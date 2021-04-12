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
    if (isNaN(id)) {
      res.statusCode = 400;
      throw new Error("ID must be a number");
    }
    // aparentemente uma validação desnecessária, parece que a anterior já cuida disso aqui
    if (name === "" || nickname === "" || email === "") {
      res.statusCode = 400;
      throw new Error("Updating fields to 'empty' is not allowed");
    }
    if (!name && !nickname && !email) {
      res.statusCode = 400;
      throw new Error("Fill at least one field to update");
    }

    if (email && !email.includes("@")) {
      res.statusCode = 400;
      throw new Error("Email must have an @");
    }

    await queryUpdateUserById(id, userData);
    const updatedUser = await queryUserById(id);

    res.status(200).send({ message: "User was updated!", updatedUser });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.send({ message: error.message });
    }
  }
};

const queryUpdateUserById = async (
  reqId: number,
  userData: User
): Promise<number> => {
  const result = connection("TDLUser").update(userData).where({ id: reqId });

  return result;
};

const queryUserById = async (reqId: number): Promise<User[]> => {
  const result = connection("TDLUser").select("*").where({ id: reqId });

  return result;
};

export default editUserById;
