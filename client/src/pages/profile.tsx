import { useState } from 'react'
import Header from '../components/admin/header';
import Menu from '../components/admin/Menu/menu';
import MiniMenu from '../components/admin/Menu/miniMenu';
import { FaUserCircle } from "react-icons/fa";

const Profile: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

return (
    <div className='w-screen h-screen'>
        <Header title="Dashboard" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div className={`${menuOpen ?'w-[25%]' : 'w-[25%]'} `}>
              {menuOpen ? <Menu title={"Dashboard"}/> : <MiniMenu title={"Dashboard"}/> }
            </div>
          
            <div className='h-full w-[100%] mx-10 mt-5 '>
                <div className='text-start bg-gradient-to-b from-sky-200 via-sky-100 to-sky-100 w-full px-4 py-4 mb-4 rounded-xl'>
                    <p className='font-bold 2xl:text-4xl text-3xl text-blue-700'>Hello John</p>
                    <span className='font-medium 2xl:text-lg text-md text-gray-500 '>Welcome Back!</span>
                </div>
                <div className='border-b-2 border-cyan-300 w-[100%] mt-4 mb-4'></div>
                <div className=''>
                    <div className='flex flex-row  justify-between w-[40%]'>
                        <FaUserCircle  size={100} color = {"#4D93B8"}/>
                        <div className='flex flex-row items-center'>
                            <span className='text-blue-700 font-medium mr-8'>Change Photo</span>
                            <span className='text-black font-medium '>Remove Photo</span>
                        </div>  
                    </div>
              
                    <div className='flex flex-col w-full '>
                        <div className='flex flex-row w-[full] items-center'>
                            <span className='font-bold text-sm my-4 w-[17%]'> NAME </span>
                            <input className='border-2 border-[#4D93B8] rounded my-4 h-8 w-[40%]' type='text'></input>
                        </div>  
                        <div className='flex flex-row items-center'>
                            <span className='font-bold text-sm my-4 w-[17%] '> EMAIL ADDRESS </span>
                            <input className='border-2 border-[#4D93B8] rounded my-4 h-8 w-[40%] ' type='text'></input>
                        </div>  
                        <div className='flex flex-row items-center'>
                            <span className='font-bold text-sm my-4 w-[17%] '> CHANGE PASSWORD </span>
                            <input className='border-2 border-[#4D93B8] rounded my-4 h-8 w-[20%] ' type='text'></input>
                        </div>  
                        <div className='flex flex-row items-center'>
                            <span className='font-bold text-sm my-4 w-[17%] '> CONFIRM PASSWORD </span>
                            <input className='border-2 border-[#4D93B8] rounded my-4 h-8 w-[20%]' type='text'></input>
                        </div>  

                    </div>
                  
                   
                   
                </div>
            </div>
          
        </div>

    </div>
  );

}


export default Profile;

