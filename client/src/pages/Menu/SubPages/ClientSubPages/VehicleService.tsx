import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import VehicleServiceTable from '../../../../components/Dashboard/Tables/Client-Tables/VehicleServiceTable';


const VehicleService = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }
    return (
      <div className='w-screen h-screen transparent-caret'>
        <Header title="Vehicle Service" onClick={openMenu}/> 
         {menuOpen ? <Menu title={"Vehicle Service"}/> : <MiniMenu title={"Vehicle Service"}/> }
  
        <div className='flex flex-col flex-grow'>
        {/* Always render TransportCoopTable regardless of menu state */}
        <VehicleServiceTable />
              
          </div>
        </div>
  
  );

}


export default VehicleService;