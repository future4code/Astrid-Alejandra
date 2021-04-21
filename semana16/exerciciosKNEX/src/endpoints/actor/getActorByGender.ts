import { Request, Response } from "express";
import connection from "../../connection";

export const getActorByGender = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const gender = req.query.gender as string;

    const actors = await queryActorsByGender(gender);

    res.status(200).send({ actors });
  } catch (error) {
    res.status(400).send({message: error.message});
  }
};

const queryActorsByGender = async (gender: string): Promise<void> => {
  const result = await connection.raw(`
  SELECT * FROM Actor WHERE gender = "${gender}";
  `);
  return result[0];
};
