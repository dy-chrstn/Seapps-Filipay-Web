import express from "express";

import { registerUser, loginUser } from "../controller/user";
import { checkCredentials, tokenAuth } from "../middleware/middleware";

export default (router: express.Router) => {
    router.post("/register", tokenAuth, checkCredentials, registerUser);
    router.post("/login", tokenAuth, checkCredentials, loginUser);
}
