import { useState } from 'react'
import Header from '../../components/admin/header';
import Menu from '../../components/admin/Menu/menu';
import MiniMenu from '../../components/admin/Menu/miniMenu';
import SubAdminControllerTable from '../../components/Dashboard/Tables/SubAdminController/SubAdminControllerTable';

const AdminController: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="Admin Controller" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div className={`${menuOpen ?'w-[10%]' : 'w-[10%]'} `}>
              {menuOpen ? <Menu title={"Admin Controller"}/> : <MiniMenu title={"Admin Controller"}/> }
            </div>
          
            <div className='h-full w-[90%] mx-10 mt-5 '>
              <SubAdminControllerTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default AdminController;

