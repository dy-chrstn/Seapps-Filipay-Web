import express from "express";

import { registerUser, loginUser } from "../controller/user";
import { tokenAuth } from "middleware/middleware";

export default (router: express.Router) => {
    router.post("/register", tokenAuth, registerUser);
    router.post("/login", tokenAuth, loginUser);

    return router;
}
