import { useState } from 'react'
import Header from '../components/Dashboard/header';
import Menu from '../components/Dashboard/Menu/menu';
import MiniMenu from '../components/Dashboard/Menu/miniMenu';
import TransportCoopTable from '../components/Dashboard/Tables/TransportCoopTable'

const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }
return (
    <div className='w-screen h-screen'>
        <Header title="Dashboard" onClick = {openMenu}/> 
        <div className='flex flex-row'>
          <div className='bg-pink-300 w-[5%]'>
            {menuOpen ? <Menu title={"Dashboard"}/> : <MiniMenu title={"Dashboard"}/> }
          </div>
         
          <div className=' bg-blue-300 w-full'>
              <p className='font-bold text-4xl'>Hello John</p>
          </div>
        </div>
    
        

    </div>
  );

}


export default Dashboard;