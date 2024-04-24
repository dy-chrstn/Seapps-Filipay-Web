import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import SummaryReportTable from '../../../../components/Dashboard/Tables/Rider/SummaryReportTable';

const SummaryReport: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
  <div className='w-screen h-screen transparent-caret'>
  <Header title="Summary Report (Ride History)" onClick={openMenu}/> 
   {menuOpen ? <Menu/> : <MiniMenu/> }

  <div className='flex flex-col flex-grow'>
  <SummaryReportTable/>
        
    </div>
  </div>
  );

}


export default SummaryReport;

