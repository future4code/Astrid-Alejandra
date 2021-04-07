import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/types";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (payload: authenticationData): string => {
  const token = jwt.sign(payload, String(process.env.JWT_KEY), {
    expiresIn: "24h",
  });

  return token;
};

export const getTokenData = (token: string): authenticationData | null => {
  try {
    const { id } = jwt.verify(
      token,
      String(process.env.JWT_KEY)
    ) as authenticationData;

    return { id };
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
