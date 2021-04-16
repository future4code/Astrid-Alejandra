import { selectAllUsers } from "../data/selectAllUsers";
import { NoUsersFoundError } from "../error/NoUsersFoundError";
import { User } from "../model/types";

const getAllUsersBusiness = async () => {
  try {
    const users = await selectAllUsers();

    if (users.length === 0) {
      throw new NoUsersFoundError(`No users found.`);
    }

    return users;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default getAllUsersBusiness;
