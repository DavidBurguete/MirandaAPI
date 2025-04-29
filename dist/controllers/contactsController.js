"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactController = exports.getAllContactsController = void 0;
const contact_1 = require("../services/contact");
const getAllContactsController = (req, res) => {
    const contacts = (0, contact_1.getAllContactsService)();
    res.json(contacts);
};
exports.getAllContactsController = getAllContactsController;
const updateContactController = (req, res) => {
    const updatedID = parseInt(req.params.id);
    if (isNaN(updatedID)) {
        res.status(400).send({ message: "The parameter is not a contact id" });
    }
    const validContact = (0, contact_1.getAllContactsService)().find(contact => contact.message_id === updatedID);
    if (validContact !== undefined) {
        const updatedContact = (0, contact_1.updateContactService)(updatedID - 1);
        res.status(201).json(updatedContact);
    }
    else {
        res.status(403).json({ errors: "Couldn't find the specified contact message to archive" });
    }
};
exports.updateContactController = updateContactController;
