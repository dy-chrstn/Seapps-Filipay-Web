import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import DriverMessagesTable from '../../../../components/Dashboard/Tables/Driver-Tables/DriverMessagesTable';

const Messages: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="Messages" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div>
              {menuOpen ? <Menu title={"Messages"}/> : <MiniMenu title={"Messages"}/> }
            </div>
          
            <div className='h-full w-[100%] mx-10 mt-5'>
              <DriverMessagesTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default Messages;

