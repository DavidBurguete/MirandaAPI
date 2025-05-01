import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import UserModel from "../schemas/usersSchema";

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if(username === "" || password === ""){
        res.status(400).send("Please, complete all the fields");
    }

    try{
        const user = await UserModel.findOne({user: username});

        console.log(user);
        if(!user || user.passwd !== password){
            res.status(401).send({message: "Either the user or the password is not correct"});
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
    catch(error){
        res.status(500).json({message: "Error on login"});
    }
}