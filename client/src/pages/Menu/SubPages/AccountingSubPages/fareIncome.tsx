import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import FareIncomeTable from '../../../../components/Dashboard/Tables/AccountingSystem/FareIncome/FareIncomeTable';

const FareIncome: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="Fare Income" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div>
              {menuOpen ? <Menu title={"Fare Income"}/> : <MiniMenu title={"Fare Income"}/> }
            </div>
          
            <div className='h-full w-[100%] mx-10 mt-5 '>
              <FareIncomeTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default FareIncome;

