import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import VehicleTable from '../../../../components/Dashboard/Tables/Client-Tables/VehicleTable';


const Vehicle = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }
return (
    <div className='w-screen h-screen transparent-caret'>
        <Header title="Vehicle" onClick={openMenu}/> 
         {menuOpen ? <Menu title={"Vehicle"}/> : <MiniMenu title={"Vehicle"}/> }
  
        <div className='flex flex-col flex-grow'>
        {/* Always render TransportCoopTable regardless of menu state */}
        <VehicleTable />
              
          </div>
        </div>
  
  );

}


export default Vehicle;