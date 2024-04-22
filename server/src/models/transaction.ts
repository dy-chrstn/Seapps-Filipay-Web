import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    cardId: {
        type: String,
        required: true
    },
    tapOutLat: {
        type: String,

    },
    tapOutLong: {
        type: String,
    },
    tapInLat: {
        type: String,
        
    },
    tapInLong: {
        type: String,
    },
    tapInStation:{
        type: String,
    },
    tapOutStation:{
        type: String,
    },
    km_run:{
        type: Number,
    },
    amount:{
        type: Number,
    },
    discount:{
        type: Number,
    },
    fare:{
        type: Number,
    },
    ticketNumber:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export const TransactionModel = mongoose.model('Transaction', transactionSchema)