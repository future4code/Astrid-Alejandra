import deleteUserById from "../controller/user/deleteUserById";
import { queryDeleteUserById } from "../data/queryDeleteUserById";
import { ForbiddenError } from "../error/ForbiddenError";
import { InvalidTokenError } from "../error/InvalidTokenError";
import { MissingTokenError } from "../error/MissingTokenError";
import { NoUsersFoundError } from "../error/NoUsersFoundError";
import { getTokenData } from "../services/authenticator";

const deleteUserByIdBusiness = async (token: string, id: string) => {
  try {
    if (!token) {
      throw new MissingTokenError();
    }
    const authData = await getTokenData(token);

    if (!authData) {
      throw new InvalidTokenError();
    }

    if (authData.role !== "admin") {
      throw new ForbiddenError("Only 'admin' users can delete");
    }

    const deletedUser = await queryDeleteUserById(id);
    if (!deletedUser) {
      throw new NoUsersFoundError();
    }
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default deleteUserByIdBusiness;
