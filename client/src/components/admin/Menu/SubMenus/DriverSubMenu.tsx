//import React from 'react'

// import React, { useState, useEffect } from 'react'

import { FaTruck } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { FaUserTie } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { AiOutlineTransaction } from "react-icons/ai";
import { useNavigate } from "react-router-dom";



type DriverSubMenuProps = {
    isMenuFull: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };

const DriverSubMenu: React.FC<DriverSubMenuProps> = ({ isMenuFull, onMouseEnter, onMouseLeave}) => {

    const navigate = useNavigate();

  const navigatePage = (page: any) => {
      
      navigate(page)
  }

    return (
        <div className={` w-52 ${isMenuFull ? 'ml-4' : 'absolute md:left-16 lg:left-20 top-32 bg-dashboardPurple'}  p-2 pl-1 rounded-lg`}> 
            
            <div onMouseEnter={onMouseEnter} onMouseLeave ={onMouseLeave}
            onClick = {() => navigatePage('/Driver/DriverList')} 
             className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <FaUserTie className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Driver List</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave ={onMouseLeave}
            onClick = {() => navigatePage('/Driver/TimeTracker')} 
            className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <FaChartPie className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Time tracker</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave ={onMouseLeave}
            onClick = {() => navigatePage('/Driver/Dispatch')} 
            className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <FaTruck className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Dispatch</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave ={onMouseLeave}
            onClick = {() => navigatePage('/Driver/Sales')} 
            className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <VscGraph className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Sales</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave ={onMouseLeave}
            onClick = {() => navigatePage('/Driver/DriverTransactionHistory')} 
            className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <AiOutlineTransaction className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Transaction History</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave ={onMouseLeave}
            onClick = {() => navigatePage('/Driver/DriverMessages')} 
             className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <TiMessages className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Messages</p>
                    </div>
                </div>
            </div>
        </div>
  

    
    );
  };
  
  export default DriverSubMenu ;
  