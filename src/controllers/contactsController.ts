import { Request, Response } from "express";
import {
    getAllContactsService,
    updateContactService
} from "../services/contact";

export const getAllContactsController = async (req: Request, res: Response) => {
    try{
        const contacts = await getAllContactsService();
        res.json(contacts);
    }
    catch(error){
        res.status(500).json({message: "Couldn't fetch the messages"});
    }
}

export const updateContactController = async (req: Request, res: Response) => {
    const updatedID: string = req.params.id;
    try{
        const updatedContact = await updateContactService(updatedID);
        res.status(201).json(updatedContact);
    }
    catch(error){
        res.status(500).json({message: "Couldn't archive the message"});
    }
};