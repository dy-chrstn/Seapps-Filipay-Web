import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import TimeTrackerTable from '../../../../components/Dashboard/Tables/Driver-Tables/TimeTrackerTable';

const TimeTracker: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="TimeTracker" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div>
              {menuOpen ? <Menu title={"TimeTracker"}/> : <MiniMenu title={"TimeTracker"}/> }
            </div>
          
            <div className='h-full w-[100%] mx-10 mt-5 '>
              <TimeTrackerTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default TimeTracker;

