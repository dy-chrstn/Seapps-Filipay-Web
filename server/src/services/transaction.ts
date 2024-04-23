import { TransactionModel } from "../models/transaction";

export const createTransaction = async (transaction: object) => {
    const newTransaction = new TransactionModel(transaction);
    await newTransaction.save();
    return newTransaction;
}

export const getTransactionById = (id: string) => TransactionModel.findById(id)

export const getTransactionsByCardId = (cardId: string) => TransactionModel.find({ cardId: cardId })

export const updateTransactionById = async (id: string, transaction: object) => {
    const updatedTransaction = await TransactionModel.findByIdAndUpdate(id, transaction, { new: true });
    return updatedTransaction;
}

export const deleteTransactionById = async (id: string) => {
    const deletedTransaction = await TransactionModel.findByIdAndDelete(id);
    return deletedTransaction;
}
