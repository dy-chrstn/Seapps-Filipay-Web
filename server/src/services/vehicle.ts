import { VehicleModel } from "../models/vehicle";

export const createVehicle = async (data: any) => {
    const vehicle = await VehicleModel.create(data)
    return vehicle
}

export const findVehicleById = async (id: string) => {
    const vehicle = await VehicleModel.findById(id)
    return vehicle
}

export const findVehiclesByCoopId = async (coopId: string) => {
    const vehicle = await VehicleModel.find({ coopId })
    return vehicle
}

export const updateVehicleById = async (id: string, vehicle: object) => {
    const updatedVehicle = await VehicleModel.findByIdAndUpdate(id, vehicle, { new: true })
    return updatedVehicle
}

export const deleteVehicleById = async (id: string) => {
    const deletedVehicle = await VehicleModel.findByIdAndDelete(id)
    return deletedVehicle
}