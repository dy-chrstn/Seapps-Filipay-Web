import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import RidersListTable from '../../../../components/Dashboard/Tables/Rider/RidersListTable';

const RiderList: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
  <div className='w-screen h-screen transparent-caret'>
  <Header title="Riders List" onClick={openMenu}/> 
   {menuOpen ? <Menu title={"Riders List"}/> : <MiniMenu title={"Riders List"}/> }

  <div className='flex flex-col flex-grow'>
  <RidersListTable/>
        
    </div>
  </div>
  );

}


export default RiderList;

