import { ContactInterface } from "../interfaces/ContactInterface";
import { MessageStatus } from "../interfaces/enums/ContactEnum";
const contact: ContactInterface[] = require("../data/Contact.json");

export const getAllContactsService = (): ContactInterface[] => {
    return contact as ContactInterface[];
}

export const updateContactService = (updatedContactID: number): ContactInterface => {
    contact[updatedContactID] = { ...contact[updatedContactID], status: MessageStatus.Archived };
    return contact[updatedContactID];
};