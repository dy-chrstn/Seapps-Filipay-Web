import express from "express";
import { registerCoop, loginCoop, updateCoop } from "../controller/coop";
import { checkCredentials, tokenAuth } from "../middleware/middleware";

export default (router: express.Router) => {
    router.post("/register", tokenAuth, checkCredentials, registerCoop);
    router.post("/login", tokenAuth, checkCredentials, loginCoop);
    router.patch("/updateCoop/:id", tokenAuth, updateCoop);
}