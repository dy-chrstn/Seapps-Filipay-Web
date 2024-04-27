import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import CashIncomeTable from '../../../../components/Dashboard/Tables/AccountingSystem/CashIncome/CashIncomeTable';

const CashIncome: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="Cash Income" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div>
              {menuOpen ? <Menu title={"Cash Income"}/> : <MiniMenu title={"Cash Income"}/> }
            </div>
          
            <div className='h-full w-[100%] mx-10 mt-5 '>
              <CashIncomeTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default CashIncome;

