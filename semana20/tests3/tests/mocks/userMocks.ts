import { User, USER_ROLES } from "../../src/model/User";

export const normalUserMock = new User(
  "idNormal",
  "name",
  "normal@email.com",
  "normal password",
  USER_ROLES.NORMAL
);

export const adminUserMock = new User(
  "idAdmin",
  "name",
  "admin@email.com",
  "admin password",
  USER_ROLES.ADMIN
);
