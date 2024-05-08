import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import SalesTable from '../../../../components/Dashboard/Tables/Driver-Tables/SalesTable';

const Sales: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="Sales" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div>
              {menuOpen ? <Menu title={"Sales"}/> : <MiniMenu title={"Sales"}/> }
            </div>
          
            <div className='h-full w-[100%] mx-10 mt-5 '>
              <SalesTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default Sales;

