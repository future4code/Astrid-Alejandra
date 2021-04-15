import axios from "axios";
import { addressInfo } from "../types/types";

const BASE_URL: string = "https://viacep.com.br/ws/";

const getAddressInfo = async (cep: string): Promise<addressInfo | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/${cep}/json`);

    const { logradouro, bairro, localidade, uf } = response.data;

    const addressInfo: addressInfo = {
      street: logradouro,
      neighborhood: bairro,
      city: localidade,
      state: uf,
    };
    return addressInfo;
  } catch (error) {
    return null;
  }
};

export default getAddressInfo;
