import React, { useState } from 'react'

import Header from '../components/Dashboard/header';


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
    
        

    </div>
  );

}


export default Dashboard;