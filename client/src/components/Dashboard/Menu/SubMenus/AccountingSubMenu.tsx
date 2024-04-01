//import React from 'react'

// import React, { useState, useEffect } from 'react'

import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaPesoSign } from "react-icons/fa6";
import { MdOutlineAddCard } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
type AccountingSubMenuProps = {
    isMenuFull: boolean;
  };

  const AccountingSubMenu: React.FC<AccountingSubMenuProps> = ({ isMenuFull }) => {

    const navigate = useNavigate();


    return (
        <div className={`bg-blue-900 w-52 ${isMenuFull ? 'ml-10' : 'absolute left-16 top-64 '} p-2 pl-1 rounded-lg`}> 
            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <MdAccountBox className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Account Management</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <FaMoneyBill1Wave className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Fare Income</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <FaPesoSign className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Cash Income</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <BsGraphUpArrow className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Load Sales</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <MdOutlineAddCard className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Card Sales</p>
                    </div>
                </div>
            </div>

         
        </div>
  

    
    );
  };
  
  export default AccountingSubMenu ;
  