import { CoopModel } from "../models/coop";

export const createCoop = async (email: string, password: string, coopName: string, coopCode: string, pages: [], accountType: string) => {
    const newCoop = new CoopModel({
        email,
        password,
        coopName,
        coopCode,
        accountType
    });
    await newCoop.save();
    return newCoop;
}


export const findCoopByEmail = async (email: string) => {
    const coop = await CoopModel.findOne({ email });
    return coop;
}

export const updateCoopById = async (id: string, coop: object) => {
    const updatedCoop = await CoopModel.findByIdAndUpdate(id, coop, { new: true });
    return updatedCoop;
}

