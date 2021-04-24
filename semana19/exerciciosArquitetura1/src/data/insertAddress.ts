import connection from "./connection";
import { addressInfo } from "../model/types";

export const insertAddress = async (
  addressData: addressInfo | null
): Promise<number[] | null> => {
  if (addressData === null) {
    return null;
  } else {
    const result = connection("Address").insert(addressData);

    return result;
  }
};
