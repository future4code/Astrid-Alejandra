import { compare } from "bcryptjs";
import getUserById from "../controller/user/getUserById";
import { querySelectUserByEmail } from "../data/querySelectUserByEmail";
import { verifyEmail } from "../data/verifyEmail";
import { InvalidEmailError } from "../error/InvalidEmailError";
import { InvalidPasswordError } from "../error/InvalidPasswordError";
import { MissingInputFieldsError } from "../error/MissingInputFieldsError";
import { UnregisteredEmailError } from "../error/UnregisteredEmailError";
import { logInInput } from "../model/types";
import { generateToken } from "../services/authenticator";

const logInBusiness = async (input: logInInput) => {
  try {
    if (!input.password || !input.email) {
      throw new MissingInputFieldsError();
    }

    if (!input.email.includes("@")) {
      throw new InvalidEmailError();
    }

    const verifiedEmail = await verifyEmail(input.email);
    if (verifiedEmail) {
      throw new UnregisteredEmailError();
    }

    const user = await querySelectUserByEmail(input.email);

    const verifiedPassword = await compare(input.password, user.password);

    if (verifiedPassword) {
      const token: string = generateToken({ id: user.id, role: user.role });
      return token;
    } else {
      throw new InvalidPasswordError();
    }
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default logInBusiness;
