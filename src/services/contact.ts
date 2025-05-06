import { ContactInterface } from "../interfaces/ContactInterface";
import { MessageStatus } from "../interfaces/enums/ContactEnum";
import ContactsModel from "../schemas/contactSchema";

export const getAllContactsService = async (): Promise<ContactInterface[]> => {
    return await ContactsModel.find();
}

export const updateContactService = async (updatedContactID: string): Promise<ContactInterface> => {
    const updateContact = await ContactsModel.findByIdAndUpdate(
        updatedContactID,
        { status: MessageStatus.Archived },
        { new: true }
    );
    return updateContact as ContactInterface;
};