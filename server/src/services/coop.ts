import { CoopModel } from "../models/coop";

export const createCoop = async (email: string, password: string, coopName: string, coopCode: string, pages: [], accountType: string) => {
    const newCoop = new CoopModel({
        email,
        password,
        coopName,
        coopCode,
        pages,
        accountType
    });
    await newCoop.save();
    return newCoop;
}

export const findCoopById = async (id: string) => {
    const coop = await CoopModel.findById({ _id: id });
    return coop;
}


export const findCoopByEmail = async (email: string) => {
    const coop = await CoopModel.findOne({ email });
    return coop;
}

export const updateCoopById = async (id: string, coop: object) => {
    const updatedCoop = await CoopModel.findByIdAndUpdate(id, coop, { new: true });
    return updatedCoop;
}

