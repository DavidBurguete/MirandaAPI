import { User } from "../interfaces/UserInterfaces";
import { validateUser } from "../validators/usersValidator";
const users: User[] = require("../data/Users.json");

export const getAllUsersService = (): User[] => {
    return users as User[];
}

export const getOneUserService = (id: number): User | undefined => {
    return users.find((user: User) => user.id === id);
}

export const createUserService = (newUser: User): User[] | string[] => {
    const user: User = { ...newUser };
    users.push(user);
    return users;
};

export const updateUserService = (updatedUser: User): User | string[] => {
    users[updatedUser.id] = { ...updatedUser };
    return users[updatedUser.id];
};

export const deleteUserService = (userID: number): boolean => {
    const indexOfUser = users.findIndex((user: User) => user.id === userID);
    if(indexOfUser !== -1){
        users.splice(indexOfUser, 1);
        return true;
    }
    return false;
}