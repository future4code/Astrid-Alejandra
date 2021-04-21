import { Request, Response } from "express";
import connection from "../../connection";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await queryAllUsers();
    if (users.length === 0) {
      res.send("No users found");
    } else {
      res.send(users);
    }
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal Server Error" });
    } else {
      res.send({ message: error.message });
    }
  }
};

const queryAllUsers = async () => {
  const result = await connection("TDLUser").select("*");

  return result;
};
export default getAllUsers;
