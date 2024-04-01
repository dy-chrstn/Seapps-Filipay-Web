//import React from 'react'

// import React, { useState, useEffect } from 'react'

import { FaTruck } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { IoBusiness } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { AiOutlineTransaction } from "react-icons/ai";


const DriverSubMenu = () => {

    return (
        <div className=''>
            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 ml-10 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <FaUserTie className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Driver List</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 ml-10 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <FaChartPie className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Time tracker</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 ml-10 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <FaTruck className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Dispatch</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 ml-10 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <VscGraph className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Sales</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 ml-10 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <AiOutlineTransaction className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Transaction History</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 ml-10 py-1 '>
                <div className='relative bg-blue-900 w-full'>
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
  