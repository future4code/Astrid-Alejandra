import { User } from "../model/types";
import connection from "./connection";

export const selectAllUsers = async (): Promise<User[]> => {
  try {
    const result = await connection.select("id", "email", "cep").from("User");

    return result;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
