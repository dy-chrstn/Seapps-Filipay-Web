//import React from 'react'
import React, { useState } from 'react'
import { IoIosNotifications } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Menu = () => {

    const [isHover, setIsHover] = useState(false);

    const hoverIn = () => {
        setIsHover(true)
    }
    const hoverOut = () => {
        setIsHover(false)
    }


    return (
      <div className='absolute bg-blue-900 flex flex-col w-56 h-screen top-0'>
        <div className="flex border-b border-black w-full h-14 flex-row justify-start items-center mb-7">
            <img className=" w-10 h-10 flex-shrink-0 mx-3 bg-white" src="/Img/download.png" alt="FiliPay Logo" />
            <div className="text-center">
                <p className="text-sky-300 font-bold">Management</p>
                <p className="text-sky-300 font-bold">Dashboard</p>
            </div>
        </div>

            {!isHover ? 
                <div className="group border-l-4  py-1 border-l-4 hover:border-white ">
                    <div className="w-full flex flex-row items-center py-1 bg-blue-800 ">
                        <MdDashboard className= "mx-2 flex-shrink-0" size ={24} color={"#7dd3fc"}/>
                        <p className="font-bold text-base font-sans text-white">Dashboard</p>
                    </div>
                </div> 
            : <div className="group border-l-4 border-blue-900 py-1 hover:border-l-4 hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300">
                        <MdDashboard className= "mx-2 flex-shrink-0" size ={24} color={"#7dd3fc"}/>
                        <p className="font-bold text-base font-sans text-white">Dashboard</p>
                    </div>
                </div>

            }
            

            <div onMouseEnter={hoverIn} onMouseLeave={hoverOut} className="group border-l-4 border-blue-900 py-1 hover:border-l-4 hover:border-white transition-all duration-300">
                <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                    <div className='w-full flex flex-row items-center'>
                        <FaUser className= "mx-2 flex-shrink-0" size ={24} color={"#7dd3fc"}/>
                     
                        <p className="font-bold text-base font-sans text-white">Client</p>
                    </div>
                    <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                </div>
            </div>

            <div>
                <div className='flex flex-row'>
                    icon
                    <p>Transport Cooperative</p>
                </div>

            </div>

           <div onMouseEnter={hoverIn} onMouseLeave={hoverOut} className="group border-l-4 border-blue-900 py-1 hover:border-l-4 hover:border-white transition-all duration-300">
                <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                    <div className='w-full flex flex-row items-center'>
                        <FaUser className= "mx-2 flex-shrink-0" size ={24} color={"#7dd3fc"}/>
                     
                        <p className="font-bold text-base font-sans text-white">Driver</p>
                    </div>
                    <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                </div>
            </div>

             {/* <div onMouseEnter={hoverIn} onMouseLeave={hoverOut} className="group border-l-4 border-blue-900 py-1 hover:border-l-4 hover:border-white transition-all duration-300">
                <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                    <div className='w-full flex flex-row items-center'>
                        <FaUser className= "mx-2 flex-shrink-0" size ={24} color={"#7dd3fc"}/>
                     
                        <p className="font-bold text-base font-sans text-white">Rider</p>
                    </div>
                    <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                </div>
            </div>

            <div onMouseEnter={hoverIn} onMouseLeave={hoverOut} className="group border-l-4 border-blue-900 py-1 hover:border-l-4 hover:border-white transition-all duration-300">
                <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                    <div className='w-full flex flex-row items-center'>
                        <FaUser className= "mx-2 flex-shrink-0" size ={24} color={"#7dd3fc"}/>
                     
                        <p className="font-bold text-base font-sans text-white">Distributor/Retailer</p>
                    </div>
                    <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                </div>
            </div>

            <div onMouseEnter={hoverIn} onMouseLeave={hoverOut} className="group border-l-4 border-blue-900 py-1 hover:border-l-4 hover:border-white transition-all duration-300">
                <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                    <div className='w-full flex flex-row items-center'>
                        <FaUser className= "mx-2 flex-shrink-0" size ={24} color={"#7dd3fc"}/>
                     
                        <p className="font-bold text-base font-sans text-white">Accounting System</p>
                    </div>
                    <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                </div>
            </div>

            <div onMouseEnter={hoverIn} onMouseLeave={hoverOut} className="group border-l-4 border-blue-900 py-1 hover:border-l-4 hover:border-white transition-all duration-300">
                <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                    <div className='w-full flex flex-row items-center'>
                        <FaUser className= "mx-2 flex-shrink-0" size ={24} color={"#7dd3fc"}/>
                     
                        <p className="font-bold text-base font-sans text-white">Email Template</p>
                    </div>
                    <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                </div>
            </div>

            <div onMouseEnter={hoverIn} onMouseLeave={hoverOut} className="group border-l-4 border-blue-900 py-1 hover:border-l-4 hover:border-white transition-all duration-300">
                <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                    <div className='w-full flex flex-row items-center'>
                        <FaUser className= "mx-2 flex-shrink-0" size ={24} color={"#7dd3fc"}/>
                     
                        <p className="font-bold text-base font-sans text-white">Privacy Policy</p>
                    </div>
                    <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                </div>
            </div>

            <div onMouseEnter={hoverIn} onMouseLeave={hoverOut} className="group border-l-4 border-blue-900 py-1 hover:border-l-4 hover:border-white transition-all duration-300">
                <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                    <div className='w-full flex flex-row items-center'>
                        <FaUser className= "mx-2 flex-shrink-0" size ={24} color={"#7dd3fc"}/>
                     
                        <p className="font-bold text-base font-sans text-white">Admin</p>
                    </div>
                    <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                </div>
            </div> */}

           
            
            
      </div>
    );
  };
  
  export default Menu;
  