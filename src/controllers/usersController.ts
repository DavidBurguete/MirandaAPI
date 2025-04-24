import { Request, Response } from "express";
import * as UsersService from "../services/users";
import { User } from "../interfaces/UserInterfaces";

export const getAllUsers = (req: Request, res: Response) => {
    const Users = UsersService.getAllUsers();
    res.json(Users);
}

export const getOneUser = (req: Request, res: Response) => {
    const User_id = parseInt(req.params.id);
    if(isNaN(User_id)){
        res.status(400).send({message: "The parameter is not a User id"});
    }
    const User = UsersService.getOneUser(User_id);
    if(User){
        res.json(User);
    }
    else{
        res.status(404).json({message: "User not found"});
    }
}

export const createUser = (req: Request, res: Response) => {
    const newUser: User = req.body;
    const createdUser = UsersService.createUser(newUser);
    if(Array.isArray(createdUser)){
        res.status(403).json({errors: createdUser});
    }
    else{
        res.status(201).json(createdUser);
    }
};

export const updateUser = (req: Request, res: Response) => {
    const updatedData: User = req.body;
    const updatedUser = UsersService.updateUser(updatedData);
    if(Array.isArray(updatedData)){
        res.status(403).json({errors: updatedUser});
    }
    else{
        res.status(201).json(updatedUser);
    }
};

export const deleteUser = (req: Request, res: Response) => {
    const UserToDeleteID: number = req.body.user_id;
    const deletedUser = UsersService.deleteUser(UserToDeleteID);
    if(deletedUser){
        res.json("User deleted");
    }
    else{
        res.status(404).json("User not found");
    }
};