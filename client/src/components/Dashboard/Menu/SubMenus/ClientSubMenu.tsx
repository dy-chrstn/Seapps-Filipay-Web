//import React from 'react'

// import React, { useState, useEffect } from 'react'

import { MdEmojiTransportation } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { TbDeviceMobileCog } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { IoBusiness } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

type ClientSubMenuProps = {
    isMenuFull: boolean;
  };
  const ClientSubMenu: React.FC<ClientSubMenuProps> = ({ isMenuFull }) => {

    const navigate = useNavigate();

    const navigatePage = (page: any) => {
        
        navigate(page)
    }

    return (
        // <div className='bg-blue-900 w-52 ml-10 p-2 pl-1 rounded-lg'>
        <div onClick = {() => navigatePage('/TransportCooperative')}className={`bg-blue-900 w-52 ${isMenuFull ? 'ml-10' : 'absolute left-16 top-20 '} p-2 pl-1 rounded-lg`}> 

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <MdEmojiTransportation className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Transport Cooperative</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <RiCustomerService2Fill className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Vehicle Service</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <FaCar className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Vehicle</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <TbDeviceMobileCog className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Device</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <TbTruckDelivery className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Distributor</p>
                    </div>
                </div>
            </div>

            <div className='border-l-4 border-blue-900 hover:border-white duration-300 w-48 py-1 '>
                <div className='relative bg-blue-900 w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                    <IoBusiness className='mx-2 flex-shrink-0' size={20} color={"white"} />
                    <p className='text-white font-bold font-sans text-xs'>Retailer</p>
                    </div>
                </div>
            </div>
            
        </div>
  

    
    );
  };
  
  export default ClientSubMenu ;
  