import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    coopId: {
        type: String,
        required: true
    },
    code:{
        type: String,
    },
    serviceType:{
        type: String,
    },
    coopName:{
        type: String,
    },
    vehicleNumber:{
        type: String,
    },
    validator:{
        type: String,
    },
    monitor:{
        type: String,
    },
    maker: {
        type: String,
    },
    maxAmount: {
        type: Number,
    },
    plateNumber:{
        type: String,
    },
    chassisNumber:{
        type: String,
    },
    engineNumber:{
        type: String,
    },
    distanceTravelled:{
        type: String,
    },
    status:{
        type: String,
    }
});

export const VehicleModel = mongoose.model('Vehicle', vehicleSchema)