//import React from 'react'

// import React, { useState, useEffect } from 'react'


import { IoCashOutline } from "react-icons/io5";
import { AiOutlineTransaction } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

type DistributionSubMenuProps = {
    isMenuFull: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };

  
const DistributionSubMenu: React.FC<DistributionSubMenuProps> = ({ isMenuFull, onMouseEnter, onMouseLeave }) => {

    const navigate = useNavigate();

  const navigatePage = (page: any) => {
      
      navigate(page)
  }


    return (
        <div className={` w-52 ${isMenuFull ? 'ml-10' : 'absolute md:left-16 lg:left-20 top-56 bg-dashboardPurple'}  p-2 pl-1 rounded-lg`}> 
            <div onMouseEnter={onMouseEnter} onMouseLeave ={onMouseLeave}
             onClick = {() => navigatePage('/DistributorRetailer/CashIn')} 
            className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <IoCashOutline className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Cash In</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave ={onMouseLeave}
             onClick = {() => navigatePage('/DistributorRetailer/DistributorTransactionHistory')} 
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
             onClick = {() => navigatePage('/DistributorRetailer/DistributorMessages')} 
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
  
  export default DistributionSubMenu ;
  