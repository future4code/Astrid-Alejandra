import connection from "./connection";

export const verifyUniqueEmail = async (reqEmail: string): Promise<boolean> => {
  const result = await connection("User")
    .select("email")
    .where({ email: reqEmail });

  if (result.length > 0) {
    return false;
  } else {
    return true;
  }
};
