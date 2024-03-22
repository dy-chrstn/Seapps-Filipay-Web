import React, { useState, useEffect } from 'react';

interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
    onUpdateRadius: (id: number, label: string, newRadius: number) => void;
    onUpdateLabel: (newLabel: string) => void;
    onDeleteMarker: () => void;
    selectedMarkerId: number | null;
    display: {lat: number, lng: number};
    chosenPin: {label: string }
    startingPin: { id: number; label: string, position: { lat: number; lng: number }; radius: number }[];
    endingPin: { id: number; label: string, position: { lat: number; lng: number }; radius: number }[];
    pin: { id: number; label: string, position: { lat: number; lng: number }; radius: number }[];
}

const SideBar: React.FC<SideBarProps> = ({
    isOpen,
    onClose,
    onUpdateRadius,
    onUpdateLabel,
    onDeleteMarker,
    selectedMarkerId,
    display,
    chosenPin,
    startingPin,
    endingPin,
    pin
}) => {
    const [newRadius, setNewRadius] = useState('5');
    const [newLabel, setNewLabel] = useState<{ label: string }>({ label: "" });
    const [pinId, setPinId] = useState("");

    let pinLabel = chosenPin.label;
    // console.log("label: ", pinLabel)
    
    const lat = display.lat.toString()
    const lng = display.lng.toString()
    

    //const [pin, setPin] = useState<{ id: number; label: string; position: { lat: number; lng: number }; radius: number }[]>([]);

    //console.log("pin: ",pin)
        
    useEffect(() => {
        // console.log("running Effect")
        setNewLabel({label: pinLabel})
        if (selectedMarkerId !== null) {
            if(pinLabel === "Starting Pin"){
                const marker = startingPin.find(marker => marker.id === selectedMarkerId);
           
                if (marker) {
                  
                    setNewRadius(marker.radius.toString());
                    setPinId(marker.id.toString())
                } else {
                    setNewRadius('5'); // Set default value if marker not found
                }
            }

            if(pinLabel === "Ending Pin"){
                const marker = endingPin.find(marker => marker.id === selectedMarkerId);
           
                if (marker) {
                    
                    setNewRadius(marker.radius.toString());
                    setPinId(marker.id.toString())
        
                } else {
                    setNewRadius('5'); // Set default value if marker not found
                }
            }

            if(pinLabel !== "Starting Pin" && pinLabel !== "Ending Pin"){
                const marker = pin.find(marker => marker.id === selectedMarkerId);
           
                if (marker) {
                    // console.log("marker.Label: ", marker.label)
                    setNewRadius(marker.radius.toString());
                    setPinId(marker.id.toString())
                    
                } else {
                    setNewRadius('5'); // Set default value if marker not found
                }
            }
         
        }
    }, [selectedMarkerId, pin, startingPin, endingPin]);

    const handleUpdate = () => {
        
        //console.log("HUnewLabel:", newLabel)
        if(selectedMarkerId)
        setPinId(selectedMarkerId.toString())
        onUpdateRadius(selectedMarkerId || 0, newLabel.label, parseFloat(newRadius));
       // console.log("newRadius:", newRadius)
        onUpdateLabel(newLabel.label);
        onClose();
    };

    const handleDelete = () => {
        onDeleteMarker();
        onUpdateRadius(0, "", 0);
    };

    const handleLabelChange = (event: any) => {
        const value = event.target.value;
        if (!isNaN(value) || value !== '') {
            setNewLabel({ label: value });      
        }
        
    }

    const handleRadiusChange = (event:any ) => {
        const value = event.target.value;
        if (!isNaN(value) || value !== '') {
            setNewRadius(value);
        }
    };

    return (
        <div className={isOpen ? "bg-white absolute mt-16 right-3 z-50 flex flex-col gap-2 w-200 p-4 border rounded shadow" : "hidden"}>
            <h1>Station: </h1>
            <input type="text" placeholder='Station name: ' pattern='\d*' className='w-full'  

            onChange={
                pinLabel !== "Starting Pin" && pinLabel !== "Ending Pin" 
                ? handleLabelChange 
                : undefined
            } 
            
            value = {newLabel.label}/>
            <h1>Kilometer:</h1>
            <input type="text" value={"KM: " + pinId} min={0} pattern='\d*' className='w-full' />
            <h1>Radius:</h1>
            <input type="number" placeholder='Radius: ' min={0} pattern='\d*' className='w-full' onChange={handleRadiusChange} value={newRadius} />
            <h1>Latitude:</h1>
            <input type="number" placeholder='Radius: ' min={0} pattern='\d*' className='w-full' value={lat} />
            <h1>Longitude:</h1>
            <input type="number" placeholder='Radius: ' min={0} pattern='\d*' className='w-full' value={lng} />
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