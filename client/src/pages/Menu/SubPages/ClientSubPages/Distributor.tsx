import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import DistributorTable from '../../../../components/Dashboard/Tables/Client-Tables/DistributorTable';


const Distributor = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }
return (
  <div className='w-screen h-screen transparent-caret'>
  <Header title="Distributor" onClick={openMenu}/> 
   {menuOpen ? <Menu title={"Distributor"}/> : <MiniMenu title={"Distributor"}/> }

   <div className='w-[100%] mx-3 mt-5'>
  <DistributorTable/>
        
    </div>
  </div>
  );

}


export default Distributor;