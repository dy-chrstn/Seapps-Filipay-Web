import React, { useState, useEffect} from "react";
import axios from "axios";
import io from 'socket.io-client';
import {
  GoogleMap,
  LoadScript,
  Marker,
  Circle,
  DirectionsRenderer,
  InfoWindow,
} from "@react-google-maps/api";
// import Display from './display'
import Modal from "./Modal";
import SideBar from "./SideBar";

interface MarkerData {
  _id: string;
  coopId: string;
  stationName: string;
  km: number;
  radius: number;
  lat: string;
  long: string;
}

const MapContainer: React.FC = () => {
  const defaultCenter = {
    lat:  14.418331431423372, 
    lng: 121.04331822703718,
  };


  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const [mapLoaded, setMapLoaded] = useState(false);
  const [markerLoaded, setMarkerLoaded] = useState(false)
  const [mapCenter, setMapcenter] = useState(defaultCenter);

  const [pin, setPin] = useState<
    {
      id: number;
      label: string;
      position: { lat: number; lng: number };
      radius: number;
    }[]
  >([]);

  const [startingPin, setStartingPin] = useState<
    {
      id: number;
      label: string;
      position: { lat: number; lng: number };
      radius: number;
    }[]
  >([]);
  const [endingPin, setEndingPin] = useState<
    {
      id: number;
      label: string;
      position: { lat: number; lng: number };
      radius: number;
    }[]
  >([]);

  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

  const [clickPosition, setClickPosition] = useState({ lat: 0, lng: 0 });
  const [display, setDisplay] = useState({ lat: 0, lng: 0 });

  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [modalOpen, setModalOpen] = useState(false);

  const [directions, setDirections] = useState<any>(null);

  const [selectedMarkerId, setSelectedMarkerId] = useState<number | null>(null); // State to store the ID of the selected marker
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const [chosenPin, setChosenPin] = useState<{ label: string }>({ label: "" });

  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const [label, setLabel] = useState("");


  const handleinfoWindow = (id: number, label: string) => {
      setLabel(label);
      setSelectedMarkerId(id);
      setInfoWindowOpen(true);
  
  };
  const handleMarkerClick = (id: number, label: string) => {
    if (label !== "Starting Pin" && label !== "Ending Pin") {
      if (label === "") {
        // console.log("print label: ", label)
        const idString = id.toString();
        setChosenPin({ label: "KM: " + idString });
      } else {
        setChosenPin({ label });
      }
    }

    if (label === "Starting Pin") {
      // setInfoWindowOpen(true)
      // console.log("print label: ", label)
      setChosenPin({ label });
    }

    if (label === "Ending Pin") {
      // console.log("print label: ", label)
      setChosenPin({ label });
    }
  };

  const handleInfoWindowClose = () => {
    setInfoWindowOpen(false);
  };

  const openModal = (event: any) => {
    // if(modalOpen !== true){
    //   return null
    // }

    let { x, y } = event.domEvent;

    // const modalWidth = 100
    // const modalHeight = 300
    // x = x + modalWidth
    // //console.log("x: " + x)
    // //console.log("window.innerWidth: " + window.innerWidth)
    // if (x + modalWidth > window.innerWidth) {
    //   x = window.innerWidth - modalWidth;
    //   //console.log("x: " + x)
    //  }

    // if (x > 0) {
    //   x = x + modalWidth
    // }

    // // Check if the modal would exceed the bottom boundary of the screen
    // if (y + modalHeight > window.innerHeight) {
    //   y = window.innerHeight - modalHeight;
    //   //console.log("y: " + y)
    // }
    setModalPosition({ x, y });
    setModalOpen(true);
    const { latLng } = event;
    if (latLng) {
      // console.log("click")
      setClickPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    }
  };

  //adding pin and storing it to db
  const AddNewPin = async () => {
    const coopId = "";
    const stationName = "";
    const km = pin.length + 1;
    const lat = clickPosition.lat.toString();
    const lng = clickPosition.lng.toString();
    const radius = 5;

    const newPin = {
      id: pin.length + 1,
      label: "",
      position: clickPosition,
      radius: 5,
    };


    try {
      const res = await axios.post("http://localhost:3050/registerMarker", {
        coopId: coopId,
        stationName: stationName,
        km: km,
        lat: lat,
        long: lng,
        radius: radius,
      });

      console.log("Marker added successfully: ", res.data.marker);

      // Update markers state synchronously after successful addition
      // setPin([...pin, newPin]);
      setMarkers([...markers, res.data.marker]);
      setPin([...pin, newPin]);
      setModalOpen(false);
    } catch (err) {
      console.log("Error adding marker: ", err);
    }
  };

  //reading markers from db
  useEffect(() => {
    // Fetch markers from the server when the component mounts
    axios
      .get<{ code: number; message: string; markers: MarkerData[] }>(
        "http://localhost:3050/getMarkers"
      )
      .then((response) => {
        if (response.data.code === 0) {
          // Check if the response is successful
          setMarkers(response.data.markers); // Set the fetched markers into the state
        } else {
          console.error("Error fetching markers:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching markers:", error);
      });
  }, []);

  //deleting marker from db
  const handleDeleteMarker = async () => {
    if (selectedMarker !== null) {
      try {
        const res = await axios.delete(
          `http://localhost:3050/deleteMarker/${selectedMarker._id}`
        );
        setSelectedMarker(null); // Clear selected marker after deletion
        // Close the sidebar after deletion
        if (res.status === 200) {
          setMarkers(
            markers.filter((marker) => marker._id !== selectedMarker._id)
          );
          console.log("Marker deleted successfully: ", res.data);
        }
      } catch (err) {
        console.log(err);
      }

      setSideBarOpen(false);
    }
  };

  const handleMarkerRightClick = (marker: MarkerData) => {
    setSelectedMarker(marker);
    setSideBarOpen(true);
  };

  const addStartPin = async () => {
    // console.log("addStartPin")


    // setStartingPin([...startingPin, newPin]);
    // setModalOpen(false);
    // // setStartingPin(clickPosition);
    // // setModalOpen(false);

    const coopId = "";
    const stationName = "Starting Pin";
    const km = pin.length + 1;
    const lat = clickPosition.lat.toString();
    const lng = clickPosition.lng.toString();
    const radius = 5;

        const newPin = {
      id: pin.length + 1,
      label: "Starting Pin",
      position: clickPosition,
      radius: 5,
    };

    try {
      const res = await axios.post("http://localhost:3050/registerMarker", {
        coopId: coopId,
        stationName: stationName,
        km: km,
        lat: lat,
        long: lng,
        radius: radius,
      });

      console.log("Marker added successfully: ", res.data.marker);

      // Update markers state synchronously after successful addition
      // setPin([...pin, newPin]);
      setMarkers([...markers, res.data.marker]);
      setPin([...pin, newPin]);
      setModalOpen(false);
    } catch (err) {
      console.log("Error adding marker: ", err);
    }
  };

  const addEndPin = async () => {
    // setEndingPin([...endingPin, newPin]);
    // setModalOpen(false);
  
    const coopId = "";
    const stationName = "Ending Pin";
    const km = pin.length + 1;
    const lat = clickPosition.lat.toString();
    const lng = clickPosition.lng.toString();
    const radius = 5;

    const newPin = {
      id: pin.length + 1,
      label: "Ending Pin",
      position: clickPosition,
      radius: 5,
    };

    try {
      const res = await axios.post("http://localhost:3050/registerMarker", {
        coopId: coopId,
        stationName: stationName,
        km: km,
        lat: lat,
        long: lng,
        radius: radius,
      });

      console.log("Marker added successfully: ", res.data.marker);

      // Update markers state synchronously after successful addition
      // setPin([...pin, newPin]);
      setMarkers([...markers, res.data.marker]);
      setPin([...pin, newPin]);
      setModalOpen(false);
    } catch (err) {
      console.log("Error adding marker: ", err);
    }
    // console.log("addEndPin")
    // const newPin = {
    //   id: endingPin.length + 1,
    //   label: "Ending Pin",
    //   position: clickPosition,
    //   radius: 5,
    // };
    // setEndingPin([...endingPin, newPin]);
    // setModalOpen(false);

    // setEndingPin(clickPosition);
    // setModalOpen(false);
  };

  const closeModal = () => {
    // console.log("closeModal")
    setModalOpen(false);
  };

    // useEffect(() => {
    //   // Connect to the WebSocket server
    //   // console.log('tes:');
    //   const socket = io('http://localhost:3050');

    //   // Handle marker position updates received from the server
    //   socket.on('markerPositionUpdated', (data) => {
    //     // console.log('Received marker position update:', data);
    //   });

    //   return () => {
    //     // Clean up: disconnect from the WebSocket server when the component unmounts
    //     socket.disconnect();
    //   };
    // }, []);

  const dragMarker = (
    markerId: number,
    label: string,
    newPosition: { lat: number; lng: number }
  ) => {
    
    if (label !== "Starting Pin" && label !== "Ending Pin") {
      const updatedMarkers = pin.map((marker) => {
        if (marker.id === markerId) {
          // console.log("Normal Pin FE")
          return { ...marker, position: newPosition };
        }
        return marker;
      });

      setPin(updatedMarkers);
    }

    if (label === "Starting Pin") {
      const updatedMarkers = startingPin.map((marker) => {
        // console.log("markerid: ",  markerId)
        if (marker.id === markerId) {
          // const socket = io('http://localhost:3050');
          // console.log("Starting Pin FE")
          // console.log("markerid: ",  markerId)
          return { ...marker, position: newPosition };
        }
        return marker;
      });

      setStartingPin(updatedMarkers);
    }

    if (label === "Ending Pin") {
      const updatedMarkers = endingPin.map((marker) => {
        if (marker.id === markerId) {
          // const socket = io('http://localhost:3050');
          // console.log("Ending Pin FE")
          return { ...marker, position: newPosition };
        }
        return marker;
      });

      setEndingPin(updatedMarkers);
    }

   
    setDisplay({ lat: newPosition.lat, lng: newPosition.lng });
  };

  const handleUpdateRadius = (id: number, label: string, newRadius: number) => {
    setMarkers(markers.filter((marker) => marker._id !== selectedMarker?._id));
    // console.log("HURLabel:", label)
    // console.log("Radius:", newRadius)
    if (id !== null) {
      if (label === "Starting Pin") {
        // console.log("SNewradius: ", newRadius)
        // console.log("LabelHUR: ", label)
        setStartingPin((prevMarkers) =>
          prevMarkers.map((marker) =>
            marker.id === id
              ? { ...marker, label: label, radius: newRadius }
              : marker
          )
        );
      }
      if (label === "Ending Pin") {
        // console.log("ENewradius: ", newRadius)
        // console.log("LabelHUR: ", label)
        setEndingPin((prevMarkers) =>
          prevMarkers.map((marker) =>
            marker.id === id
              ? { ...marker, label: label, radius: newRadius }
              : marker
          )
        );
      }
      if (label !== "Starting Pin" && label !== "Ending Pin") {
        // console.log("PNewradius: ", newRadius)
        // console.log("LabelHUR: ", label)
        setPin((prevMarkers) =>
          prevMarkers.map((marker) =>
            marker.id === id
              ? { ...marker, label: label, radius: newRadius }
              : marker
          )
        );
      }
    }
  };

  const handleUpdateInfo = (
    newStation: string | undefined,
    newKm: number | undefined,
    newRadius: number | undefined
  ) => {
    setMarkers((prevMarkers) => {
      return prevMarkers.map((marker) => {
        if (marker._id === selectedMarker?._id) {
          return {
            ...marker,
            stationName: newStation || marker.stationName,
            km: newKm || marker.km,
            radius: newRadius !== undefined ? newRadius : marker.radius,
          };
        } else {
          return marker;
        }
      });
    });

    setPin((prevPin) => {
      return prevPin.map((pinItem) => {
        if (pinItem.id === selectedMarkerId) {
          return {
            ...pinItem,
            radius: newRadius !== undefined ? newRadius : pinItem.radius,
          };
        } else {
          return pinItem;
        }
      });
    });
  };

  const handleMarkerDrag = (e: any, index: number) => {
    const newMarkers = [...markers]; // Create a copy of the markers array
    newMarkers[index].lat = e.latLng.lat(); // Update marker's latitude
    newMarkers[index].long = e.latLng.lng(); // Update marker's longitude
    // Calculate new radius if needed
    // For example, you might want to set a new radius based on the distance from a fixed point or another marker
    // Update the state with the new markers array
    setMarkers(newMarkers);
    setDisplay({lat: e.latLng.lat(), lng: e.latLng.lng()})
  };

  const handleMarkerDragEnd = async (e: any, markerId: string) => {
    try {
      const res = await axios.patch(
        `http://localhost:3050/updateMarkerById/${markerId}`,
        {
          lat: e.latLng.lat().toString(),
          long: e.latLng.lng().toString(),
        }
      );

      if (res.status === 200) {
        console.log("Update marker successfully: ", res.data);
      } else {
        console.log("Update marker failed: ", res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateLabel = (newLabel: string) => {
    if (selectedMarkerId !== null) {
      if (newLabel === "Starting Pin") {
        setStartingPin((prevMarkers) =>
          prevMarkers.map((marker) =>
            marker.id === selectedMarkerId
              ? { ...marker, label: newLabel }
              : marker
          )
        );
      }
      if (newLabel === "Ending Pin") {
        setEndingPin((prevMarkers) =>
          prevMarkers.map((marker) =>
            marker.id === selectedMarkerId
              ? { ...marker, label: newLabel }
              : marker
          )
        );
      }
      if (newLabel !== "Starting Pin" && newLabel !== "Ending Pin") {
        // console.log("newLabel sa MAp: ", newLabel)
        setPin((prevMarkers) =>
          prevMarkers.map((marker) =>
            marker.id === selectedMarkerId
              ? { ...marker, label: newLabel }
              : marker
          )
        );
      }
    }
  };

  const pinClick = (markerId: number, lat: number, lng: number) => {
    // console.log("markerId: " + markerId)
    // console.log("lat: " + lat)
    // console.log("lng: " + lng)

    setDisplay({ lat: lat, lng: lng });
  };

  const onLoadMap = () => {
    setMapLoaded(true);
  };

  return (
    <>
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        onLoad={onLoadMap}
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={17}
          center={mapCenter}
          onClick={openModal}
        >
          {mapLoaded &&
            pin.map((pinItem, index) => (
              <React.Fragment key={index}>
                <Marker
                  position={{
                    lat: 14.418331431423372,
                    lng: 121.04331822703718,
                  }}
                  animation={window.google.maps.Animation.DROP}
                />
                <Circle
                  center={{
                    lat: 14.418331431423372,
                    lng: 121.04331822703718,
                  }}
                  radius={5}
                />
              </React.Fragment>
            ))}
          <SideBar
            isOpen={sideBarOpen}
            onClose={() => setSideBarOpen(false)}
            onDeleteMarker={handleDeleteMarker}
            display={display}
            marker={selectedMarker}
            handleUpdateInfo={handleUpdateInfo}
          />

          {/* {pin.map((marker, index) => ( */}
          {mapLoaded && markers.map((marker, index) => (
            <React.Fragment key={index}>
              <Marker
                key={marker._id}
                position={{
                  lat: parseFloat(marker.lat),
                  lng: parseFloat(marker.long),
                }} // Ensure lat and lng are parsed as numbers
                draggable={true}
                onDrag={(e) => handleMarkerDrag(e, index)}
                onDragEnd={(e) => handleMarkerDragEnd(e, marker._id)}
                animation={google.maps.Animation.DROP}
                onRightClick={() => {
                  pinClick(
                    marker.km,
                    parseFloat(marker.lat),
                    parseFloat(marker.long),
                  );
                  handleMarkerRightClick(
                    marker,
                  );
                  setDisplay({lat: parseFloat(marker.lat), lng: parseFloat(marker.long)});
                }}

                onClick={() => {
                  setInfoWindowOpen(true)
                  setSelectedMarkerId(index+1)
                  handleMarkerClick(index + 1, marker.stationName)
                  handleinfoWindow(index + 1, marker.stationName)
                  handleMarkerRightClick(marker);
                  setDisplay({
                    lat: parseFloat(marker.lat),
                    lng: parseFloat(marker.long),
                  });
                }}
                // Add other properties as needed
              />
              {infoWindowOpen &&
                selectedMarkerId === index + 1 &&(
                  <InfoWindow
                  position={{lat: parseFloat(marker.lat), lng: parseFloat(marker.long)}}
                    onCloseClick={handleInfoWindowClose}
                    options={{
                      maxWidth: 200,
                      pixelOffset: new window.google.maps.Size(0, -30)
                    }}
                  >
                    <div>
                      <p>
                        {marker.stationName === ""
                          ? "KM: " + marker.km
                          : marker.stationName}
                      </p>
                    </div>
                  </InfoWindow>
                )}
              <Circle
               center={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.long )}} // Ensure lat and lng are parsed as numbers
                radius={marker.radius}
                // Add other properties as needed
              />
            </React.Fragment>
          ))};
          {/* {startingPin && 
            <>
             <Marker 
                position={startingPin} 
                animation={google.maps.Animation.DROP}
              />
              <Circle 
              center={startingPin} 
              radius = {5} 
              />
            </> */}
          {/* {endingPin && 
            <>
              <Marker 
                position={endingPin} 
                animation={google.maps.Animation.DROP}
                />
                <Circle 
                center={endingPin} 
                radius = {5} 
                />
            </>
             
            } */}
          {/* {directions && <DirectionsRenderer directions={directions} />} */}
        </GoogleMap>
      </LoadScript>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        position={modalPosition}
        addNewPin={AddNewPin}
        addStartingPin={addStartPin}
        addEndingPin={addEndPin}
      />
    </>
  );
};

export default MapContainer;
