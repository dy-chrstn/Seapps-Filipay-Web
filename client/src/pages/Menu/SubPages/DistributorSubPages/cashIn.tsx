import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import CashInTable from '../../../../components/Dashboard/Tables/Distributor-Retailer/cashinTable';

const CashIn: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
  <div className='w-screen h-screen transparent-caret'>
  <Header title="Cash In" onClick={openMenu}/> 
   {menuOpen ? <Menu title={"Cash In"}/> : <MiniMenu title={"Cash In"}/> }

  <div className='flex flex-col flex-grow'>
  <CashInTable/>
        
    </div>
  </div>
  );

}


export default CashIn;

