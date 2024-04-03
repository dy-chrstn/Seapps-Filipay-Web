import { useState } from 'react'
import Header from '../../components/admin/header';
import Menu from '../../components/admin/Menu/menu';
import MiniMenu from '../../components/admin/Menu/miniMenu';


const Retailer = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }
return (
    <div className='w-screen h-screen'>
        <Header title="Retailer" onClick = {openMenu}/> 
        <div className='flex flex-row'>
          <div className='bg-pink-300 w-[5%]'>
            {menuOpen ? <Menu title={"Retailer"}/> : <MiniMenu title={"Retailer"}/> }
          </div>
         
          <div className=' bg-blue-300 mx-12'>
              <p className=' text-4xl'>Hello Louise na sa <span className='font-bold'>Retailer</span> ka po ma'am</p>
              
          </div>
        </div>
    
        

    </div>
  );

}


export default Retailer;