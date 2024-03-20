import { MarkerModel } from "../models/marker";

export const createMarker = async (marker: object) => {
    const newMarker = new MarkerModel(marker);
    await newMarker.save();
    return newMarker;
}

export const getAllMarkers = async () => {
    const markers = await MarkerModel.find();
    return markers;
}


