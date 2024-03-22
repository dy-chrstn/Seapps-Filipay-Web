import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
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
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const defaultCenter = useMemo(
    () => ({
      lat: 14.6091,
      lng: 121.0223,
    }),
    []
  );

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapCenter, setMapcenter] = useState(defaultCenter);

  const [pin, setPin] = useState<
    {
      id: number;
      label: string;
      position: { lat: number; lng: number };
      radius: number;
    }[]
  >([]);
  // const [startingPin, setStartingPin] = useState<{ lat: number; lng: number } | null>(null);
  // const [endingPin, setEndingPin] = useState<{lat: number, lng: number}| null>(null);

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

  const AddNewPin = async () => {
    // console.log("AddNewPin")
    const coopId = "";
    const stationName = "";
    const km = pin.length + 1;
    const lat = clickPosition.lat.toString();
    const lng = clickPosition.lng.toString();
    const radius = 5;

    const newPin = {
      id: startingPin.length + 1,
      label: "Starting Pin",
      position: clickPosition,
      radius: 5,
    };

    setPin([...pin, newPin]);
    setModalOpen(false);

    try {
      const res = await axios.post("http://localhost:3050/registerMarker", {
        coopId: coopId,
        stationName: stationName,
        km: km,
        lat: lat,
        long: lng,
        radius: radius,
      });

      console.log("Marker added successfully: ", res.data);
    } catch (err) {
      console.log("Error adding marker: ", err);
    }
  };

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

  const closeModal = () => {
    // console.log("closeModal")
    setModalOpen(false);
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

  //enable routes from starting pin to ending pin
  // useEffect(() => {
  //   if (startingPin && endingPin) {
  //     if (window.google && window.google.maps) { // Check if google.maps is available
  //       const directionsService = new window.google.maps.DirectionsService();
  //       directionsService.route(
  //         {
  //           origin: startingPin,
  //           destination: endingPin,
  //           travelMode: window.google.maps.TravelMode.DRIVING,
  //           optimizeWaypoints: true
  //         },
  //         (result, status) => {
  //           if (status === window.google.maps.DirectionsStatus.OK) {
  //             setDirections(result);
  //           } else {
  //             console.error('Error fetching directions:', status);
  //           }
  //         }
  //       );
  //     } else {
  //       console.warn('Google Maps API is not fully loaded yet.');
  //     }
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

  const pinClick = (markerId: number, lat: number, lng: number) => {
    // console.log("markerId: " + markerId)
    // console.log("lat: " + lat)
    // console.log("lng: " + lng)

    setDisplay({ lat: lat, lng: lng });
  };

  const onLoadMap = () => {
    setMapLoaded(true);
  };

  useEffect(() => {
    // Simulating fetching pin data after map load
    if (mapLoaded) {
      // Fetch pin data here, and setPin with fetched data
      const mockPinData = [
        {
          id: 1,
          label: "",
          position: { lat: 14.418331431423372, lng: 121.04331822703718 },
          radius: 5,
        },
        // Add more pin data as needed
      ];
      setPin(mockPinData);
    }
  }, [mapLoaded]);

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
                    lat: pinItem.position.lat,
                    lng: pinItem.position.lng,
                  }}
                  animation={window.google.maps.Animation.DROP}
                />
                <Circle
                  center={{
                    lat: pinItem.position.lat,
                    lng: pinItem.position.lng,
                  }}
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
            startingPin={startingPin}
            endingPin={endingPin}
            pin={pin}
          />

          {markers.map((marker, index) => (
            <React.Fragment key={index}>
              <Marker
                position={{
                  lat: parseFloat(marker.lat),
                  lng: parseFloat(marker.long),
                }} // Ensure lat and lng are parsed as numbers
                draggable={true}
                animation={google.maps.Animation.DROP}
                onRightClick={() => {
                  pinClick(
                    marker.km,
                    parseFloat(marker.lat),
                    parseFloat(marker.long)
                  );
                  handleMarkerRightClick(
                    marker.km,
                    marker.stationName,
                    marker.radius
                  );
                  setDisplay({
                    lat: parseFloat(marker.lat),
                    lng: parseFloat(marker.long),
                  });
                }}
                // Add other properties as needed
              />

              {infoWindowOpen &&
                marker.km === marker.km + 1 &&
                label !== "Starting Pin" &&
                label !== "Ending Pin" && (
                  <InfoWindow
                    position={{
                      lat: parseFloat(marker.lat),
                      lng: parseFloat(marker.long),
                    }}
                    onCloseClick={handleInfoWindowClose}
                    options={{
                      maxWidth: 200,
                      //  pixelOffset: new window.google.maps.Size(0, -30)
                    }}
                  >
                    <div>
                      <p>
                        {marker.stationName === ""
                          ? "KM: " + (marker.km + 1)
                          : marker.stationName}
                      </p>
                    </div>
                  </InfoWindow>
                )}

              <Circle
                center={{
                  lat: parseFloat(marker.lat),
                  lng: parseFloat(marker.long),
                }} // Ensure lat and lng are parsed as numbers
                radius={marker.radius}
                // Add other properties as needed
              />
            </React.Fragment>
          ))}

          {/* {pin.map((pinItem, index) => (
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
          ))} */}

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

          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
      {/* <Display lat={display.lat} lng = {display.lng}></Display> */}
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
