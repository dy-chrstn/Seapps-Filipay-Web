import React, { useState } from 'react';
import Header from '../../components/Dashboard/header';
import Menu from '../../components/Dashboard/Menu/menu';
import TransportCoopTable from '../../components/Dashboard/Tables/TransportCoopTable';
import MiniMenu from '../../components/Dashboard/Menu/miniMenu';

const TransportCooperative = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-screen h-screen transparent-caret'>
      <Header title="Transport Cooperative" onClick={openMenu}/> 
       {menuOpen ? <Menu title={"Vehicle"}/> : <MiniMenu title={"Vehicle"}/> }

      <div className='flex flex-col flex-grow'>
        {/* Always render TransportCoopTable regardless of menu state */}
        <TransportCoopTable />
      </div>
    </div>
  );
};

export default TransportCooperative;
