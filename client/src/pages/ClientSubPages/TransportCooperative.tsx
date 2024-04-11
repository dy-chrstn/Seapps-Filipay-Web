import React, { useState } from 'react';
import Header from '../../components/Dashboard/header';
import Menu from '../../components/Dashboard/Menu/menu';
import TransportCoopTable from '../../components/Dashboard/Tables/TransportCooperativeTable/TransportCoopTable';
import MiniMenu from '../../components/Dashboard/Menu/miniMenu';

const TransportCooperative = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=' w-screen h-screen transparent-caret relative'>
    <Header title="Transport Cooperative" onClick={openMenu}/> 
    {menuOpen ? <Menu/> : <MiniMenu/>}

    <div className=''>
      <TransportCoopTable />
    </div>
  </div>
  );
};

export default TransportCooperative;
