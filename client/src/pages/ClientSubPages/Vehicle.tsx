import { useState } from 'react'
import Header from '../../components/Dashboard/header';
import Menu from '../../components/Dashboard/Menu/menu';
import MiniMenu from '../../components/Dashboard/Menu/miniMenu';


const Vehicle = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }
return (
    <div className='w-screen h-screen'>
        <Header title="Vehicle" onClick = {openMenu}/> 
        <div className='flex flex-row'>
          <div className='bg-pink-300 w-[5%]'>
            {menuOpen ? <Menu title={"Vehicle"}/> : <MiniMenu title={"Vehicle"}/> }
          </div>
         
          <div className=' bg-blue-300 mx-12'>
              <p className=' text-4xl'>Hello Louise na sa <span className='font-bold'>Vehicle</span> ka po ma'am</p>
              
          </div>
        </div>
    
        

    </div>
  );

}


export default Vehicle;