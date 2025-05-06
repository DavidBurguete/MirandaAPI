import { MessageStatus } from "./enums/ContactEnum";

export interface ContactInterface {
    date: string;
    customer: string;
    email: string;
    phone_number: string;
    subject: string;
    comment: string;
    status: MessageStatus;
}