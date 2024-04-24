import express from "express";
import { registerCoop, loginCoop, updateCoop, findCoop } from "../controller/coop";
import { checkCredentials, tokenAuth } from "../middleware/middleware";

export default (router: express.Router) => {
    router.post("/register", tokenAuth, checkCredentials, registerCoop);
    router.post("/login", tokenAuth, checkCredentials, loginCoop);
    router.get("/findCoop/:id", tokenAuth, findCoop);
    router.patch("/updateCoop/:id", tokenAuth, updateCoop);
}