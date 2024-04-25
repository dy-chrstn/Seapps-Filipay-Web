import express from "express";
import { createVehicle, findVehicleById, findVehiclesByCoopId, updateVehicleById, deleteVehicleById } from "../services/vehicle";

export const registerVehicle = async (req: express.Request, res: express.Response) => {
    try {
        const vehicle = await createVehicle(req.body);
        res.status(201).json({
            messages: {
                code: 0,
                message: 'Vehicle registered successfully'
            },
            response: vehicle
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
};

export const getVehicle = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const vehicle = await findVehicleById(id);
        res.status(200).json({
            messages: {
                code: 0,
                message: 'Vehicle fetched successfully'
            },
            response: vehicle
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
};

export const getVehicles = async (req: express.Request, res: express.Response) => {
    try {
        const { coopId } = req.params;
        const vehicles = await findVehiclesByCoopId(coopId);
        res.status(200).json({
            messages: {
                code: 0,
                message: 'Vehicles fetched successfully'
            },
            response: vehicles
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
};

export const updateVehicle = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const vehicle = await updateVehicleById(id, req.body);
        res.status(200).json({
            messages: {
                code: 0,
                message: 'Vehicle updated successfully'
            },
            response: vehicle
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
};

export const deleteVehicle = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const vehicle = await deleteVehicleById(id);
        res.status(200).json({
            messages: {
                code: 0,
                message: 'Vehicle deleted successfully'
            },
            response: vehicle
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