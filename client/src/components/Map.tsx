// MapContainer.tsx
import React, { useState, useEffect, useMemo } from "react";
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
  const mapStyles = {
    height: '100vh',
    width: '100%'
  };

  const defaultCenter = {
    lat:  14.418331431423372, 
    lng: 121.04331822703718,
  };


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

  const [mapLoaded, setMapLoaded] = useState(false);
  const [markers, setMarkers] = useState<{ id: number; position: { lat: number; lng: number }; radius: number | null }[]>([]);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [selectedMarkerId, setSelectedMarkerId] = useState<number | null>(null); // State to store the ID of the selected marker
  const [markerId, setMarkerId] = useState(0); // State to keep track of marker IDs
  const [modalOpen, setModalOpen] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [markerDisplay, setMarkerDisplay] = useState<{ lat: number; lng: number }>({ lat: 0, lng: 0 });
  const [directions, setDirections] = useState<any>(null);
  const [selectedMarker, setSelectedMarker] = useState<{ id: number; position: { lat: number; lng: number } } | null>(null);
  const [chosenPin, setChosenPin] = useState<{ label: string }>({ label: "" });
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [label, setLabel] = useState("");
  const [clickPosition, setClickPosition] = useState({ lat: 0, lng: 0 });
  const [display, setDisplay] = useState({ lat: 0, lng: 0 });
  
  
  useEffect(() => {
    // Fetch markers from JSON response
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3050/getMarkers');
        const data = await response.json();
        if (data.markers) {
          const formattedMarkers = data.markers.map((marker: MarkerData) => ({
            id: marker._id,
            position: {
              lat: parseFloat(marker.lat),
              lng: parseFloat(marker.long)
            },
            radius: marker.radius
          }));
          setMarkers(formattedMarkers);
        }
      } catch (error) {
        console.error('Error fetching markers:', error);
      }
    };

    fetchData();
  }, []);

  // const handleMapClick = () => {

  //   const newMarkerId = markerId; // Store the current marker ID
  //   const newMarker = { id: newMarkerId, position: clickedPosition, radius: null };
  //   setMarkers([...markers, newMarker]);
  //   setMarkerId(prevId => prevId + 1);
  //   setModalOpen(false);
  // };

  const handleinfoWindow = (id: number, label: string) => {
    if (label === "Starting Pin") {
      setLabel(label);
      setSelectedMarkerId(id);
      setInfoWindowOpen(true);
    }

    if (label === "Ending Pin") {
      setLabel(label);
      setSelectedMarkerId(id);
      setInfoWindowOpen(true);
    }

    if (label !== "Starting Pin" && label !== "Ending Pin") {
      setLabel(label);
      setSelectedMarkerId(id);
    }
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
    //event.preventDefault();

    let { x, y } = event.domEvent;

    const modalWidth = 100
    const modalHeight = 300
    x = x + modalWidth
    //console.log("x: " + x)
    //console.log("window.innerWidth: " + window.innerWidth)
    if (x + modalWidth > window.innerWidth) {
      x = window.innerWidth - modalWidth - 50;
      //console.log("x: " + x)
    }

    if (x > 0) {
      x = x + modalWidth
    }

    // Check if the modal would exceed the bottom boundary of the screen
    if (y + modalHeight > window.innerHeight) {
      y = window.innerHeight - modalHeight;
      //console.log("y: " + y)
    }
    setModalPosition({ x, y });
    setModalOpen(true);


    const { latLng } = event;
    if (latLng) {
      setClickPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    }
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const AddNewPin = () => {
    // console.log("AddNewPin")
    const newPin = {
      id: pin.length + 1,
      label: "",
      position: clickPosition,
      radius: 5,
    };
    setPin([...pin, newPin]);
    setModalOpen(false);
  };

  const addStartPin = () => {
    // console.log("addStartPin")

    const newPin = {
      id: startingPin.length + 1,
      label: "Starting Pin",
      position: clickPosition,
      radius: 5,
    };
    setStartingPin([...startingPin, newPin]);
    setModalOpen(false);
    // setStartingPin(clickPosition);
    // setModalOpen(false);
  };

  const addEndPin = () => {
    // console.log("addEndPin")
    const newPin = {
      id: endingPin.length + 1,
      label: "Ending Pin",
      position: clickPosition,
      radius: 5,
    };
    setEndingPin([...endingPin, newPin]);
    setModalOpen(false);

    // setEndingPin(clickPosition);
    // setModalOpen(false);
  };

  const pinClick = (markerId: number, lat: number, lng: number) => {
    setDisplay({ lat: lat, lng: lng });
  };


  const onMarkerDragEnd = (markerId: number, newPosition: { lat: number; lng: number }) => {
    const updatedMarkers = markers.map(marker => {
      if (marker.id === markerId) {
        return { ...marker, position: newPosition };
      }
      return marker;
    });
    setMarkers(updatedMarkers); // Updates the circle's center as well
  };

  // useEffect(() => {
  //   if (endingPin && startingPin) { // Check if both endingPin and startingPin are not null
  //     const directionsService = new window.google.maps.DirectionsService();
  //     const origin = new window.google.maps.LatLng(startingPin.lat, startingPin.lng);
  //     const destination = new window.google.maps.LatLng(endingPin.lat, endingPin.lng);
  //     directionsService.route(
  //       {
  //         origin: origin,
  //         destination: destination,
  //         travelMode: window.google.maps.TravelMode.DRIVING,
  //         optimizeWaypoints: true
  //       },
  //       (result, status) => {
  //         if (status === window.google.maps.DirectionsStatus.OK) {
  //           setDirections(result);
  //         } else {
  //           console.error('Directions request failed due to ' + status);
  //         }
  //       }
  //     );
  //     setStartingPin(null);
  //     setEndingPin(null);
  //   }
  // }, [startingPin, endingPin]);

  const handleMarkerRightClick = (
    markerId: number,
    label: string,
    radius: number
  ) => {
    setSideBarOpen(true);
    setSelectedMarkerId(markerId); // Set the selected marker ID
    // console.log("HMRCLabel:", label)
    handleUpdateRadius(markerId, label, radius);
    setChosenPin({ label: label });
    // Open the sidebar
  };

  const handleUpdateRadius = (id: number, label: string, newRadius: number) => {
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


  const handleDeleteMarker = () => {
    if (selectedMarkerId !== null) {
      setPin((prevMarkers) =>
        prevMarkers.filter((marker) => marker.id !== selectedMarkerId)
      );
      setSelectedMarkerId(null); // Reset the selected marker ID after deletion
      setSideBarOpen(false); // Close the sidebar after deletion
    }
  };

  const dragMarker = (
    markerId: number,
    label: string,
    newPosition: { lat: number; lng: number }
  ) => {
    if (label !== "Starting Pin" && label !== "Ending Pin") {
      const updatedMarkers = pin.map((marker) => {
        if (marker.id === markerId) {
          return { ...marker, position: newPosition };
        }
        return marker;
      });

      setPin(updatedMarkers);
    }

    if (label === "Starting Pin") {
      const updatedMarkers = startingPin.map((marker) => {
        if (marker.id === markerId) {
          return { ...marker, position: newPosition };
        }
        return marker;
      });

      setStartingPin(updatedMarkers);
    }

    if (label === "Ending Pin") {
      const updatedMarkers = endingPin.map((marker) => {
        if (marker.id === markerId) {
          return { ...marker, position: newPosition };
        }
        return marker;
      });

      setEndingPin(updatedMarkers);
    }
    setDisplay({ lat: newPosition.lat, lng: newPosition.lng });
  };
  const onLoadMap = () => {
    setMapLoaded(true);
  };

  useEffect(() => {
    // Simulating fetching pin data after map load
    if (mapLoaded) {
      // Fetch pin data here, and setPin with fetched data
      const mockPinData = [
        { id: 1, label: "", position: { lat: 14.418331431423372, lng: 121.04331822703718 }, radius: 5 },
        // Add more pin data as needed
      ];
      setPin(mockPinData);
    }
  }, [mapLoaded]);

  return (
    <div>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} onLoad={onLoadMap}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={17}
          center={mapCenter}
          onClick={openModal}
          options={
            {
              streetViewControl: false,
              mapTypeControl: false,
            }
          }
        >
          {mapLoaded && pin.map((pinItem, index) => (
          <React.Fragment key={index}>
            <Marker
              position={{ lat: pinItem.position.lat, lng: pinItem.position.lng }}
              animation={window.google.maps.Animation.DROP}
            />
            <Circle 
              center={{ lat: pinItem.position.lat, lng: pinItem.position.lng }} 
              radius={pinItem.radius} 
            />
          </React.Fragment>
        ))}
          <SideBar
            isOpen={sideBarOpen}
            onClose={() => setSideBarOpen(false)}
            onUpdateRadius={(id, label, newRadius) =>
              handleUpdateRadius(id, label, newRadius)
            }
            onUpdateLabel={handleUpdateLabel}
            onDeleteMarker={handleDeleteMarker}
            selectedMarkerId={selectedMarkerId}
            display={display}
            chosenPin={chosenPin}
            startingPin={startingPin} // Pass starting pins
            endingPin={endingPin}
            pin={pin}
          />
          {pin.map((pinItem, index) => (
            <>
              <Marker
                key={index}
                position={{
                  lat: pinItem.position.lat,
                  lng: pinItem.position.lng,
                }}
                draggable={true}
                animation={google.maps.Animation.DROP}
                onRightClick={() => {
                  // console.log('rightClickMarker')
                  // console.log('pinId: ', pinItem.id)
                  pinClick(
                    index + 1,
                    pinItem.position.lat,
                    pinItem.position.lng
                  );
                  handleMarkerRightClick(
                    index + 1,
                    pinItem.label,
                    pinItem.radius
                  );
                  setDisplay(pinItem.position);
                }}
                onClick={() => {
                  setInfoWindowOpen(true);
                  handleMarkerClick(index + 1, pinItem.label);
                  handleinfoWindow(index + 1, pinItem.label);
                }}
                onDrag={(e) => {
                  if (e.latLng) {
                    dragMarker(index + 1, pinItem.label, {
                      lat: e.latLng.lat(),
                      lng: e.latLng.lng(),
                    });
                  }
                }}
              >
                {infoWindowOpen &&
                  selectedMarkerId === index + 1 &&
                  label !== "Starting Pin" &&
                  label !== "Ending Pin" && (
                    <InfoWindow
                      position={pinItem.position}
                      onCloseClick={handleInfoWindowClose}
                      options={{
                        maxWidth: 200,
                        //  pixelOffset: new window.google.maps.Size(0, -30)
                      }}
                    >
                      <div>
                        <p>
                          {pinItem.label === ""
                            ? "KM: " + (index + 1)
                            : pinItem.label}
                        </p>
                      </div>
                    </InfoWindow>
                  )}
              </Marker>

              <Circle
                center={{
                  lat: pinItem.position.lat,
                  lng: pinItem.position.lng,
                }}
                radius={pinItem.radius}
              />
            </>
          ))}

            {startingPin.map((startingPinItem, index) => (
            <>
              <Marker
                key={index}
                position={startingPinItem.position}
                draggable={true}
                animation={google.maps.Animation.DROP}
                onRightClick={() => {
                  // console.log('rightClickMarker')
                  pinClick(
                    index + 1,
                    startingPinItem.position.lat,
                    startingPinItem.position.lng
                  );
                  handleMarkerRightClick(
                    startingPinItem.id,
                    "Starting Pin",
                    startingPinItem.radius
                  );
                  setDisplay(startingPinItem.position);
                }}
                onClick={() => {
                  setInfoWindowOpen(true);
                  setSelectedMarkerId(index + 1);
                  handleMarkerClick(index + 1, "Starting Pin");
                  handleinfoWindow(index + 1, "Starting Pin");
                }}
                onDrag={(e) => {
                  if (e.latLng) {
                    dragMarker(index + 1, startingPinItem.label, {
                      lat: e.latLng.lat(),
                      lng: e.latLng.lng(),
                    });
                  }
                }}
              >
                {infoWindowOpen &&
                  selectedMarkerId === index + 1 &&
                  label === "Starting Pin" && (
                    <InfoWindow
                      position={startingPinItem.position}
                      onCloseClick={handleInfoWindowClose}
                      options={{
                        maxWidth: 200,
                        //  pixelOffset: new window.google.maps.Size(0, -30)
                      }}
                    >
                      <div>
                        <p>{startingPinItem.label}</p>
                      </div>
                    </InfoWindow>
                  )}
              </Marker>
              <Circle
                center={startingPinItem.position}
                radius={startingPinItem.radius}
              />
            </>
          ))}

          {endingPin.map((pinItem, index) => (
            <>
              <Marker
                key={index}
                position={pinItem.position}
                draggable={true}
                animation={google.maps.Animation.DROP}
                onRightClick={() => {
                  // console.log('rightClickMarker')
                  pinClick(
                    index + 1,
                    pinItem.position.lat,
                    pinItem.position.lng
                  );
                  handleMarkerRightClick(
                    pinItem.id,
                    "Ending Pin",
                    pinItem.radius
                  );
                  setDisplay(pinItem.position);
                }}
                onClick={() => {
                  setInfoWindowOpen(true);
                  handleMarkerClick(index + 1, "Ending Pin");
                  handleinfoWindow(index + 1, "Ending Pin");
                }}
                onDrag={(e) => {
                  if (e.latLng) {
                    dragMarker(index + 1, pinItem.label, {
                      lat: e.latLng.lat(),
                      lng: e.latLng.lng(),
                    });
                  }
                }}
              >
                {infoWindowOpen &&
                  selectedMarkerId === index + 1 &&
                  label === "Ending Pin" && (
                    <InfoWindow
                      position={pinItem.position}
                      onCloseClick={handleInfoWindowClose}
                      options={{
                        maxWidth: 200,
                        //  pixelOffset: new window.google.maps.Size(0, -30)
                      }}
                    >
                      <div>
                        <p>{pinItem.label}</p>
                      </div>
                    </InfoWindow>
                  )}
              </Marker>
              <Circle center={pinItem.position} radius={pinItem.radius} />
            </>
          ))}



          {/* {markers.map((marker) => (
  <React.Fragment key={marker.id}>
    {marker.radius === null ? (
      <Marker
        position={marker.position}
        animation={google.maps.Animation.DROP}
        onRightClick={() => handleMarkerRightClick(marker.id)}
        onClick={() => handleMarkerClick(marker.id, marker.position)}
        draggable={true}
        onDrag={(e) => {
          if (e.latLng) {
            onMarkerDragEnd(marker.id, { lat: e.latLng.lat(), lng: e.latLng.lng() });
          }
        }}
      />
    ) : (
      <Circle
        key={marker.id + "circle"}
        center={marker.position}
        radius={marker.radius}
      />
    )}
  </React.Fragment>
))} */}
          {/* {startingPin && (
            <>
              <Marker
                position={startingPin}
                animation={google.maps.Animation.DROP}
              // onClick={() => deletePin(startingPin.id, startingPin.position.lat, startingPin.position.lng )}
              />
            </>
          )}
          {endingPin && (
            <Marker
              position={endingPin}
              animation={google.maps.Animation.DROP}
            // onClick={() => deletePin(endingPin.id, endingPin.position.lat, endingPin.position.lng )}
            />
          )} */}

          {/* {directions && <DirectionsRenderer directions={directions} />} */}
        </GoogleMap>
      </LoadScript>
       <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        position={modalPosition}
        addNewPin={AddNewPin}
        addStartingPin={addStartPin}
        addEndingPin={addEndPin}
      />
      {/* addStartingPin={handleMapClick} addEndingPin={handleMapClick} */}
      {/* <Display lat={markerDisplay.lat} lng={markerDisplay.lng} /> */}
    </div>
  );
};

export default MapContainer;
