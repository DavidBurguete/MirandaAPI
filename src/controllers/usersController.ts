import { Request, Response } from "express";
import {
    getAllUsersService,
    getOneUserService,
    createUserService,
    updateUserService,
    deleteUserService
} from "../services/users";
import { User } from "../interfaces/UserInterfaces";
import { validateUser } from "../validators/usersValidator";

export const getAllUsersController = (req: Request, res: Response) => {
    const Users = getAllUsersService();
    res.json(Users);
}

export const getOneUserController = (req: Request, res: Response) => {
    const User_id = parseInt(req.params.id);
    if(isNaN(User_id)){
        res.status(400).send({message: "The parameter is not a User id"});
    }
    const User = getOneUserService(User_id);
    if(User){
        res.json(User);
    }
    else{
        res.status(404).json({message: "User not found"});
    }
}

export const createUserController = (req: Request, res: Response) => {
    const newUser: User = req.body;
    const validUser = validateUser(newUser);
    if(validUser.length === 0){
        const createdUser = createUserService(newUser);
        res.status(201).json(createdUser);
    }
    else{
        res.status(403).json({errors: validUser});
    }
};

export const updateUserController = (req: Request, res: Response) => {
    const updatedData: User = req.body;
    const validUser = validateUser(updatedData);
    if(validUser.length === 0){
        const updatedUser = updateUserService(updatedData);
        res.status(201).json(updatedUser);
    }
    else{
        res.status(403).json({errors: validUser});
    }
};

export const deleteUserController = (req: Request, res: Response) => {
    const UserToDeleteID = parseInt(req.params.id);
    if(isNaN(UserToDeleteID)){
        res.status(400).send({message: "The parameter is not a User id"});
    }
    const deletedUser = deleteUserService(UserToDeleteID);
    if(deletedUser){
        res.json("User deleted");
    }
    else{
        res.status(404).json("User not found");
    }
};