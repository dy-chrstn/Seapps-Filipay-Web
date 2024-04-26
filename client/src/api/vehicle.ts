import { BASE_URL } from "../contants/contants";
import tokenApi from "./token";
import { Vehicle } from "../interface/client";

const vehicleApi = {
    registerVehicle: async (vehicle: Vehicle) => {
        try {
            const token = await tokenApi.getToken();
            const response = await fetch(`${BASE_URL}/registerVehicle`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token.token}`,
                },
                body: JSON.stringify(vehicle),
            });
            const data = await response.json();

            if(data.messages.code === 0) {
                console.log("Registered vehicle successfully");
                return data;
            }else if(data.messages.code === 1) {
                console.log("Failed to register vehicle");
                return data;
            }

            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to register vehicle");
        }
    },

    findVehicle: async (id: string) => {
        try {
            const token = await tokenApi.getToken();
            const response = await fetch(`${BASE_URL}/getVehicle/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token.token}`,
                },
            });

            const data = await response.json();
            
            if(data.messages.code === 0) {
                console.log("Found vehicle successfully");
                return data;
            }else if(data.messages.code === 1) {
                console.log("Failed to find vehicle");
                return data;
            }
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to find vehicle");
        }
    },

    findVehicles: async (coopId: string) => {
        try {
            const token = await tokenApi.getToken();
            const response = await fetch(`${BASE_URL}/getVehicles/${coopId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token.token}`,
                },
            });
            const data = await response.json();
            if(data.messages.code === 0) {
                console.log("Found vehicles successfully");
                return data;
            }else if(data.messages.code === 1) {
                console.log("Failed to find vehicles");
                return data;
            }
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to find vehicles");
        }
    },

    updateVehicle: async (id: string, vehicle: Vehicle) => {
        try {
            const token = await tokenApi.getToken();
            const response = await fetch(`${BASE_URL}/updateVehicle/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token.token}`,
                },
                body: JSON.stringify(vehicle),
            });
            const data = await response.json();
            if(data.messages.code === 0) {
                console.log("Updated vehicle successfully");
                return data;
            }else if(data.messages.code === 1) {
                console.log("Failed to update vehicle");
                return data;
            }
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to update vehicle");
        }
    },

    deleteVehicle: async (vehicleId: string) => {
        try {
            const token = await tokenApi.getToken();
            const response = await fetch(`${BASE_URL}/deleteVehicle/${vehicleId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token.token}`,
                },
            });
            const data = await response.json();
            if(data.messages.code === 0) {
                console.log("Deleted vehicle successfully");
                return data;
            }else if(data.messages.code === 1) {
                console.log("Failed to delete vehicle");
                return data;
            }
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to delete vehicle");
        }
    },
};

export default vehicleApi