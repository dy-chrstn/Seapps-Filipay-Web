import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import RetailerTable from '../../../../components/Dashboard/Tables/Client-Tables/RetailerTable';


const Retailer = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }
return (
  <div className='w-screen h-screen transparent-caret'>
  <Header title="Retailer" onClick={openMenu}/> 
   {menuOpen ? <Menu title={"Retailer"}/> : <MiniMenu title={"Retailer"}/> }

  <div className='flex flex-col flex-grow'>
  {/* Always render TransportCoopTable regardless of menu state */}
  <RetailerTable/>
        
    </div>
  </div>
    
        );

}


export default Retailer;