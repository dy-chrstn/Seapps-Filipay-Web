import React, { useState } from 'react'

import Header from '../components/Dashboard/header';
import Menu from '../components/Dashboard/Menu/menu';
import MiniMenu from '../components/Dashboard/Menu/miniMenu';
import TransportCoopTable from '../components/Dashboard/Tables/TransportCoopTable'

const Dashboard = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [passValue, setPassValue] = useState<string>('');
const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handlePassChange = (event: any) => {
      setPassValue(event.target.value);
    };

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
          {menuOpen ? <Menu title={"Dashboard"}/> : <MiniMenu title={"Dashboard"}/> }
          <TransportCoopTable/>

        </div>
    
        

    </div>
  );

}


export default Dashboard;