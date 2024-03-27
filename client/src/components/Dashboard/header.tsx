//import React from 'react'

import React, { useState } from 'react'

import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const Header = () => {

  const [menuVisible, setMenuVisible] = useState(true)

    return (
      <div className=' absolute flex flex-row items-start w-screen h-screen'>
        {menuVisible ?
        <div className="bg-blue-900 w-[48%] h-screen py-3">
            <div className="   flex items-center flex-row w-full h-[10&] ">
              <img className=" w-10 h-10 flex-shrink-0 mx-3 bg-white" src="/Img/download.png" alt="FiliPay Logo" />
              <div className="text-center">
                  <p className="text-sky-300 font-bold">Management</p>
                  <p className="text-sky-300 font-bold">Dashboard</p>
              </div>
          </div>
        </div>
        
        :     <div className="bg-blue-900 w-[48%] py-3">
                  <div className=" flex items-center flex-row w-full h-[10&]">
                    <img className=" w-10 h-10 flex-shrink-0 mx-3 bg-white" src="/Img/download.png" alt="FiliPay Logo" />
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

        <div className=" mt-4 py-1 w-full flex flex-row items-center justify-end mr-7">
                <IoIosNotifications className="mr-7" size={24} color={"black"} />
               <p className="flex flex-row font-bold font-sans text-sm">Juan Dela Cruz</p>
                <FaUserCircle className="ml-5" size={40} color={"black"}/>
                <TbTriangleInvertedFilled className="ml-1 flex-shrink-0" size={8} color={"black"}/>
        </div>
      </div>
    );
  };
  
  export default Header;
  