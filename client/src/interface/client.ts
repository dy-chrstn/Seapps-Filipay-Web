export interface Vehicle {
    _id: String,
    code: String,
    serviceType: String,
    coopName: String,
    vehicleNumber: String,
    validator: String,
    monitor: String,
    maker: String,
    maxAmount: Number,
    plateNumber: String,
    chassisNumber: String,
    engineNumber: String,
    distanceTravelled: String,
    status: String,
    createdAt: Date,
    updatedAt: Date
}

export interface VehicleService {
    id: number;
    serviceType: String;
    totalUnits: string;
}

export interface Device {
    id: number;
    code: string,
    validator: string,
    status: string;
}


