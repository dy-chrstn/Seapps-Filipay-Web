import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';

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
            <div className={`${menuOpen ?'w-[25%]' : 'w-[25%]'} `}>
              {menuOpen ? <Menu title={"Sales"}/> : <MiniMenu title={"Sales"}/> }
            </div>
          
            <div className='h-full w-[75%] mx-10 mt-5 '>
            </div>
             
          
        </div>

    </div>
  );

}


export default Sales;

