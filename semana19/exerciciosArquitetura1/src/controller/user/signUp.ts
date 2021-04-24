import { Request, Response } from "express";
import signUpBusiness from "../../business/signUpBusiness";

const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, role, cep, number, complement } = req.body;
    const token = await signUpBusiness({
      email,
      password,
      role,
      cep,
      number,
      complement,
    });

    res.status(200).send({ message: "User was created!", token });
  } catch (error) {
    res.status(error.code || 400).send({ message: error.message });
  }
};

export default signUp;
