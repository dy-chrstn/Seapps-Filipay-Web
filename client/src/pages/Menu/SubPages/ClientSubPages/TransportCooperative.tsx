import { useState } from 'react';
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import TransportCoopTable from '../../../../components/Dashboard/Tables/Client-Tables/TransportCoopTable';


const TransportCooperative = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-screen h-screen transparent-caret'>
      <Header title="Transport Cooperative" onClick={openMenu}/> 
       {menuOpen ? <Menu title={"Transport Cooperative"}/> : <MiniMenu title={"Transport Cooperative"}/> }

       <div className='w-[100%] mx-3 mt-5'>
        <TransportCoopTable />
      
      </div>
    </div>
  );
};

export default TransportCooperative;
