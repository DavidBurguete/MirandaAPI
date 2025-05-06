import mongoose from "mongoose";
import { ContactInterface } from "../interfaces/ContactInterface";
import { MessageStatus } from "../interfaces/enums/ContactEnum";

const ContactsSchema = new mongoose.Schema<ContactInterface>({
    date: { type: String, required: true },
    customer: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    subject: { type: String, required: true },
    comment: { type: String, required: true },
    status: { type: String, enum: Object.values(MessageStatus), required: true }
});

export default mongoose.model("Message", ContactsSchema);