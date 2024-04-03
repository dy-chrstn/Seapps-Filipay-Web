import { useState } from 'react'
import Header from '../../components/Dashboard/header';
import Menu from '../../components/Dashboard/Menu/menu';
import MiniMenu from '../../components/Dashboard/Menu/miniMenu';


const Device = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }
    
 return (
      <div className="bg-gray-200 min-h-screen flex justify-center items-center">
        <div className="max-w-4xl w-full p-4">
          <h1 className="text-4xl font-bold mb-8">Responsive Website</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Left Content</h2>
              <p>This content will be displayed on the left side on larger screens.</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Right Content</h2>
              <p>This content will be displayed on the right side on larger screens.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Device;