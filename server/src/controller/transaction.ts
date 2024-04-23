import express from "express";
import { createTransaction, getTransactionById, getTransactionsByCardId, updateTransactionById, deleteTransactionById } from "../services/transaction";
import { findCoopById } from "../services/coop";

export const registerTransaction = async (req: express.Request, res: express.Response) => {
    try {
        const { cardId, tapOutLat, tapOutLong, tapInLat, tapInLong, tapInStation, tapOutStation, km_run, amount, discount, fare, ticketNumber } = req.body;
        const newTransaction = {
            cardId,
            tapOutLat,
            tapOutLong,
            tapInLat,
            tapInLong,
            tapInStation,
            tapOutStation,
            km_run,
            amount,
            discount,
            fare,
            ticketNumber
        }

        const createdTransaction = await createTransaction(newTransaction);

        res.status(200).json({
            messages: {
                code: 0,
                message: "Transaction created successfully",
            },
            response: createdTransaction
        });
    } catch (error) {
        res.status(500).json({
            messages: {
                code: 1,
                message: error
            },
            response: {}
        });
    }
}

export const getTransaction = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const transaction = await getTransactionById(id);
        res.status(200).json({
            messages: {
                code: 0,
                message: "Transaction fetched successfully",
            },
            response: transaction
        });
    } catch (error) {
        res.status(500).json({
            messages: {
                code: 1,
                message: error
            },
            response: {}
        });
    }
}

export const getTransactions = async (req: express.Request, res: express.Response) => {
    try {
        const { cardId } = req.params;

        const existingUser = await findCoopById(cardId);
        if (!existingUser) {
            return res.status(404).json({
                messages: {
                    code: 1,
                    message: "User not found"
                },
                response: {}
            })
        }

        const transactions = await getTransactionsByCardId(cardId);
        res.status(200).json({
            messages: {
                code: 0,
                message: "Transactions fetched successfully",
            },
            response: transactions
        });
    } catch (error) {
        res.status(500).json({
            messages: {
                code: 1,
                message: error
            },
            response: {}
        });
    }
}

export const updateTransaction = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        const existingTransaction = await getTransactionById(id);
        if (!existingTransaction) {
            return res.status(404).json({
                messages: {
                    code: 1,
                    message: "Transaction not found"
                },
                response: {}
            })
        }

        const { cardId, tapOutLat, tapOutLong, tapInLat, tapInLong, tapInStation, tapOutStation, km_run, amount, discount, fare, ticketNumber } = req.body;
        const updatedTransaction = await updateTransactionById(id, { cardId, tapOutLat, tapOutLong, tapInLat, tapInLong, tapInStation, tapOutStation, km_run, amount, discount, fare, ticketNumber });
        res.status(200).json({
            messages: {
                code: 0,
                message: "Transaction updated successfully",
            },
            response: updatedTransaction
        });
    } catch (error) {
        res.status(500).json({
            messages: {
                code: 1,
                message: error
            },
            response: {}
        });
    }
}

export const deleteTransaction = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        const existingTransaction = await getTransactionById(id);
        if (!existingTransaction) {
            return res.status(404).json({
                messages: {
                    code: 1,
                    message: "Transaction not found"
                },
                response: {}
            })
        }

        const deletedTransaction = await deleteTransactionById(id);
        res.status(200).json({
            messages: {
                code: 0,
                message: "Transaction deleted successfully",
            },
            response: deletedTransaction
        });
    } catch (error) {
        res.status(500).json({
            messages: {
                code: 1,
                message: error
            },
            response: {}
        });
    }
}