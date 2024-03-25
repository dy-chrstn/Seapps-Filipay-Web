import { Route, Routes } from 'react-router-dom';
import Stations from './pages/administrator/stations';
import Login from './pages/login';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/stations' element={<Stations />} />

    </Routes>
  );
}

export default App;
