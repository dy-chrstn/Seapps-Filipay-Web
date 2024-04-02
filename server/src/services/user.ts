import { UserModel } from "../models/user";

export const createUser = async (email: string, password: string, name: string, role: string) => {
    const newUser = new UserModel({
        email,
        password,
        name,
        role
    });
    await newUser.save();
    return newUser;
}

export const findUserByEmail = async (email: string) => {
    const user = await UserModel.findOne({ email });
    return user;
}