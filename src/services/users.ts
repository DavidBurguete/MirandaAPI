import { User } from "../interfaces/UserInterfaces";
import { validateUser } from "../validators/usersValidator";
const users: User[] = require("../data/Users.json");

export const getAllUsers = (): User[] => {
    return users as User[];
}

export const getOneUser = (id: number): User | undefined => {
    return users.find((user: User) => user.id === id);
}

export const createUser = (newUser: User): User[] | string[] => {
    const validUser = validateUser(newUser);
    if(validUser.length === 0){
        const user: User = { ...newUser };
        users.push(user);
        return users;
    }
    else{
        return validUser;
    }
};

export const updateUser = (updatedUser: User): User | string[] => {
    const validUser = validateUser(updatedUser);
    if(validUser.length === 0){
        users[updatedUser.id] = { ...updatedUser };
        return users[updatedUser.id];
    }
    else{
        return validUser;
    }
};

export const deleteUser = (userID: number): boolean => {
    const indexOfUser = users.findIndex((user: User) => user.id === userID);
    if(indexOfUser !== -1){
        users.splice(indexOfUser, 1);
        return true;
    }
    return false;
}