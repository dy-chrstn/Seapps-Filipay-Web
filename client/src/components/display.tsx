import React from 'react';

interface DisplayProps {
    lat: number;
    lng: number;
  }


const Display: React.FC<DisplayProps> = ({lat, lng }) => {
    return (
      <div className = "absolute top-20 left-5 bg-white">
        <h1>Current Location</h1>
        <div>{lat}</div>
        <div>{lng}</div>
      </div>
    )
  };
  
  export default Display;
  