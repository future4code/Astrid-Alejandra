import { Request, Response } from "express";
import moment from "moment";
import connection from "../../connection";
import { Task } from "../../types/types";

const getTaskById = async (req: Request, res: Response): Promise<void> => {
  try {
    const taskId: number = Number(req.params.id);
    if (isNaN(taskId)) {
      res.statusCode = 400;
      throw new Error("Id must be a number");
    }
    const taskRaw = await queryTaskById(taskId);
    const task = taskRaw[0];

    const formattedTask = {
      id: task.id,
      title: task.title,
      deadline: moment(task.deadline, "YYYY-MM-DD").format("DD/MM/YYYY"),
      status: task.status,
      idCreatedBy: task.id_created_by,
      description: task.description,
      nameCreatedBy: task.name,
    };
    if (task.length === 0) {
      res.statusCode = 404;
      throw new Error("No task found with given ID");
    }
    res.send(formattedTask);
  } catch (error) {
    res.send({ message: error.message });
  }
};

const queryTaskById = async (reqId: number) => {
  const result = connection("TDLTask as t")
    .join("TDLUser as u", "t.id", "u.id")
    .select(
      "t.id",
      "t.title",
      "t.deadline",
      "t.status",
      "t.id_created_by",
      "t.description",
      "u.name"
    )
    .where("t.id", "=", reqId);
  return result;
};

export default getTaskById;
