export type authenticationData = {
  id: string;
  role: string;
};

export type User = {
  id: string;
  email: string;
  password: string;
  role: userRole;
  cep: string;
  number: number;
  complement: string;
};

export enum userRole {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export type addressInfo = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
};
