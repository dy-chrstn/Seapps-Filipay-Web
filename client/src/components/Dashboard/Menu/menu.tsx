//import React from 'react'
import { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { PiPhoneCallFill } from "react-icons/pi";
import { TbSteeringWheel } from "react-icons/tb";
import { FaUserClock } from "react-icons/fa6";
import ClientSubMenu from './SubMenus/ClientSubMenu';
import DriverSubMenu from './SubMenus/DriverSubMenu';
import RiderSubMenu from './SubMenus/RiderSubMenu';
import DistributionSubMenu from './SubMenus/DistributionSubmenu';
import AccountingSubMenu from './SubMenus/AccountingSubMenu';

interface MenuProps{
    title:String
}

const Menu: React.FC<MenuProps> = ({title}) => {

    console.log(title)

    const [isHover, setIsHover] = useState(false);
    const [isTitleDashboard, setIstitleDashboard] = useState(title)

    const hoverIn = () => {
        if(title === "Dashboard"){
            setIstitleDashboard("")
        }
        setIsHover(true)
    }
    const hoverOut = () => {
        if(title === "Dashboard"){
            setIstitleDashboard("Dashboard")
        }
        setIsHover(false)
    }

    const [clientSubMenu, setClientSubMenu] = useState(false)
    const openClientSubMenu = () => {
        if(!clientSubMenu)
        setClientSubMenu(true)
        else
        setClientSubMenu(false)

    }

    const [driverSubMenu, setDriverSubMenu] = useState(false)
    const openDriverSubMenu = () => {
        if(!driverSubMenu)
        setDriverSubMenu(true)
        else
        setDriverSubMenu(false)

    }

    const [accountingSubMenu, setAccountingSubMenu] = useState(false)
    const openAccountingSubMenu = () => {
        if(!accountingSubMenu)
        setAccountingSubMenu(true)
        else
        setAccountingSubMenu(false)

    }

    const [riderSubMenu, setRiderSubMenu] = useState(false)
    const openRiderSubMenu = () => {
        if(!riderSubMenu)
        setRiderSubMenu(true)
        else
        setRiderSubMenu(false)

    }

    const [distributionSubMenu, setDistributionSubMenu] = useState(false)
    const openDistributionSubMenu = () => {
        if(!distributionSubMenu)
        setDistributionSubMenu(true)
        else
        setDistributionSubMenu(false)

    }


    return (
        <div className='flex flex-col bg-blue-900 absolute w-[20.27%] pb-10 pt-10 mb-[-3px] transparent-caret' 
        style={{ backgroundImage: "url('/public/Img/Dashboard/dashboard-img.png')" }}>
{/* 
            <div className=" w-[48%] py-3">
                    <div className="   flex items-center flex-row w-full h-[10&] ">
                        <img className=" w-10 h-10 flex-shrink-0 mx-3 bg-white" src="/Img/Dashboard/FiliPayIcon.png" alt="FiliPay Logo" />
                        <div className="text-center ">
                            <p className="text-sky-300 font-bold">Management</p>
                            <p className="text-sky-300 font-bold">Dashboard</p>
                        </div>
                    </div>
            </div> */}

                { isTitleDashboard === "Dashboard" ? 
                     <div className='group py-1'>
                        <div className="border-l-4 py-1 group-border-l-4 group-hover:border-white">
                            <div className="w-full flex flex-row items-center py-1 bg-blue-800">
                            <MdDashboard className="mx-2 flex-shrink-0" size={20} color={"#7dd3fc"}/>
                            <p className="font-bold text-xs font-sans text-white">Dashboard</p>
                            </div>
                        </div> 
                     </div>
                 : 
                    <div className='group py-1'>
                        <div className="border-l-4 border-blue-900 py-1 group-border-l-4 hover:border-white transition-all duration-300">
                        <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300">
                            <MdDashboard className="mx-2 flex-shrink-0 gap-2" size={20} color={"#7dd3fc"}/>
                            <p className="font-bold text-xs font-sans text-white">Dashboard</p>
                        </div>
                    </div>
             </div>
                    
                }
            
            <div className='group py-1' onClick={openClientSubMenu} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
            <div  className=" border-l-4 border-blue-900 py-1 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                    <div className='w-full flex flex-row items-center'>
                        <FaUser className= "mx-2 flex-shrink-0 " size ={20} color={"#7dd3fc"}/>
                     
                        <p className="font-bold text-xs font-sans text-white">Client</p>
                    </div>

                    <FaGreaterThan className={`flex-shrink-0 h-4 group-hover:h-5 duration-200 transform ${clientSubMenu ? 'rotate-90': '' }`} size ={15} color={"#7dd3fc"}/>
                </div>
            </div>
            </div>
           
                {clientSubMenu && (
   
                    <ClientSubMenu isMenuFull = {true} onMouseEnter={hoverIn} onMouseLeave={hoverOut}/>
                )}
                

              <div className='group py-1' onClick={openDriverSubMenu} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                         
                            <TbSteeringWheel className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                            <p className="font-bold text-xs font-sans text-white">Driver</p>
                        </div>
                        <FaGreaterThan className={`flex-shrink-0 h-4 group-hover:h-5 duration-200 transform ${driverSubMenu ? 'rotate-90': '' }`} size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>

              {driverSubMenu && (
                    <DriverSubMenu isMenuFull = {true} onMouseEnter={hoverIn} onMouseLeave ={hoverOut}/>
                )}

               
          
              <div className='group py-1' onClick={openRiderSubMenu} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                        <GiFullMotorcycleHelmet className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                        
                            <p className="font-bold text-xs font-sans text-white">Rider</p>
                        </div>
                        <FaGreaterThan className={`flex-shrink-0 h-4 group-hover:h-5 duration-200 transform ${riderSubMenu ? 'rotate-90': '' }`} size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>

              {riderSubMenu && (
                    <RiderSubMenu isMenuFull = {true} onMouseEnter={hoverIn} onMouseLeave ={hoverOut}/>
                )}

              <div className='group py-1' onClick={openDistributionSubMenu} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                           
                            <FaHandshake className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                        
                            <p className="font-bold text-xs font-sans text-white">Distribution Retailer</p>
                        </div>
                        <FaGreaterThan className={`flex-shrink-0 h-4 group-hover:h-5 duration-200 transform ${distributionSubMenu ? 'rotate-90': '' }`} size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>

                {distributionSubMenu && (
                      <DistributionSubMenu isMenuFull = {true} onMouseEnter={hoverIn} onMouseLeave ={hoverOut}/>
                    )}

              <div className='group py-1' onClick={openAccountingSubMenu} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                 
                            <FaBook className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                            <p className="font-bold text-xs font-sans text-white">Accounting System</p>
                        </div>
                        <FaGreaterThan className={`flex-shrink-0 h-4 group-hover:h-5 duration-200 transform ${accountingSubMenu ? 'rotate-90': '' }`} size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>

                {accountingSubMenu && (
                    <AccountingSubMenu isMenuFull = {true} onMouseEnter={hoverIn} onMouseLeave ={hoverOut}/>
                )}

              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
    
                            <MdEmail className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                            <p className="font-bold text-xs font-sans text-white">Email Template</p>
                        </div>
                       
                    </div>
                 </div>
              </div>
            
              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
            
                            <MdPrivacyTip className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                            <p className="font-bold text-xs font-sans text-white">Privacy Policy</p>
                        </div>
                       
                    </div>
                 </div>
              </div>

              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
   
                            <RiAdminFill className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                            <p className="font-bold text-xs font-sans text-white">Admin/Sub-Admin Controller</p>
                        </div>
                       
                    </div>
                 </div>
              </div>

              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
            
                            <FaUserClock className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                            <p className="font-bold text-xs font-sans text-white">Admin Activity</p>
                        </div>
                    </div>
                 </div>
              </div>


              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                           
                            <PiPhoneCallFill className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                            <p className="font-bold text-xs font-sans text-white">Support</p>
                        </div>
                       
                    </div>
                 </div>
              </div>

          

             

           
            
            
      </div>
    );
  };
  
  export default Menu;
  