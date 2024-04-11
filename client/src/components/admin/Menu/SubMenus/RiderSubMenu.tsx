//import React from 'react'

// import React, { useState, useEffect } from 'react'

import { FaWallet } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


type RiderSubMenuProps = {
    isMenuFull: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };

const RiderSubMenu: React.FC<RiderSubMenuProps> = ({ isMenuFull, onMouseEnter, onMouseLeave}) => {
    const navigate = useNavigate();

  const navigatePage = (page: any) => {
      
      navigate(page)
  }


    return (
        <div className={` w-52 ${isMenuFull ? 'ml-10' : 'absolute md:left-16 lg:left-20 top-44 bg-dashboardPurple'} p-2 pl-1 rounded-lg`}> 
           
            <div onMouseEnter={onMouseEnter} onMouseLeave ={onMouseLeave}
             onClick = {() => navigatePage('/Rider/RiderList')} 
            className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <FaClipboardList className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Rider List</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave ={onMouseLeave}
             onClick = {() => navigatePage('/Rider/Wallet')} 
            className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <FaWallet className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Wallet</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave ={onMouseLeave}
             onClick = {() => navigatePage('/Rider/RideHistory')} 
            className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <FaBus className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Ride History</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave ={onMouseLeave}
             onClick = {() => navigatePage('/Rider/RiderMessages')} 
            className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <LuMessagesSquare className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Messages</p>
                    </div>
                </div>
            </div>
        </div>
  

    
    );
  };
  
  export default RiderSubMenu ;
  