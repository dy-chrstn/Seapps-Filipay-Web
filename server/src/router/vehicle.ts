import express from "express";
import { registerVehicle, getVehicle, getVehicles, updateVehicle, deleteVehicle } from "../controller/vehicle";
import { tokenAuth } from "../middleware/middleware";

export default (router: express.Router) => {
    router.post("/registerVehicle", tokenAuth, registerVehicle);
    router.get("/getVehicle/:id", tokenAuth, getVehicle);
    router.get("/getVehicles/:coopId", tokenAuth, getVehicles);
    router.patch("/updateVehicle/:id", tokenAuth, updateVehicle);
    router.delete("/deleteVehicle/:id", tokenAuth, deleteVehicle);
}