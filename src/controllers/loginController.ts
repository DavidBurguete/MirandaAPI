import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import UserModel from "../schemas/usersSchema";

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if(username === "" || password === ""){
        res.status(400).send({message: "Please, complete all the fields"});
    }
    else{

        try{
            const user = await UserModel.findOne({user: username});

            if(!user || user.passwd !== password){
                res.status(401).send({message: "Either the user or the password is not correct"});
            }
            else{
                const token = jwt.sign(
                    { username },
                    process.env.SECRET_KEY as string, 
                    {
                        expiresIn: '1h',
                    }
                );

                res.status(200).send({user: user, token: token});
            }
        }
        catch(error){
            res.status(500).json({message: "Error on login"});
        }
    }
}

export const loginWithToken = async (req: Request, res: Response) => {
    const authorization = req.headers.authorization;
    const token = authorization && authorization.split(" ")[1];
    
    if (!token) {
        res.status(404).json({ message: 'Token not found' });
    }
    else{
        try {
            const decoded = jwt.verify(token as string, process.env.SECRET_KEY as string);
            const username: string = (decoded as any).username;
            try{
                const user = await UserModel.findOne({user: username});
    
                if(!user){
                    res.status(401).send({message: "Either the user or the password is not correct"});
                }
                else{
                    const token = jwt.sign(
                        { username },
                        process.env.SECRET_KEY as string, 
                        {
                            expiresIn: '1h',
                        }
                    );
    
                    res.status(200).send({user: user, token: token});
                }
            }
            catch(error){
                res.status(500).json({message: "Error on login"});
            }
        } catch (error) {
            res.status(403).json({ message: 'Session expired' });
        }
    }
}