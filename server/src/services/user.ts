import { UserModel } from "models/user";

export const createUser = async (user: object) => {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;
}

export const findUserByEmail = async (email: string) => {
    const user = await UserModel.findOne({ email });
    return user;
}