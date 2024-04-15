import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import DriverListTable from '../../../../components/Dashboard/Tables/Driver/DriverList/DriverListTable';

const DriverList: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="Driver List" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div>
              {menuOpen ? <Menu title={"Driver List"}/> : <MiniMenu title={"Driver List"}/> }
            </div>
          
            <div className='h-full w-[75%] mx-10 mt-5 '>
              <DriverListTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default DriverList;

