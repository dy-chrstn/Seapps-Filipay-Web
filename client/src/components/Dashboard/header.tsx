//import React from 'react'

import React, { useState, useEffect } from 'react'

import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { setPriority } from 'os';

const Header = () => {

  const menuOpen = () => {

    if(!isProfileVisible)
    setIsProfileVisible(true)

    else setIsProfileVisible(false)
  }


  
  const [isProfileVisible, setIsProfileVisible] = useState(false)
  const [menuVisible, setMenuVisible] = useState(true)

    return (
      <div className=' flex flex-row items-start w-screen'>
        {menuVisible ?
        <div className=" w-[47%] py-3">
            <div className=" bg-blue-900  flex items-center flex-row  h-[10&] ">
              <img className=" w-10 h-10 flex-shrink-0 mx-3 bg-white" src="/Img/Dashboard/FiliPayIcon.png" alt="FiliPay Logo" />
              <div className="text-center">
                  <p className="text-sky-300 font-bold">Management</p>
                  <p className="text-sky-300 font-bold">Dashboard</p>
              </div>
          </div>
        </div>
        
        :     <div className="bg-blue-900 w-[48%] py-3">
                  <div className=" flex items-center flex-row w-full h-[10&]">
                    <img className=" w-10 h-10 flex-shrink-0 mx-3 bg-white" src="/Img/Dashboard/FiliPayIcon.png" alt="FiliPay Logo" />
                    <div className="text-center">
                        <p className="text-sky-300 font-bold">Management</p>
                        <p className="text-sky-300 font-bold">Dashboard</p>
                    </div>
                </div>
              </div>
        }
        
   
        
        <div className=" pl-3 pt-2 w-full h-[10%] self-start" >   
          <p className="text-blue-900 text-3xl font-sans font-bold">Dashboard</p>
        </div>

        <div onClick={(menuOpen)} className=" mt-4 py-1 w-full flex flex-row items-center justify-end mr-7">
                <IoIosNotifications className="mr-7" size={24} color={"black"} />
               <p className="flex flex-row font-bold font-sans text-sm">Juan Dela Cruz</p>
                <FaUserCircle className="ml-5" size={40} color={"black"}/>
                <TbTriangleInvertedFilled className="ml-1 flex-shrink-0" size={8} color={"black"}/>
        </div>

        {isProfileVisible && (

          <div className='absolute border border-gray-200 bg-white right-7 shadow-md top-12 '>
                <div className='flex flex-row items-center hover:bg-gray-300 w-full px-4 py-2'> 
                <FaUser className="mr-3 flex-shrink-0" size={12} color={"black"}/>
                  <p>Profile</p>
                </div>
                <div className='flex flex-row items-center px-4 py-2 hover:bg-gray-300'> 
                <FaSignOutAlt className="mr-3 flex-shrink-" size={12} color={"black"}/>
                  <p>Sign Out</p>
                </div>
          </div>
        )}

      </div>
    );
  };
  
  export default Header;
  