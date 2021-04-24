import { Request, Response } from "express";
import logInBusiness from "../../business/logInBusiness";

const logIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const token = await logInBusiness({ email, password });

    res.status(200).send({
      message: "Successfully logged in",
      token,
    });
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
};

export default logIn;
