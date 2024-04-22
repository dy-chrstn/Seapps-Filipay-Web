import { RouteModel } from "../models/routes";

export const createRoute = async (coopId: string, origin: string, destination: string, routeLoop: boolean) => {
    const newRoute = new RouteModel({
        coopId,
        origin,
        destination,
        routeLoop
    });
    await newRoute.save();
    return newRoute;
}

export const findRouteById = async (id: string) => {
    const route = await RouteModel.findById(id);
    return route;
}

export const findRoutesByCoopId = async (coopId: string) => {
    const route = await RouteModel.find({ coopId });
    return route;
}

export const updateRouteById = async (id: string, route: object) => {
    const updatedRoute = await RouteModel.findByIdAndUpdate(id, route, { new: true });
    return updatedRoute;
}


export const deleteRouteById = async (id: string) => {
    const deletedRoute = await RouteModel.findByIdAndDelete(id);
    return deletedRoute;
}