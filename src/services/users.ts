import { User } from "../interfaces/UserInterfaces";
import UsersModel from "../schemas/usersSchema";

export const getAllUsersService = async (): Promise<User[]> => {
    return await UsersModel.find();
}

export const getOneUserService = async (id: string): Promise<User | null> => {
    const getOneUser = await UsersModel.findById(id);
    return getOneUser as User | null;
}

export const createUserService = async (newUser: User): Promise<User[]> => {
    await UsersModel.create(newUser);
    return await getAllUsersService();
};

export const updateUserService = async (user_id: string, updatedUser: User): Promise<User> => {
    const updateUser = await UsersModel.findByIdAndUpdate(
        user_id,
        updatedUser,
        { new: true }
    );
    return updateUser as User;
};

export const deleteUserService = async (userID: string): Promise<boolean> => {
    const deletedUser = await UsersModel.findByIdAndDelete(userID);
    return deletedUser !== null;
}