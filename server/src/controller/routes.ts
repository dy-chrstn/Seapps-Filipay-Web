import express from "express";
import { createRoute, findRouteById, findRoutesByCoopId, updateRouteById, deleteRouteById } from "../services/routes";
import { findCoopById } from "../services/coop";

export const registerRoute = async (req: express.Request, res: express.Response) => {
    const { coopId, origin, destination, routeLoop } = req.body;
    try {

        const coop = await findCoopById(coopId);
        if (!coop) {
            return res.status(404).json({
                code: 1,
                message: "Coop not found"
            });
        }

        const newRoute = await createRoute(coopId, origin, destination, routeLoop);
        res.status(200).json({
            code: 0,
            message: "Route created successfully",
            newRoute
        });
    } catch (error) {
        res.status(500).json({
            code: 1,
            message: error
        });
    }
}

export const getRoute = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const route = await findRouteById(id);
        res.status(200).json({
            messages: {
                code: 0,
                message: "Route fetched successfully"
            },
            response: route
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

export const getRoutes = async (req: express.Request, res: express.Response) => {
    try {
        const { coopId } = req.params;

        const existingUser = await findCoopById(coopId);
        if (!existingUser) {
            return res.status(404).json({
                messages: {
                    code: 1,
                    message: "Coop not found"
                },
                response: {}
            });
        }

        const routes = await findRoutesByCoopId(coopId);
        res.status(200).json({
            messages: {
                code: 0,
                message: "Routes fetched successfully"
            },
            response: routes
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

export const updateRoute = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const route = await updateRouteById(id, req.body);
        res.status(200).json({
            messages: {
                code: 0,
                message: "Route updated successfully"
            },
            response: route
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

export const deleteRoute = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const deletedRoute = await deleteRouteById(id);
        res.status(200).json({
            messages: {
                code: 0,
                message: "Route deleted successfully"
            },
            response: deletedRoute
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