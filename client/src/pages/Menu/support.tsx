import { useState } from 'react'
import Header from '../../components/admin/header';
import Menu from '../../components/admin/Menu/menu';
import MiniMenu from '../../components/admin/Menu/miniMenu';
import SupportTable from '../../components/Dashboard/Tables/Support/SupportTable';

const Support: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="Support" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div className={`${menuOpen ?'w-[10%]' : 'w-[10%]'} `}>
              {menuOpen ? <Menu title={"Support"}/> : <MiniMenu title={"Support"}/> }
            </div>
        
            <div className='h-full w-[90%] mx-10 mt-5 '>
              <SupportTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default Support;

