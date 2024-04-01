import React, { useState } from 'react'
import SlideShow from '../components/LogIn/slideshow';
import Header from '../components/Dashboard/header';
import Menu from '../components/Dashboard/menu';

const Dashboard = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [passValue, setPassValue] = useState<string>('');
const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handlePassChange = (event: any) => {
      setPassValue(event.target.value);
    };
return (
    <div className='w-screen h-screen'>
        <Header/> 
      
        <div className=' flex flex-row w-screen '>
            <div className=' w-[23%]'>
                 <Menu/>
            </div>
            <div className=' w-full h-full'>
                {/* body */}
            </div>

        </div>
        

    </div>
  );

}


export default Dashboard;