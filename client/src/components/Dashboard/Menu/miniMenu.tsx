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


interface MiniMenuProps {
    title?: String
}
const MiniMenu: React.FC<MiniMenuProps> = ({title}) => {

    const [isHover, setIsHover] = useState(false);
    // const [isMenuHover, setIsMenuHover] = useState(false);
    const [clientInfoWindow, setClientInfoWindow] = useState(false);
    const [driverInfoWindow, setDriverInfoWindow] = useState(false);
    const [riderInfoWindow, setRiderInfoWindow] = useState(false);
    const [distributionInfoWindow, setDistributionInfoWindow] = useState(false);
    const [accountingInfoWindow, setAccountingInfoWindow] = useState(false);
    const [emailInfoWindow, setEmailInfoWindow] = useState(false);
    const [privacyInfoWindow, setPrivacyInfoWindow] = useState(false);
    const [adminInfoWindow, setAdminInfoWindow] = useState(false);
    const [activityInfoWindow, setActivityInfoWindow] = useState(false);
    const [supportInfoWindow, setSupportInfoWindow] = useState(false);

    const menuHoverIn = (menu: any) => {

        setTimeout(() => {
            if(menu === "Client")setClientInfoWindow(true)
            if(menu === "Driver")setDriverInfoWindow(true)
            if(menu === "Rider")setRiderInfoWindow(true)
            if(menu === "Distribution")setDistributionInfoWindow(true)
            if(menu === "Accounting")setAccountingInfoWindow(true)
            if(menu === "Email")setEmailInfoWindow(true)
            if(menu === "Privacy")setPrivacyInfoWindow(true)
            if(menu === "Admin")setAdminInfoWindow(true)
            if(menu === "Activity")setActivityInfoWindow(true)
            if(menu === "Support")setSupportInfoWindow(true)
        }, 300);
    }

    const menuHoverOut = (menu: any) => {

        setTimeout(() => {
            if(menu === "Client") setClientInfoWindow(false)
            if(menu === "Driver")setDriverInfoWindow(false)
            if(menu === "Rider")setRiderInfoWindow(false)
            if(menu === "Distribution")setDistributionInfoWindow(false)
            if(menu === "Accounting")setAccountingInfoWindow(false)
            if(menu === "Email")setEmailInfoWindow(false)
            if(menu === "Privacy")setPrivacyInfoWindow(false)
            if(menu === "Admin")setAdminInfoWindow(false)
            if(menu === "Activity")setActivityInfoWindow(false)
            if(menu === "Support")setSupportInfoWindow(false)
        }, 300);
    }

    const hoverIn = () => {
        if(title === "Dashboard"){
            setIsHover(true)
        } 
        //   setIsHover(true)
    }

    const hoverOut = () => {
        setIsHover(false)
    }

    const [clientSubMenu, setClientSubMenu] = useState(false)
    const openClientSubMenu = () => {
        if(!clientSubMenu){
            setClientSubMenu(true)
            setDriverSubMenu(false)
            setRiderSubMenu(false)
            setDistributionSubMenu(false)
            setAccountingSubMenu(false)
            setClientInfoWindow(false)
        }

        else
        setClientSubMenu(false)

    }

    const [driverSubMenu, setDriverSubMenu] = useState(false)
    const openDriverSubMenu = () => {
        if(!driverSubMenu){
            setClientSubMenu(false)
            setDriverSubMenu(true)
            setRiderSubMenu(false)
            setDistributionSubMenu(false)
            setAccountingSubMenu(false)
            setDriverInfoWindow(false)
        }
        
        else
        setDriverSubMenu(false)

    }

    const [riderSubMenu, setRiderSubMenu] = useState(false)
    const openRiderSubMenu = () => {
        if(!riderSubMenu){
            setClientSubMenu(false)
            setDriverSubMenu(false)
            setRiderSubMenu(true)
            setDistributionSubMenu(false)
            setAccountingSubMenu(false)
            setRiderInfoWindow(false)
        }
        else
        setRiderSubMenu(false)

    }

    const [distributionSubMenu, setDistributionSubMenu] = useState(false)
    const openDistributionSubMenu = () => {
        if(!distributionSubMenu){
            setClientSubMenu(false)
            setDriverSubMenu(false)
            setRiderSubMenu(false)
            setDistributionSubMenu(true)
            setAccountingSubMenu(false)
            setDistributionInfoWindow(false)
        }
        else
        setDistributionSubMenu(false)

    }

    const [accountingSubMenu, setAccountingSubMenu] = useState(false)
    const openAccountingSubMenu = () => {
        if(!accountingSubMenu){
            setClientSubMenu(false)
            setDriverSubMenu(false)
            setRiderSubMenu(false)
            setDistributionSubMenu(false)
            setAccountingSubMenu(true)
            setAccountingInfoWindow(false)
        }
        else
        setAccountingSubMenu(false)

    }

    return (
      <div className='absolute flex flex-col bg-blue-900 w-[4.5%] pb-10 pt-10 mb-[-3px] '>
            
            {!isHover ? 
            <div className='group py-1'>
                <div className=" border-l-4  py-1 group-border-l-4 group-hover:border-white ">
                    <div className="w-full flex flex-row items-center py-1 bg-blue-800 ">
                        <MdDashboard className= "mx-1  flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                    </div>
                </div> 
            </div>
                
            : 
            <div className='group py-1'>
                <div className="border-l-4 border-blue-900 py-1 group-border-l-4 hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300">
                        <MdDashboard className= "mx-1  flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                    </div>
                </div>
            </div>
            }
            
            <div className='group py-1' onClick={openClientSubMenu} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
            <div  onMouseEnter={() => menuHoverIn('Client')} onMouseLeave={() => menuHoverOut('Client')}
            className=" border-l-4 border-blue-900 py-1 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                    <div className='w-full flex flex-row items-center'>
                        <FaUser className= "mx-1  flex-shrink-0 " size ={20} color={"#7dd3fc"}/>
                    </div>
                    <FaGreaterThan className={`flex-shrink-0 h-4 group-hover:h-5 duration-200 transform ${clientSubMenu ? 'rotate-90': '' }`} size ={15} color={"#7dd3fc"}/>
                </div>
            </div>
            </div>

            {clientInfoWindow && (
                <div className='absolute py-1 px-4 bg-blue-900 rounded top-[16%] left-16'>
                    <p className='font-semibold text-white'>Client</p>
                </div>
            )}
                


                {clientSubMenu && (
                    <ClientSubMenu isMenuFull = {false} onMouseEnter={hoverIn} onMouseLeave={hoverOut}/>
                )}
                

              <div className='group py-1' onClick={openDriverSubMenu} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div onMouseEnter={() => menuHoverIn('Driver')} onMouseLeave={() => menuHoverOut('Driver')}
                className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                            
                            <TbSteeringWheel className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                            
                        </div>
                        <FaGreaterThan className={`flex-shrink-0 h-4 group-hover:h-5 duration-200 transform ${driverSubMenu ? 'rotate-90': '' }`} size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>
                
                {driverInfoWindow && (
                    <div className='absolute py-1 px-4 bg-blue-900 rounded top-[24%] left-16'>
                        <p className='font-semibold text-white'>Driver</p>
                    </div>
                )}


              {driverSubMenu && (
                    <DriverSubMenu isMenuFull = {false} onMouseEnter={hoverIn} onMouseLeave={hoverOut}/>
                )}

               
          
              <div className='group py-1' onClick={openRiderSubMenu} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  onMouseEnter={() => menuHoverIn('Rider')} onMouseLeave={() => menuHoverOut('Rider')}
                className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                        <GiFullMotorcycleHelmet onMouseEnter={hoverIn} className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                        </div>
                        <FaGreaterThan className={`flex-shrink-0 h-4 group-hover:h-5 duration-200 transform ${riderSubMenu ? 'rotate-90': '' }`} size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>

              {riderInfoWindow && (
                <div className='absolute py-1 px-4 bg-blue-900 rounded top-[32%] left-16'>
                    <p className='font-semibold text-white'>Rider</p>
                </div>
              )}

              {riderSubMenu && (
                    <RiderSubMenu isMenuFull = {false} onMouseEnter={hoverIn} onMouseLeave={hoverOut}/>
                )}

              <div className='group py-1' onClick={openDistributionSubMenu} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  onMouseEnter={() => menuHoverIn('Distribution')} onMouseLeave={() => menuHoverOut('Distribution')}
                className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                           
                            <FaHandshake className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                        
                        </div>
                        <FaGreaterThan className={`flex-shrink-0 h-4 group-hover:h-5 duration-200 transform ${distributionSubMenu ? 'rotate-90': '' }`} size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>

                {distributionInfoWindow && (
                    <div className='flex flex-row absolute py-1 px-4 bg-blue-900 rounded top-[40%] left-16'>
                        <p className='font-semibold text-white mr-1'>Distribution</p>
                        <p className='font-semibold text-white'>Retailer</p>
                    </div>
                )}


                {distributionSubMenu && (
                      <DistributionSubMenu isMenuFull = {false} onMouseEnter={hoverIn} onMouseLeave={hoverOut}/>
                    )}

              <div className='group py-1' onClick={openAccountingSubMenu} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  onMouseEnter={() => menuHoverIn('Accounting')} onMouseLeave={() => menuHoverOut('Accounting')}
                className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                 
                            <FaBook className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                        </div>
                        <FaGreaterThan className={`flex-shrink-0 h-4 group-hover:h-5 duration-200 transform ${accountingSubMenu ? 'rotate-90': '' }`} size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>

                {accountingInfoWindow && (
                    <div className='flex flex-row absolute py-1 px-4 bg-blue-900 rounded top-[48%] left-16'>
                         <p className='font-semibold text-white mr-1'>Accounting</p>
                         <p className='font-semibold text-white'>System</p>
                    </div>
                )}

                {accountingSubMenu && (
                    <AccountingSubMenu isMenuFull = {false} onMouseEnter={hoverIn} onMouseLeave={hoverOut}/>
                )}

              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  onMouseEnter={() => menuHoverIn('Email')} onMouseLeave={() => menuHoverOut('Email')}
                className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
    
                            <MdEmail className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>

                        </div>
                       
                    </div>
                 </div>
              </div>

              {emailInfoWindow && (
                    <div className='flex flex-row absolute py-1 px-4 bg-blue-900 rounded top-[56%] left-16'>
                         <p className='font-semibold text-white mr-1'>Email </p>
                         <p className='font-semibold text-white'>Template</p>
                    </div>
                )}
            
              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  onMouseEnter={() => menuHoverIn('Privacy')} onMouseLeave={() => menuHoverOut('Privacy')}
                className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
            
                            <MdPrivacyTip className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                        </div>
                       
                    </div>
                 </div>
              </div>

              {privacyInfoWindow && (
                    <div className='flex flex-row absolute py-1 px-4 bg-blue-900 rounded top-[64%] left-16'>
                         <p className='font-semibold text-white mr-1'>Privacy</p>
                         <p className='font-semibold text-white'>Policy</p>
                    </div>
                )}

              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  onMouseEnter={() => menuHoverIn('Admin')} onMouseLeave={() => menuHoverOut('Admin')}
                className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
   
                            <RiAdminFill className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                            
                        </div>
                       
                    </div>
                 </div>
              </div>

              {adminInfoWindow && (
                    <div className='flex flex-row absolute py-1 px-4 bg-blue-900 rounded top-[72%] left-16'>
                         <p className='font-semibold text-white w-36 '>Admin/Sub-Admin</p>
                         <p className='font-semibold text-white ml-[-4px]'>Controller</p>
                    </div>
                )}

                <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                    <div  onMouseEnter={() => menuHoverIn('Activity')} onMouseLeave={() => menuHoverOut('Activity')}
                    className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                        <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                            <div className=' w-full flex flex-row items-center '>
    
                                <FaUserClock className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                                
                            </div>
                        
                        </div>
                    </div>
              </div>

              {activityInfoWindow && (
                    <div className='flex flex-row absolute py-1 px-4 bg-blue-900 rounded top-[80%] left-16'>
                         <p className='font-semibold text-white mr-1'>Admin</p>
                         <p className='font-semibold text-white'>Activity</p>
                    </div>
                )}

              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  onMouseEnter={() => menuHoverIn('Support')} onMouseLeave={() => menuHoverOut('Support')}
                className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                           
                            <PiPhoneCallFill className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>

                        </div>
                       
                    </div>
                 </div>
              </div>

              {supportInfoWindow && (
                    <div className='absolute py-1 px-4 bg-blue-900 rounded top-[88%] left-16'>
                         <p className='font-semibold text-white'>Support</p>
                    </div>
                )}

             

           
            
            
      </div>
    );
  };
  
  export default MiniMenu;
  