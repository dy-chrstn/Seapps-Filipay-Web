// MapContainer.tsx
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer, Circle, InfoWindow } from '@react-google-maps/api';
import Modal from './Modal';
import Display from './display';
import SideBar from './SideBar';

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
    lat: 14.6760,
    lng: 121.0437
  };

  const [markers, setMarkers] = useState<{ id: number; position: { lat: number; lng: number }; radius: number | null }[]>([]);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [selectedMarkerId, setSelectedMarkerId] = useState<number | null>(null); // State to store the ID of the selected marker
  const [markerId, setMarkerId] = useState(0); // State to keep track of marker IDs
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<{ id: number; position: { lat: number; lng: number } } | null>(null);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [clickedPosition, setClickedPosition] = useState<{ lat: number; lng: number }>({ lat: 0, lng: 0 });
  const [markerDisplay, setMarkerDisplay] = useState<{ lat: number; lng: number }>({ lat: 0, lng: 0 });
  const [startingPin, setStartingPin] = useState<{ lat: number; lng: number } | null>(null);
  const [endingPin, setEndingPin] = useState<{ lat: number; lng: number } | null>(null);
  const [directions, setDirections] = useState<any>(null);

  useEffect(() => {
    // Fetch markers from JSON response
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3050/getMarkers');
        const data = await response.json();
        

        if (data.markers) {
          const formattedMarkers = data.markers.map((marker: MarkerData) => ({
            id: marker.km,
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

  const handleMapClick = () => {
    const newMarkerId = markerId; // Store the current marker ID
    const newMarker = { id: newMarkerId, position: clickedPosition, radius: 10 };
    setMarkers([...markers, newMarker]);
    setMarkerId(prevId => prevId + 1);
    setModalOpen(false);
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
      setClickedPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    }
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // const addStartPin = () => {
  //   setStartingPin(clickedPosition);
  //   setModalOpen(false);

  // }

  // const addEndPin = () => {
  //   setEndingPin(clickedPosition);
  //   setModalOpen(false);

  // }

  // const pinClick = (markerId: number, lat: number, lng: number) => {
  //   setMarkerDisplay({ lat: lat, lng: lng });
  //   const selected = markers.find(marker => marker.id === markerId);
  //   if (selected) {
  //     setSelectedMarker(selected);
  //   }
  // };

  const handleMarkerClick = (markerId: number, position: { lat: number; lng: number }) => {
    setSelectedMarker({ id: markerId, position });
  };

  const onMarkerDragEnd = (markerId: number, newPosition: { lat: number; lng: number }) => {
    const updatedMarkers = markers.map(marker => {
      if (marker.id === markerId) {
        return { ...marker, position: newPosition };
      }
      return marker;
    });
    setMarkers(updatedMarkers); // Updates the circle's center as well
    setMarkerDisplay(newPosition);
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

  const handleMarkerRightClick = (markerId: number) => {
    setSelectedMarkerId(markerId); // Set the selected marker ID
    setSideBarOpen(true); // Open the sidebar
  };

  const handleUpdateLabel = (newLabel: string) => {
    if (selectedMarkerId !== null) {
      setMarkers(prevMarkers =>
        prevMarkers.map(marker =>
          marker.id === selectedMarkerId ? { ...marker, label: newLabel } : marker
        )
      );
    }
  };

  const handleUpdateRadius = (newRadius: number | null) => {
    if (selectedMarkerId !== null) {
      setMarkers(prevMarkers => {
        return prevMarkers.map(marker => {
          if (marker.id === selectedMarkerId) {
            return { ...marker, radius: newRadius }; // Update the radius of the selected marker
          }
          return marker; // Return other markers unchanged
        });
      });
    }
  };

  const handleDeleteMarker = () => {
    if (selectedMarkerId !== null) {
      setMarkers(prevMarkers => prevMarkers.filter(marker => marker.id !== selectedMarkerId));
      setSelectedMarkerId(null); // Reset the selected marker ID after deletion
      setSideBarOpen(false); // Close the sidebar after deletion
    }
  };

  const handleInfoWindowClose = () => {
    setSelectedMarkerId(null);
  };

  return (
    <div className="relative">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_SOME_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={mapCenter}
          onClick={openModal}
          options={
            {
              streetViewControl: false,
              mapTypeControl: false,
            }
          }
        >
          <SideBar
            isOpen={sideBarOpen}
            onClose={() => setSideBarOpen(false)}
            onUpdateRadius={handleUpdateRadius}
            onUpdateLabel={handleUpdateLabel}
            onDeleteMarker={handleDeleteMarker}
            selectedMarkerId={selectedMarkerId}
          />
          {markers.map((marker) => (
            <React.Fragment key={marker.id}>
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
              <Circle
                key={marker.id + "circle"}
                center={marker.position}
                radius={marker.radius || undefined}
              />
            </React.Fragment>
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


          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div>
                <h2>Marker ID: {selectedMarker.id}</h2>
                <p>Latitude: {selectedMarker.position.lat}</p>
                <p>Longitude: {selectedMarker.position.lng}</p>
              </div>
            </InfoWindow>
          )}

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

          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
      <Modal isOpen={modalOpen} onClose={handleCloseModal} position={modalPosition} addNewPin={handleMapClick} />
      {/* addStartingPin={handleMapClick} addEndingPin={handleMapClick} */}
      <Display lat={markerDisplay.lat} lng={markerDisplay.lng} />
    </div>
  );
};

export default MapContainer;
