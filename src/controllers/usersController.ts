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

export const getAllUsersController = async (req: Request, res: Response) => {
    try{
        const Users = await getAllUsersService();
        res.json(Users);
    }
    catch(error){
        res.status(500).json({ message: 'Error while fetching users' });
    }
}

export const getOneUserController = async (req: Request, res: Response) => {
    const user_id = req.params.id;
    try{
        const User = await getOneUserService(user_id);
        if(User){
            res.json(User);
        }
        else{
            res.status(404).json({message: "User not found"});
        }
    }
    catch(error){
        res.status(500).json({message: "There was an error while fetching the user"});
    }
}

export const createUserController = async (req: Request, res: Response) => {
    const newUser: User = req.body;
    const validUser = validateUser(newUser);
    if(validUser.length === 0){
        try{
            const createdUser = await createUserService(newUser);
            res.status(201).json(createdUser);
        }
        catch(error){
            res.status(500).json({message: "Couldn't add the new user"});
        }
    }
    else{
        res.status(403).json({errors: validUser});
    }
};

export const updateUserController = async (req: Request, res: Response) => {
    const user_id: string = req.params.id;
    const updatedData: User = req.body;
    const validUser = validateUser(updatedData);
    if(validUser.length === 0){
        try{
            const updatedUser = await updateUserService(user_id, updatedData);
            res.status(201).json(updatedUser);
        }
        catch(error){
            res.status(500).json({message: "Couldn't update the user"});
        }
    }
    else{
        res.status(403).json({errors: validUser});
    }
};

export const deleteUserController = async (req: Request, res: Response) => {
    const UserToDeleteID = req.params.id;
    try{
        const deletedUser = await deleteUserService(UserToDeleteID);
        if(deletedUser){
            res.json("User deleted");
        }
        else{
            res.status(404).json("User not found");
        }
    }
    catch(error){
        res.status(500).json({message: "Couldn't delete the room"});
    }
};