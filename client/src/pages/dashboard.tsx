import React, { useState } from 'react'
import Header from '../components/Dashboard/header';
import Menu from '../components/Dashboard/Menu/menu';
import MiniMenu from '../components/Dashboard/Menu/miniMenu';

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
    <div className='w-screen h-screen transparent-caret'>
        <Header title="Dashboard"onClick = {openMenu}/> 
        {menuOpen ? <Menu/> : <MiniMenu/> }
        

    </div>
  );

}


export default Dashboard;