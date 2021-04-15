import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types/types";

const getUsersOrderedByWithLimit = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let orderBy = req.query.orderBy as string;
    let orderType = req.query.orderType as string;
    let page = req.query.page as string;
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

    if (isNaN(Number(page)) || Number(page) < 1) {
      page = "1";
    }
    const limit: number = 4;
    const offset: number = 4 * (Number(page) - 1);

    const user = await queryOrderUsersByName(
      orderBy,
      orderType,
      name,
      type,
      limit,
      offset
    );
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
  reqType: string,
  limit: number,
  offset: number
): Promise<user[]> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .where("name", "like", `%${reqName}%`)
    .orWhere("type", "like", `%${reqType}%`)
    .orderBy(`${orderBy}`, `${orderType}`)
    .limit(limit)
    .offset(offset);

  return result;
};

export default getUsersOrderedByWithLimit;
