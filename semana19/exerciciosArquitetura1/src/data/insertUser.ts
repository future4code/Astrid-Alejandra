import connection from "./connection";
import { signUpInput } from "../model/types";

export const insertUser = async (userData: signUpInput): Promise<number[]> => {
  try {
    const result = await connection.insert(userData).into("User");

    return result;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
