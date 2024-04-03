import { MarkerModel } from "../models/marker";

export const createMarker = async (marker: object) => {
    const newMarker = new MarkerModel(marker);
    await newMarker.save();
    return newMarker;
}

export const findMarkersByCoopId = (coopId: string) => MarkerModel.find({ coopId: coopId });


export const updateMarker = async (id: string, marker: object) => {
    const updatedMarker = await MarkerModel.findByIdAndUpdate(id, marker, { new: true });
    return updatedMarker;
}

export const deleteOneMarker = async (id: string) => {
    const deletedMarker = await MarkerModel.findByIdAndDelete(id);
    return deletedMarker;
}


