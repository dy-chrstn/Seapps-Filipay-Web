import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import RideHistoryTable from '../../../../components/Dashboard/Tables/Rider/RideHistoryTable';

const RideHistory: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
  <div className='w-screen h-screen transparent-caret'>
  <Header title="Ride History" onClick={openMenu}/> 
   {menuOpen ? <Menu title={"Ride History"}/> : <MiniMenu title={"Ride History"}/> }

  <div className='flex flex-col flex-grow'>
  <RideHistoryTable/>
        
    </div>
  </div>
  );

}


export default RideHistory;

