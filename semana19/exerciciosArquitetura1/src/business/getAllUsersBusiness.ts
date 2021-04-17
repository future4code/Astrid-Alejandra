import { querySelectAllUsers } from "../data/querySelectAllUsers";
import { NoUsersFoundError } from "../error/NoUsersFoundError";

const getAllUsersBusiness = async () => {
  try {
    const users = await querySelectAllUsers();

    if (users.length === 0) {
      throw new NoUsersFoundError(`No users found.`);
    }

    return users;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default getAllUsersBusiness;
