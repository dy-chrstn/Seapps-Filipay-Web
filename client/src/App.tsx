import { Route, Routes } from 'react-router-dom';
import Stations from './pages/administrator/stations';
import Login from './pages/login';
import Dashboard from './pages/dashboard'

//ClientSubPages
import TransportCooperative from './pages/ClientSubPages/TransportCooperative';
import VehicleService from './pages/ClientSubPages/VehicleService';
import Vehicle from './pages/ClientSubPages/Vehicle';
import Device from './pages/ClientSubPages/Device'; 
import Distributor from './pages/ClientSubPages/Distributor';
import Retailer  from './pages/ClientSubPages/Retailer';
import Profile from './pages/profile';


function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Dashboard />} /> */}
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/stations' element={<Stations />} />

      {/* ClassSubPages */}
      <Route path='/TransportCooperative' element={<TransportCooperative />} />
      <Route path='/VehicleService' element={<VehicleService />} />
      <Route path='/Vehicle' element={<Vehicle />} />
      <Route path='/Device' element={<Device />} />
      <Route path='/Distributor' element={<Distributor />} />
      <Route path='/Retailer' element={<Retailer />} />
      <Route path='/profile' element={<Profile />} />

    </Routes>
  );
}

export default App;
