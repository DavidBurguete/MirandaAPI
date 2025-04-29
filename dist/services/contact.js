"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactService = exports.getAllContactsService = void 0;
const ContactEnum_1 = require("../interfaces/enums/ContactEnum");
const contact = require("../data/Contact.json");
const getAllContactsService = () => {
    return contact;
};
exports.getAllContactsService = getAllContactsService;
const updateContactService = (updatedContactID) => {
    contact[updatedContactID] = Object.assign(Object.assign({}, contact[updatedContactID]), { status: ContactEnum_1.MessageStatus.Archived });
    return contact[updatedContactID];
};
exports.updateContactService = updateContactService;
