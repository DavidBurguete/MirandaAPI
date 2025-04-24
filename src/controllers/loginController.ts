import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const login = (req: Request, res: Response) => {
    const { username, _ } = req.body;
    const token = jwt.sign(
        { username },
        process.env.SECRET_KEY as string, 
        {
            expiresIn: '1h',
        }
    );

    res.status(200).send({message: "User Logged", token: token});
}