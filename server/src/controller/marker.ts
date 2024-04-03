import express from "express";
import mongoose from "mongoose";
import { createMarker, findMarkersByCoopId, updateMarker, deleteOneMarker } from "../services/marker";

export const registerMarker = async (req: express.Request, res: express.Response) => {
    try {
        const { coopId, stationName, km, radius, lat, long } = req.body;
        const newMarker = {
            coopId,
            stationName,
            km,
            radius,
            lat,
            long
        };
        try {
            const marker = await createMarker(newMarker);
            res.status(201).json({
                code: 0,
                message: "Marker created successfully",
                marker
            });
        } catch (error) {
            res.status(400).json({
                code: 1,
                message: error
            });
        }
    } catch (error) {
        res.status(500).json({
            code: 1,
            message: error
        });
    }
}

export const getMarkers = async (req: express.Request, res: express.Response) => {
    try {
        const coopId = req.params.id;
        const markers = await findMarkersByCoopId(coopId);
        res.status(200).json({
            code: 0,
            message: "Markers fetched successfully",
            markers
        });
    } catch (error) {
        res.status(500).json({
            code: 1,
            message: error
        });
    }
}

export const deleteMarker = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    try {
        const deletedMarker = await deleteOneMarker(id);
        res.status(200).json({
            code: 0,
            message: "Marker deleted successfully",
            deletedMarker
        });
    } catch (error) {
        res.status(500).json({
            code: 1,
            message: error
        });
    }
}


export const updateMarkerById = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const { coopId, stationName, km, radius, lat, long } = req.body;

    const newMarker = {
        coopId,
        stationName,
        km,
        radius,
        lat,
        long
    }

    try {
        const updatedMarker = await updateMarker(id, newMarker);
        res.status(200).json({
            code: 0,
            message: "Marker updated successfully",
            updatedMarker
        });
    } catch (error) {
        res.status(500).json({
            code: 1,
            message: error
        });
    }
}