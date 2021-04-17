import { signUpInput, userRole } from "../model/types";
import { hash } from "../services/hashManager";
import generateId from "../services/idGenerator";
import { insertAddress } from "../data/insertAddress";
import { MissingInputFieldsError } from "../error/MissingInputFieldsError";
import { InvalidEmailError } from "../error/InvalidEmailError";
import { InvalidRoleInputError } from "../error/InvalidRoleInputError";
import { verifyEmail } from "../data/verifyEmail";
import { DuplicatedEmailError } from "../error/DuplicatedEmailError";
import { insertUser } from "../data/insertUser";
import getAddressInfo from "../services/getAddressInfo";
import { InvalidCepError } from "../error/InvalidCepError";
import { generateToken } from "../services/authenticator";

const signUpBusiness = async (input: signUpInput): Promise<string> => {
  try {
    const cypherText = await hash(input.password);

    if (
      !input.password ||
      !input.email ||
      !input.role ||
      !input.cep ||
      !input.number ||
      !input.complement
    ) {
      throw new MissingInputFieldsError();
    }

    if (!input.email.includes("@")) {
      throw new InvalidEmailError();
    }

    if (
      input.role.toUpperCase() !== userRole.ADMIN &&
      input.role.toUpperCase() !== userRole.NORMAL
    ) {
      throw new InvalidRoleInputError("Please, pick NORMAL or ADMIN");
    }

    // acho que essa validação é feita automáticamente pelo banco, quando o email está definido como unique
    // acho que posso acessar o erro pelo sql.message
    const verifiedEmail = await verifyEmail(input.email);
    if (!verifiedEmail) {
      throw new DuplicatedEmailError();
    }

    const addressData = await getAddressInfo(input.cep);
    if (addressData?.city === undefined) {
      throw new InvalidCepError("Cep is invalid");
    }

    const id: string = generateId();

    let userData = {
      id,
      password: cypherText,
      email: input.email,
      role: input.role,
      cep: input.cep,
      number: input.number,
      complement: input.complement,
    };
    await insertUser(userData);

    const addressFormatted = {
      user_id: id,
      cep: input.cep,
      street: addressData.street,
      neighborhood: addressData.neighborhood,
      city: addressData.city,
      state: addressData.state,
    };

    await insertAddress(addressFormatted);

    const token: string = generateToken({ id, role: input.role });

    return token;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
};

export default signUpBusiness;
