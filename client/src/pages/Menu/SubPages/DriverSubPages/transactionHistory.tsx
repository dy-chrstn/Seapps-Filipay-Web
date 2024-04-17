import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import TransactionHistoryTable from '../../../../components/Dashboard/Tables/Driver/TransactionHistory/TransactionHistoryTable';

const TransactionHistory: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="TransactionHistory" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div>
              {menuOpen ? <Menu title={"TransactionHistory"}/> : <MiniMenu title={"TransactionHistory"}/> }
            </div>
          
            <div className='h-full w-[100%] mx-10 mt-5 '>
              <TransactionHistoryTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default TransactionHistory;

