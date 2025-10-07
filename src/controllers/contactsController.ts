import { Request, Response } from "express";
import {
    getAllContactsService,
    newMessageService,
    updateContactService
} from "../services/contact";
import { ContactInterface } from "../interfaces/ContactInterface";
import { MessageStatus } from "../interfaces/enums/ContactEnum";

export const getAllContactsController = async (req: Request, res: Response) => {
    try{
        const contacts = await getAllContactsService();
        res.json(contacts);
    }
    catch(error){
        res.status(500).json({message: "Couldn't fetch the messages"});
    }
}

export const postNewContactController = async (req: Request, res: Response) => {
    const { name, phone, email, subject, message } = req.body;

    if(
        !name || name === "" || 
        !phone || phone === "" || 
        !email || email === "" || 
        !subject || subject === "" || 
        !message || message === ""
    ){
        res.status(401).send({message: "Please, complete all the fields"});
    }
    else{
        try{
            let hoy = new Date();
            const newMessage = {
                date: (hoy.getMonth() + 1) + "/" + hoy.getDate() + "/" + hoy.getFullYear(),
                customer: name,
                email: email,
                phone_number: phone,
                subject: subject,
                comment: message,
                status: MessageStatus.Pending
            };
            await newMessageService(newMessage as ContactInterface);
            res.status(200).send({response: "Message sent"});
        }
        catch(error){
            res.status(500).json({message: "Couldn't send the message"});
        }
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