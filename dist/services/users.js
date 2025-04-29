"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.createUserService = exports.getOneUserService = exports.getAllUsersService = void 0;
const users = require("../data/Users.json");
const getAllUsersService = () => {
    return users;
};
exports.getAllUsersService = getAllUsersService;
const getOneUserService = (id) => {
    return users.find((user) => user.id === id);
};
exports.getOneUserService = getOneUserService;
const createUserService = (newUser) => {
    const user = Object.assign({}, newUser);
    users.push(user);
    return users;
};
exports.createUserService = createUserService;
const updateUserService = (updatedUser) => {
    users[updatedUser.id] = Object.assign({}, updatedUser);
    return users[updatedUser.id];
};
exports.updateUserService = updateUserService;
const deleteUserService = (userID) => {
    const indexOfUser = users.findIndex((user) => user.id === userID);
    if (indexOfUser !== -1) {
        users.splice(indexOfUser, 1);
        return true;
    }
    return false;
};
exports.deleteUserService = deleteUserService;
