import mongoose from "mongoose";

const coopSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    coopName: {
        type: String,
    },
    coopCode: {
        type: String,
    },
    pages:{
        type: Array
    },

    accountType: {
        type: String,
        enum: ['user', 'userAdmin', 'administrator'],
        default: 'user'
    }
})

export const CoopModel = mongoose.model('Coop', coopSchema)