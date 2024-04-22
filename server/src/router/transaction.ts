import express from "express";
import { registerTransaction, getTransaction, getTransactions, updateTransaction, deleteTransaction } from "../controller/transaction";
import { tokenAuth } from "../middleware/middleware";

export default (router: express.Router) => {
    router.post("/registerTransaction", tokenAuth, registerTransaction);
    router.get("/getTransaction/:id", tokenAuth, getTransaction);
    router.get("/getTransactions/:cardId", tokenAuth, getTransactions);
    router.patch("/updateTransaction/:id", tokenAuth, updateTransaction);
    router.delete("/deleteTransaction/:id", tokenAuth, deleteTransaction);
}