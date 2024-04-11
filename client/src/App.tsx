import { Route, Routes } from 'react-router-dom';
import Stations from './pages/administrator/stations';
import Login from './pages/login';
import Dashboard from './pages/dashboard'
import TransportCooperative from './pages/ClientSubPages/TransportCooperative';



function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Dashboard />} /> */}
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/TransportCooperative' element={<TransportCooperative />} />
      <Route path='/stations' element={<Stations />} />
      <Route path='/stations' element={<Stations />} />


    </Routes>
  );
}

export default App;
