import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;

    if(username === "" || password === ""){
        res.status(400).send("Please, complete all the fields");
    }

    if(username !== "admin" || password !== "admin"){
        res.status(401).send("Either the user or the password is not correct");
    }
    const token = jwt.sign(
        { username },
        process.env.SECRET_KEY as string, 
        {
            expiresIn: '1h',
        }
    );

    res.status(200).send({message: "User Logged", token: token});
}