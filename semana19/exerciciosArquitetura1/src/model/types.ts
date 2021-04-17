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

// eu fiz uma validaçao no signUpBusiness, e não sei se vai precisar mesmo dessa aqui
/*export const convertStringToUserRole = (role:string): userRole => {
  switch(role){
    case "NORMAL":
      return userRole.NORMAL;
    case "ADMIN":
      return userRole.ADMIN;
    default:
      throw new InvalidRoleInputError(`Please, pick NORMAL or ADMIN`)
  }
    
}
*/

export type addressInfo = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
};

export type signUpInput = {
  email: string;
  password: string;
  role: string;
  cep: string;
  number: string;
  complement: string;
};

export type logInInput = {
  email: string;
  password: string;
};
