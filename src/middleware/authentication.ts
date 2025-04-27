import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const authorization = req.headers.authorization;
    const token = authorization && authorization.split(" ")[1];
  
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