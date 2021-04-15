import * as bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const hash = async (s: string): Promise<string> => {
  const rounds: number = Number(process.env.BCRYPT_COST);
  if (isNaN(Number(process.env.BCRYPT_COST))) {
    throw new Error("The cost must be a number");
  }
  const salt = await bcrypt.genSalt(rounds);
  const result = await bcrypt.hash(s, salt);

  return result;
};

export const compare = async (s: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(s, hash);
};
