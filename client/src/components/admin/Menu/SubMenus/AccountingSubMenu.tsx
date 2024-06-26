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
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

const AccountingSubMenu: React.FC<AccountingSubMenuProps> = ({ isMenuFull, onMouseEnter, onMouseLeave }) => {

    // const navigate = useNavigate();

    // const navigatePage = (page: any) => {

    //     navigate(page)
    // }

    const navigate = useNavigate();

    const navigatePage = (page: any) => {

        navigate(page)
    }


    return (
        <div className={` w-52 ${isMenuFull ? 'ml-4' : 'absolute md:left-16 lg:left-20 top-64 bg-dashboardPurple'} p-2 pl-1 rounded-lg`}>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                onClick={() => navigatePage('/AccountingSystem/AccountManagement')}
                className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                        <MdAccountBox className='mx-2 flex-shrink-0' size={20} color={"white"} />
                        <p className='text-white font-bold font-sans text-xs'>Account Management</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                onClick={() => navigatePage('/AccountingSystem/FareIncome')}
                className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                        <FaMoneyBill1Wave className='mx-2 flex-shrink-0' size={20} color={"white"} />
                        <p className='text-white font-bold font-sans text-xs'>Fare Income</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                onClick={() => navigatePage('/AccountingSystem/CashIncome')}
                className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                        <FaPesoSign className='mx-2 flex-shrink-0' size={20} color={"white"} />
                        <p className='text-white font-bold font-sans text-xs'>Cash Income</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                onClick={() => navigatePage('/AccountingSystem/LoadSales')}
                className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                        <BsGraphUpArrow className='mx-2 flex-shrink-0' size={20} color={"white"} />
                        <p className='text-white font-bold font-sans text-xs'>Load Sales</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                onClick={() => navigatePage('/AccountingSystem/CardSales')}
                className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
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

export default AccountingSubMenu;
