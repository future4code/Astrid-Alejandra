import { Request, Response } from "express";
import connection from "../../connection";

export const updateSalaryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const reqId: number = Number(req.params.id);
  const reqSalary: number = req.body.salary;
  try {
    const result = await connection("Actor")
      .update({
        salary: reqSalary,
      })
      .where("id", reqId);
    res.status(200).send("The salary was successfully updated!");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
