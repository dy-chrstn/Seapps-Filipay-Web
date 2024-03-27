//import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
      <div className='bg-white flex flex-row justify-between'>
        <div className="flex bg-white flex-row items-center w-full gap-10"> 
            <div className=" bg-blue-900 flex flex-row items-center w-1/5">
                <img className=" w-10 h-10 flex-shrink-0 mx-3 bg-white" src="/Img/download.png" alt="FiliPay Logo" />
                <div className="text-center">
                    <p className="text-sky-300 font-bold">Management</p>
                    <p className="text-sky-300 font-bold">Dashboard</p>
                </div>
            </div>
            <div className=" pl-3 w-full h-full self-start" >   
             <p className="text-blue-900 text-3xl font-sans font-bold">Dashboard</p>
            </div>
           
        </div>
        <div className="flex flex-row items-center mr-7">
                <IoIosNotifications className="mr-7" size={24} color={"black"} />
                <p className="font-bold font-sans text-lg">Juan Dela Cruz</p>
                <FaUserCircle className="ml-5" size={40} color={"black"}/>
        </div>
      </div>
    );
  };
  
  export default Header;
  