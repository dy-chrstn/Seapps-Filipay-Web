import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import TransactionHistoryTable from '../../../../components/Dashboard/Tables/Distributor-Retailer/transactionHistoryTable';


const TransactionHistory: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
  <div className='w-screen h-screen transparent-caret'>
  <Header title="Transaction History" onClick={openMenu}/> 
   {menuOpen ? <Menu title={"Transaction History"}/> : <MiniMenu title={"Transaction History"}/> }

  <div className='flex flex-col flex-grow'>
  <TransactionHistoryTable/>
        
    </div>
  </div>      
  );

}


export default TransactionHistory;

