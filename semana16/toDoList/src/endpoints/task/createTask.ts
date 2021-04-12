import { Request, Response } from "express";
import moment from "moment";
import connection from "../../connection";
import { Task } from "../../types/types";

const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, deadline, idCreatedBy } = req.body;
    const taskData: Task = {
      title: title,
      description: description,
      deadline: moment(deadline, "DD/MM/YYYY").format("YYYY-MM-DD"),
      id_created_by: idCreatedBy,
    };
    if (!title || !description || !deadline || !idCreatedBy) {
      res.statusCode = 400;
      throw new Error("All fields are required");
    }

    const dateDiff: number =
      moment(deadline, "DD/MM/YYYY").unix() - moment().unix();

    if (dateDiff <= 0) {
      res.statusCode = 400;
      throw new Error("Past dates are not valid");
    }

    const newTask = await insertTask(taskData);

    res.status(201).send({ message: "Task was successfully created", newTask });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.send({ message: error.message });
    }
  }
};

const insertTask = async (taskData: Task): Promise<number[]> => {
  const result = connection("TDLTask").insert(taskData);

  return result;
};
export default createTask;
