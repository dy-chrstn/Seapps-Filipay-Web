import axios from "axios";
import React, { useState, useEffect } from "react";

interface MarkerData {
  _id: string;
  coopId: string;
  stationName: string;
  km: number;
  radius: number;
  lat: string;
  long: string;
}

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
  onDeleteMarker: () => void;
  display: { lat: number; lng: number };
  marker: MarkerData | null;
  handleUpdateInfo: (newStation: string | undefined, newKm: number | undefined, newRadius: number | undefined) => void
}

const SideBar: React.FC<SideBarProps> = ({
  isOpen,
  onClose,
  onDeleteMarker,
  display,
  marker,
  handleUpdateInfo
}) => {
  const [markerValue, setMarkerValue] = useState<MarkerData[]>([]);
  const [newRadius, setNewRadius] = useState("5");
  const [newStation, setNewStation] = useState(marker?.stationName);
  const [newKm, setNewKm] = useState(marker?.km);
  const [newLabel, setNewLabel] = useState<{ label: string }>({ label: "" });
  const [pinId, setPinId] = useState("");

  const lat = display.lat.toString();
  const lng = display.lng.toString();

  const handleUpdate = async () => {
    try{
      const res = await axios.patch(`http://localhost:3050/updateMarkerById/${marker?._id}`, {
        stationName: newStation,
        km: newKm,
        lat: lat,
        long: lng,
        radius: parseFloat(newRadius),
      })
      if(res.status === 200){
        console.log("Update marker successfully: ", res.data)
        handleUpdateInfo(newStation, newKm, parseFloat(newRadius));
        onClose();
      }
      
    } catch (error) {
      console.log(error)
    }
    
    onClose();
  };

  const handleDelete = () => {
    onDeleteMarker();
  };

  const handleRadiusChange = (event: any) => {
    const value = event.target.value;
    if (!isNaN(value) || value !== "") {
      setNewRadius(value);
    }
  };

  const handleStationNameChange = (event: any) => {
    const value = event.target.value;
    if (!isNaN(value) || value !== "") {
      setNewStation(value);
    }
  };

  const handleKmChange = (event: any) => {
    const value = event.target.value;
    if (!isNaN(value) || value !== "") {
      setNewKm(value);
    }
  };

  return (
    <div
      className={
        isOpen
          ? "bg-white absolute mt-16 right-3 z-50 flex flex-col gap-2 w-200 p-4 border rounded shadow"
          : "hidden"
      }
    >
      <h1>Station: </h1>
      <input
        type="text"
        placeholder="Station name: "
        pattern="\d*"
        className="w-full"
        onChange={
          handleStationNameChange
        }
        value={newStation}
      />
      <h1>Kilometer:</h1>
      <input
        type="text"
        value={newKm}
        onChange={handleKmChange}
        min={0}
        pattern="\d*"
        className="w-full"
      />
      <h1>Radius:</h1>
      <input
        type="number"
        placeholder="Radius: "
        min={0}
        pattern="\d*"
        className="w-full"
        onChange={handleRadiusChange}
        value={newRadius}
      />
      <h1>Latitude:</h1>
      <input
        type="number"
        placeholder="Radius: "
        min={0}
        pattern="\d*"
        className="w-full"
        value={lat}
      />
      <h1>Longitude:</h1>
      <input
        type="number"
        placeholder="Radius: "
        min={0}
        pattern="\d*"
        className="w-full"
        value={lng}
      />
      <button
        className="w-full border rounded"
        style={{ backgroundColor: "#183044", color: "white" }}
        onClick={handleUpdate}
      >
        Update
      </button>
      <div className="flex flex-row">
        <button
          className="w-1/3 border rounded"
          style={{ backgroundColor: "#183044", color: "white" }}
          onClick={handleDelete}
        >
          Delete
        </button>
        <div className="w-1/3"></div>
        <button
          className="w-1/3 border rounded"
          style={{ backgroundColor: "#183044", color: "white" }}
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SideBar;
