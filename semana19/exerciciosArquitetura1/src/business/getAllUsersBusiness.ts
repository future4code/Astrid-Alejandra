import { querySelectAllUsers } from "../data/querySelectAllUsers";
import { NoUsersFoundError } from "../error/NoUsersFoundError";
import { MissingTokenError } from "../error/MissingTokenError";
import { getTokenData } from "../services/authenticator";
import { InvalidTokenError } from "../error/InvalidTokenError";

const getAllUsersBusiness = async (token: string) => {
  try {
    if (!token) {
      throw new MissingTokenError();
    }

    const authData = await getTokenData(token);

    if (!authData) {
      throw new InvalidTokenError();
    }

    const users = await querySelectAllUsers();

    if (users.length === 0) {
      throw new NoUsersFoundError();
    }

    return users;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default getAllUsersBusiness;
