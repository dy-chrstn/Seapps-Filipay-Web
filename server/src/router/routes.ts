import express from "express";

import { registerRoute, getRoute, getRoutes, updateRoute, deleteRoute } from "../controller/routes";
import { tokenAuth } from "../middleware/middleware";

export default (router: express.Router) => {
    router.post("/registerRoute", tokenAuth, registerRoute);
    router.get("/getRoute/:id", tokenAuth, getRoute);
    router.get("/getRoutes/:coopId", tokenAuth, getRoutes);
    router.patch("/updateRoute/:id", tokenAuth, updateRoute);
    router.delete("/deleteRoute/:id", tokenAuth, deleteRoute);
}