import connection from "./connection";

export const queryDeleteUserById = async (reqId: string): Promise<boolean> => {
  const result = await connection("User").select("*").where({ id: reqId });
  if (result.length === 0) {
    return false;
  } else {
    await connection("User").delete("*").where({ id: reqId });
    return true;
  }
};
