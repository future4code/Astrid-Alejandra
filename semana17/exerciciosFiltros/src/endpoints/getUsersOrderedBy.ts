import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types/types";

const getUsersOrderedBy = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let orderBy: string = req.query.orderBy as string;
    let orderType: string = req.query.orderType as string;
    const name: string = req.query.name as string;
    const type: string = req.query.type as string;
    if (!name && !type) {
      res.statusCode = 404;
      throw new Error("Please send a name or a type");
    }
    if (orderBy !== "name" && orderBy !== "type") {
      orderBy = "email";
    }
    if (
      orderType &&
      orderType.toUpperCase() !== "ASC" &&
      orderType.toUpperCase() !== "DESC"
    ) {
      orderType = "ASC";
    }
    const user = await queryOrderUsersByName(orderBy, orderType, name, type);
    if (user.length === 0) {
      res.statusCode = 404;
      throw new Error("No users match your searching parameters");
    }
    res.send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const queryOrderUsersByName = async (
  orderBy: string,
  orderType: string,
  reqName: string,
  reqType: string
): Promise<user[]> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .where("name", "like", `%${reqName}%`)
    .orWhere("type", "like", `%${reqType}%`)
    .orderBy(`${orderBy}`, `${orderType}`);

  return result;
};

export default getUsersOrderedBy;
