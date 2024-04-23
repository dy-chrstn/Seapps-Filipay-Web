import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
    coopId: {
        type: String,
    },
    origin:{
        type: String,
    },
    destination:{
        type: String,
    },
    routeLoop:{
        type: Boolean
    }
});

export const RouteModel = mongoose.model('Route', routeSchema)