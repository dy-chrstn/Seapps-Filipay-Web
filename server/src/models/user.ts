import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'userAdmin', 'administrator'],
        default: 'user'
    }
})

export const UserModel = mongoose.model('User', UserSchema)