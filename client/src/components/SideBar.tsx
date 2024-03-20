// SideBar.tsx
import React, { useState } from 'react';

interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
    onUpdateRadius: (newRadius: number | null) => void;
    onUpdateLabel: (newLabel: string) => void;
    onDeleteMarker: () => void;
    selectedMarkerId: number | null;
}

const SideBar: React.FC<SideBarProps> = ({
    isOpen,
    onClose,
    onUpdateRadius,
    onUpdateLabel,
    onDeleteMarker,
    selectedMarkerId }) => {
    const [newRadius, setNewRadius] = useState(0);
    const [newLabel, setNewLabel] = useState("");

    const handleUpdate = () => {
        onUpdateRadius(newRadius);
        onUpdateLabel(newLabel);
        onClose();
    };

    const handleDelete = () => {
        onDeleteMarker();
        onUpdateRadius(0);
    };

    const handleLableChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setNewLabel(value);
    }

    const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        if (!isNaN(value)) {
            setNewRadius(value);
        }
    };

    return (
        <div className={isOpen ? "bg-white absolute mt-16 right-3 z-50 flex flex-col gap-2 w-200 p-4 border rounded shadow" : "hidden"}>
            <h1>Station: </h1>
            <input type="text" placeholder='Station name: ' min={0} pattern='\d*' className='w-full' onChange={handleLableChange} />
            <h1>Kilometer: </h1>
            <input type="text" value={"KM: " + selectedMarkerId?.toString()} min={0} pattern='\d*' className='w-full' onChange={handleLableChange} />
            <h1>Radius: </h1>
            <input type="number" placeholder='Radius: ' min={0} pattern='\d*' className='w-full' onChange={handleRadiusChange} />
            <button className='w-full border rounded' style={{ backgroundColor: '#183044', color: 'white' }} onClick={handleUpdate}>Update</button>
            <div className='flex flex-row'>
                <button className='w-1/3 border rounded' style={{ backgroundColor: '#183044', color: 'white' }} onClick={handleDelete}>Delete</button>
                <div className='w-1/3'></div>
                <button className='w-1/3 border rounded' style={{ backgroundColor: '#183044', color: 'white' }} onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default SideBar;
