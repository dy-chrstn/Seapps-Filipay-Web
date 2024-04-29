import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import DistributorMessagesTable from '../../../../components/Dashboard/Tables/Distributor-Retailer/messagesTable';


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
            <div className={`${menuOpen ?'w-[25%]' : 'w-[25%]'} `}>
              {menuOpen ? <Menu title={"Messages"}/> : <MiniMenu title={"Messages"}/> }
            </div>
          
            <div className='mx-10 mt-5 '>
            <DistributorMessagesTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default Messages;

