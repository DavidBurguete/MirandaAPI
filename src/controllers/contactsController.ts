import { Request, Response } from "express";
import {
    getAllContactsService,
    updateContactService
} from "../services/contact";
import { ContactInterface } from "../interfaces/ContactInterface";

export const getAllContactsController = (req: Request, res: Response) => {
    const contacts = getAllContactsService();
    res.json(contacts);
}

export const updateContactController = (req: Request, res: Response) => {
    const updatedID: number = parseInt(req.params.id);
    if(isNaN(updatedID)){
        res.status(400).send({message: "The parameter is not a contact id"});
    }
    const validContact = getAllContactsService().find(contact => contact.message_id === updatedID);
    if(validContact !== undefined){
        const updatedContact = updateContactService(updatedID - 1);
        res.status(201).json(updatedContact);
    }
    else{
        res.status(403).json({errors: "Couldn't find the specified contact message to archive"});
    }
};