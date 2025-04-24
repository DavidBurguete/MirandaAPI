import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const authentication = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if(username === "" || password === ""){
        res.status(401).send("Please, complete all the fields");
    }

    if(username !== "admin" || password !== "admin"){
        res.status(401).send("Either the user or the password is not correct");
    }

    next();
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization;
  
    if (!token) {
        res.status(404).json({ message: 'Token not found' });
    }
  
    try {
        const decoded = jwt.verify(token as string, process.env.SECRET_KEY as string);
        next();
    } catch (error) {
        res.status(403).json({ message: 'Token not valid' });
    }
};