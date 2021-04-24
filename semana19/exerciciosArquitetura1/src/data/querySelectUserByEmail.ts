import { User } from "../model/types";
import connection from "./connection";

export const querySelectUserByEmail = async (email: string): Promise<User> => {
  try {
    const result = await connection
      .select("id", "role", "password")
      .from("User")
      .where({ email });

    return result[0];
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};
