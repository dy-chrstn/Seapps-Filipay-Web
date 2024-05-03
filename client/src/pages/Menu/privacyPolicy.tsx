import { useState } from 'react'
import Header from '../../components/admin/header';
import Menu from '../../components/admin/Menu/menu';
import MiniMenu from '../../components/admin/Menu/miniMenu';
import Editor from '../../components/Dashboard/Tables/Actions/richTextEditor/editorPrivacyPolicy';


const PrivacyPolicy: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="Privacy Policy" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div className={`${menuOpen ?'w-[25%]' : 'w-[25%]'} `}>
              {menuOpen ? <Menu title={"Privacy Policy"}/> : <MiniMenu title={"Privacy Policy"}/> }
            </div>
          
            <div className=" justify-center items-center -ml-32 mt-10 h">
            <Editor/>
            </div>
             
          
        </div>

    </div>
  );

}


export default PrivacyPolicy;

