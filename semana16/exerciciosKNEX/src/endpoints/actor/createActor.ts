import { Request, Response } from "express";
import connection from "../../connection";

export const createActor = async (
  req: Request,
  res: Response
): Promise<void> => {
  const reqId: number = req.body.id;
  const reqName: string = req.body.name;
  const reqSalary: number = req.body.salary;
  const reqDateOfBirth: Date = req.body.birth_date;
  const reqGender: string = req.body.gender;

  //aqui seria interessante fazer uma validação pelo id (que é o primary key)

  try {
    const result = await connection
      .insert({
        id: reqId,
        name: reqName,
        salary: reqSalary,
        birth_date: reqDateOfBirth,
        gender: reqGender,
      })
      .into("Actor");
    res.status(200).send(`${reqName} was succesfully added!`);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
