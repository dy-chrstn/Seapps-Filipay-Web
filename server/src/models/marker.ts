import mongoose from "mongoose";

const MarkerSchema = new mongoose.Schema({
    coopId: {
        type: String,
    },
    stationName: {
        type: String,
    },
    km: {
        type: Number,
    },
    radius: {
        type: Number,
    },
    lat: {
        type: String,
    },
    long: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});


export const MarkerModel = mongoose.model('Marker', MarkerSchema)