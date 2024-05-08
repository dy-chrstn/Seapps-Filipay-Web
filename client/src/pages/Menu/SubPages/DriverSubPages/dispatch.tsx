import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import DispatchTable from '../../../../components/Dashboard/Tables/Driver-Tables/DispatchTable';

const Dispatch: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="Dispatch" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div>
              {menuOpen ? <Menu title={"Dispatch"}/> : <MiniMenu title={"Dispatch"}/> }
            </div>
          
            <div className='h-full w-[100%] mx-10 mt-5 '>
              <DispatchTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default Dispatch;

