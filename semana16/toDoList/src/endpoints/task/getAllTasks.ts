import { Request, Response } from "express";
import connection from "../../connection";
import { Task } from "../../types/types";

const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks: Task[] = await queryAllTasks();
    if (tasks.length === 0) {
      res.statusCode = 404;
      throw new Error("No tasks found");
    }

    res.send(tasks);
  } catch (error) {
    if (res.statusCode === 200) {
      res.send({ message: error.message });
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
};

const queryAllTasks = async (): Promise<Task[]> => {
  const result = connection("TDLTask").select("*");

  return result;
};

export default getAllTasks;
