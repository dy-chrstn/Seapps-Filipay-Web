import React, { useState, useEffect} from "react";
import axios from "axios";
import io from 'socket.io-client';
import {
  GoogleMap,
  LoadScript,
  Marker,
  Circle,
  InfoWindow,
} from "@react-google-maps/api";

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

  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState({ lat: 0, lng: 0 });
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [display, setDisplay] = useState({ lat: 0, lng: 0 });
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const handleInfoWindowClose = () => {
    setInfoWindowOpen(false);
  };

  const openModal = (event: any) => {
    let { x, y } = event.domEvent;

    setModalPosition({ x, y });
    setModalOpen(true);
    const { latLng } = event;
    if (latLng) {
      setClickPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const AddNewPin = async (pinType: string) => {
    const coopId = "";
    const stationName = pinType;
    const km = markers.length + 1;
    const lat = clickPosition.lat.toString();
    const lng = clickPosition.lng.toString();
    const radius = 5;

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
  };

  const handleMarkerDrag = (e: any, index: number) => {
    const newMarkers = [...markers];
    newMarkers[index].lat = e.latLng.lat();
    newMarkers[index].long = e.latLng.lng();

    setMarkers(newMarkers);
    setDisplay({ lat: e.latLng.lat(), lng: e.latLng.lng() });
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

  const handleMarkerClick = (marker: MarkerData) => {
    setSelectedMarker(marker);

    setInfoWindowOpen(true);
  };

  const pinClick = (markerId: number, lat: number, lng: number) => {
    setDisplay({ lat: lat, lng: lng });
  };

  return (
    <>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={defaultCenter}
          onClick={openModal}
        >
          <SideBar
            isOpen={sideBarOpen}
            onClose={() => setSideBarOpen(false)}
            onDeleteMarker={handleDeleteMarker}
            display={display}
            marker={selectedMarker}
            handleUpdateInfo={handleUpdateInfo}
          />
          {markers.map((marker, index) => (
            <React.Fragment key={index}>
              <Marker
                key={marker._id}
                position={{
                  lat: parseFloat(marker.lat),
                  lng: parseFloat(marker.long),
                }}
                draggable={true}
                onDrag={(e) => handleMarkerDrag(e, index)}
                onDragEnd={(e) => handleMarkerDragEnd(e, marker._id)}
                onClick={() => handleMarkerClick(marker)}
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
              />
              {selectedMarker && selectedMarker._id === marker._id && (
                <InfoWindow
                  position={{
                    lat: parseFloat(marker.lat),
                    lng: parseFloat(marker.long),
                  }}
                  onCloseClick={handleInfoWindowClose}
                  options={{
                    maxWidth: 200,
                    pixelOffset: new window.google.maps.Size(0, -30),
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
                center={{
                  lat: parseFloat(marker.lat),
                  lng: parseFloat(marker.long),
                }}
                radius={marker.radius}
              />
            </React.Fragment>
          ))}
          ;
        </GoogleMap>
      </LoadScript>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        position={modalPosition}
        addNewPin={AddNewPin}
      />
    </>
  );
};

export default MapContainer;
