import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import CardSalesTable from '../../../../components/Dashboard/Tables/AccountingSystem/CardSalesTable';

const CashSales: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="Card Sales" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div>
              {menuOpen ? <Menu title={"Card Sales"}/> : <MiniMenu title={"Card Sales"}/> }
            </div>
          
            <div className='h-full w-[100%] mx-10 mt-5 '>
              <CardSalesTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default CashSales;

