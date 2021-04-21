import { Request, Response } from "express";
import connection from "../../connection";

export const getActorByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await connection.raw(`
       SELECT * FROM Actor WHERE name LIKE "%${req.query.name}%"
       `);
    res.status(200).send(result[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
