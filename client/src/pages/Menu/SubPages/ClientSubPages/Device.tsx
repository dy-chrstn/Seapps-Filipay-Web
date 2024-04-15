import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import DeviceTable from '../../../../components/Dashboard/Tables/Client-Tables/DeviceTable';


const Device = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }
return (
  <div className='w-screen h-screen transparent-caret'>
  <Header title="Device" onClick={openMenu}/> 
   {menuOpen ? <Menu title={"Device"}/> : <MiniMenu title={"Device"}/> }

  <div className='flex flex-col flex-grow'>
  {/* Always render TransportCoopTable regardless of menu state */}
  <DeviceTable/>
        
    </div>
  </div>
    
  

  );

}


export default Device;