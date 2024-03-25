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

MarkerSchema.pre('save', function (next) {
    const generatedId = new mongoose.Types.ObjectId();
    this.coopId = generatedId.toString();
    next();
});

export const MarkerModel = mongoose.model('Marker', MarkerSchema)