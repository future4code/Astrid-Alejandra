import { Request, Response } from "express";

const resetPassword = async (
    req: Request, res: Response
): Promise<void> => {
    try {
        const {email} = req.body
        
    } catch (error) {
        res.status(400).send({message: error.message})
        
    }
};

export default resetPassword;
