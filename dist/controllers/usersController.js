"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.updateUserController = exports.createUserController = exports.getOneUserController = exports.getAllUsersController = void 0;
const users_1 = require("../services/users");
const usersValidator_1 = require("../validators/usersValidator");
const getAllUsersController = (req, res) => {
    const Users = (0, users_1.getAllUsersService)();
    res.json(Users);
};
exports.getAllUsersController = getAllUsersController;
const getOneUserController = (req, res) => {
    const User_id = parseInt(req.params.id);
    if (isNaN(User_id)) {
        res.status(400).send({ message: "The parameter is not a User id" });
    }
    const User = (0, users_1.getOneUserService)(User_id);
    if (User) {
        res.json(User);
    }
    else {
        res.status(404).json({ message: "User not found" });
    }
};
exports.getOneUserController = getOneUserController;
const createUserController = (req, res) => {
    const newUser = req.body;
    const validUser = (0, usersValidator_1.validateUser)(newUser);
    if (validUser.length === 0) {
        const createdUser = (0, users_1.createUserService)(newUser);
        res.status(201).json(createdUser);
    }
    else {
        res.status(403).json({ errors: validUser });
    }
};
exports.createUserController = createUserController;
const updateUserController = (req, res) => {
    const updatedData = req.body;
    const validUser = (0, usersValidator_1.validateUser)(updatedData);
    if (validUser.length === 0) {
        const updatedUser = (0, users_1.updateUserService)(updatedData);
        res.status(201).json(updatedUser);
    }
    else {
        res.status(403).json({ errors: validUser });
    }
};
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => {
    const UserToDeleteID = parseInt(req.params.id);
    if (isNaN(UserToDeleteID)) {
        res.status(400).send({ message: "The parameter is not a User id" });
    }
    const deletedUser = (0, users_1.deleteUserService)(UserToDeleteID);
    if (deletedUser) {
        res.json("User deleted");
    }
    else {
        res.status(404).json("User not found");
    }
};
exports.deleteUserController = deleteUserController;
