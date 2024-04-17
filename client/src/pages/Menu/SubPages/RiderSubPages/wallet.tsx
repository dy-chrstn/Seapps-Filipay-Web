import { useState } from 'react'
import Header from '../../../../components/admin/header';
import Menu from '../../../../components/admin/Menu/menu';
import MiniMenu from '../../../../components/admin/Menu/miniMenu';
import WalletTable from '../../../../components/Dashboard/Tables/Rider/WalletTable';

const Wallet: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
  <div className='w-screen h-screen transparent-caret'>
  <Header title="Wallet" onClick={openMenu}/> 
   {menuOpen ? <Menu title={"Wallet"}/> : <MiniMenu title={"Wallet"}/> }

  <div className='flex flex-col flex-grow'>
  {/* Always render TransportCoopTable regardless of menu state */}
  <WalletTable/>
        
    </div>
  </div>
  );

}


export default Wallet;

