import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types/types";

const editUser = async (req: Request, res: Response) => {
  try {
    // const { name, nickname } = req.body
    // os parametros que vão ser alterados com o tipo (vai ser o userpersonalinfo)
    //   const tokenData: authenticationData | null = getTokenData(req.headers.authorization!)
    //e as verificações
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

export default editUser;

/*na hora de retomar esse código:
não sei se posso editar aqui mesmo o email ou a senha, então eu não  vou fazer, instead, vou
atualizar o banco e a função de signup, de acordo com o que foi solicitado na to-do-list, para ter
outros campos para alterar nesse edit.

o interessante é o que está comentado.
*/

/* A AUTORIZATHION USANDO O TOKEN: if(tokenData.role !== userRole.ADMIN){
  res.statusCOde = 401
  throw new Error("NoT AUTHORIZED")

  E TEM que fazer o header! 
}
 */
