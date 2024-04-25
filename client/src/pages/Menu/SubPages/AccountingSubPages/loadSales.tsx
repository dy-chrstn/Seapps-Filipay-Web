import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import LoadSalesTable from '../../../../components/Dashboard/Tables/AccountingSystem/LoadSales/LoadSalesTable';

const LoadSales: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title=" Load Sales" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div>
              {menuOpen ? <Menu title={" Load Sales"}/> : <MiniMenu title={" Load Sales"}/> }
            </div>
          
            <div className='h-full w-[100%] mx-10 mt-5 '>
              <LoadSalesTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default LoadSales;

