import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MapContainer from './components/Map';
import Stations from './pages/administrator/stations';
import NavBar from './components/NavBar';


function App() {
  return (
    <Routes>
      <Route path='/stations' element={<Stations />} />
    </Routes>
  );
}

export default App;
