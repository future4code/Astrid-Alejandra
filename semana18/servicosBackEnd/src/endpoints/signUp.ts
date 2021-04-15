import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import getAddressInfo from "../services/getAddressInfo";
import { hash } from "../services/hashManager";
import generateId from "../services/idGenerator";
import { addressInfo, User, userRole } from "../types/types";

const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = generateId();
    const { email, password, role, cep, number, complement } = req.body;
    const cypherText = await hash(password);
    let userData = {
      id,
      email,
      password: cypherText,
      role,
      cep,
      number,
      complement,
    };

    if (
      !password ||
      !email.includes("@") ||
      !role ||
      !cep ||
      !number ||
      !complement
    ) {
      res.statusCode = 422;
      throw new Error(`Please, complete every field`);
    }

    if (
      role.toUpperCase() !== userRole.ADMIN &&
      role.toUpperCase() !== userRole.NORMAL
    ) {
      res.statusCode = 422;
      throw new Error("Please, pick NORMAL or ADMIN");
    }

    const verifiedEmail = await verifyUniqueEmail(email);
    if (!verifiedEmail) {
      res.statusCode = 409;
      throw new Error(`This email ${email} already exists`);
    }

    await insertUser(userData);
    const addressData = await getAddressInfo(cep);
    if (addressData?.city === undefined) {
      res.statusCode = 400;
      throw new Error("Cep is invalid");
    }

    const addressFormatted = {
      user_id: id,
      cep,
      street: addressData.street,
      neighborhood: addressData.neighborhood,
      city: addressData.city,
      state: addressData.state,
    };

    await insertAddress(addressFormatted);

    const token: string = generateToken({ id, role });

    res.status(200).send({ message: "User was created!", token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// QUERIES
const insertUser = async (userData: User) => {
  const result = await connection.insert(userData).into("User");

  return result;
};

const verifyUniqueEmail = async (reqEmail: string): Promise<boolean> => {
  const result = await connection("User")
    .select("email")
    .where({ email: reqEmail });

  if (result.length > 0) {
    return false;
  } else {
    return true;
  }
};

const insertAddress = async (
  addressData: addressInfo | null
): Promise<number[] | null> => {
  if (addressData === null) {
    return null;
  } else {
    const result = connection("Address").insert(addressData);

    return result;
  }
};

export default signUp;
