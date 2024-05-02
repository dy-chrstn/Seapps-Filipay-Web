import { useState } from 'react'
import Header from '../../components/admin/header';
import Menu from '../../components/admin/Menu/menu';
import MiniMenu from '../../components/admin/Menu/miniMenu';
import MapContainer from '../../components/Map';

const Map: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="Stations" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div className={`${menuOpen ?'w-[20%]' : 'w-[5%]'} `}>
              {menuOpen ? <Menu title={"Stations"}/> : <MiniMenu title={"Stations"}/> }
            </div>
          
            <div className='h-full w-[100%] mx-10 mt-5 mb-10 z-[-10]'>
              <MapContainer/>
            </div>
             
          
        </div>

    </div>
  );

}


export default Map;

