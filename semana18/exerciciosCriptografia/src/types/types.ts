export type authenticationData = {
  id: string;
  role: string;
};

export type User = {
  id: string;
  email: string;
  password: string;
  role: userRole;
};

export enum userRole {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}
