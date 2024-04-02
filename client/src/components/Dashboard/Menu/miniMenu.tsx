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
import ClientSubMenu from './SubMenus/ClientSubMenu';
import DriverSubMenu from './SubMenus/DriverSubMenu';
import RiderSubMenu from './SubMenus/RiderSubMenu';
import DistributionSubMenu from './SubMenus/DistributionSubmenu';
import AccountingSubMenu from './SubMenus/AccountingSubMenu';


interface MiniMenuProps {
    title: String
}
const MiniMenu: React.FC<MiniMenuProps> = ({title}) => {

    const [isHover, setIsHover] = useState(false);
    // const [isMenuHover, setIsMenuHover] = useState(false);
    const [clientInfoWindow, setClientInfoWindow] = useState(false);
    const [driverInfoWindow, setDriverInfoWindow] = useState(false);
    const [riderInfoWindow, setRiderInfoWindow] = useState(false);
    const [distributionInfoWindow, setDistributionInfoWindow] = useState(false);
    const [accountingInfoWindow, setAccountingInfoWindow] = useState(false);

    const menuHoverIn = (menu: any) => {

        if(menu === "Client"){
            setTimeout(() => {
                setClientInfoWindow(true)
            }, 300);
        } 

        if(menu === "Driver"){
            setTimeout(() => {
                setDriverInfoWindow(true)
            }, 300);
        } 

        if(menu === "Rider"){
            setTimeout(() => {
                setRiderInfoWindow(true)
            }, 300);
        } 

        if(menu === "Distribution"){
            setTimeout(() => {
                setDistributionInfoWindow(true)
            }, 300);
        } 

        if(menu === "Accounting"){
            setTimeout(() => {
                setAccountingInfoWindow(true)
            }, 300);
        } 
    }


  const menuHoverOut = (menu: any) => {

        if(menu === "Client"){
            setTimeout(() => {
                setClientInfoWindow(false)
            }, 300);
        } 

        if(menu === "Driver"){
            setTimeout(() => {
                setDriverInfoWindow(false)
            }, 300);
        } 

        if(menu === "Rider"){
            setTimeout(() => {
                setRiderInfoWindow(false)
            }, 300);
        } 

        if(menu === "Distribution"){
            setTimeout(() => {
                setDistributionInfoWindow(false)
            }, 300);
        } 

        if(menu === "Accounting"){
            setTimeout(() => {
                setAccountingInfoWindow(false)
            }, 300);
        } 
    }
    // const hoverInClient = () => {
    //     setTimeout(() => {
    //         setIsMenuHover(true)
    //     }, 300);
    // }

    // const hoverInDriver = () => {
    //     setTimeout(() => {
    //         setIsMenuHover(true)
    //     }, 300);
    // }

    // const hoverInRider = () => {
    //     setTimeout(() => {
    //         setIsMenuHover(true)
    //     }, 300);
    // }

    // const hoverInDistribution = () => {
    //     setTimeout(() => {
    //         setIsMenuHover(true)
    //     }, 300);
    // }

    // const hoverInAccounting = () => {
    //     setTimeout(() => {
    //         setIsMenuHover(true)
    //     }, 300);
    // }
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
                    <div className='absolute py-1 px-4 bg-blue-900 rounded top-[16%] left-16'>
                        <p className='font-semibold text-white'>Driver</p>
                    </div>
                )}


              {driverSubMenu && (
                    <DriverSubMenu isMenuFull = {false} onMouseEnter={hoverIn} onMouseLeave={hoverOut}/>
                )}

               
          
              <div className='group py-1' onClick={openRiderSubMenu} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                        <GiFullMotorcycleHelmet onMouseEnter={hoverIn} className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                        </div>
                        <FaGreaterThan className={`flex-shrink-0 h-4 group-hover:h-5 duration-200 transform ${riderSubMenu ? 'rotate-90': '' }`} size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>

              {/* {isMenuHover && (
                <div className='absolute py-1 px-4 bg-blue-900 rounded top-[16%] left-16'>
                    <p className='font-semibold text-white'>Rider</p>
                </div>
              )} */}

              {riderSubMenu && (
                    <RiderSubMenu isMenuFull = {false} onMouseEnter={hoverIn} onMouseLeave={hoverOut}/>
                )}

              <div className='group py-1' onClick={openDistributionSubMenu} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                           
                            <FaHandshake className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                        
                        </div>
                        <FaGreaterThan className={`flex-shrink-0 h-4 group-hover:h-5 duration-200 transform ${distributionSubMenu ? 'rotate-90': '' }`} size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>

                {/* {isMenuHover && (
                    <div className='absolute py-1 px-4 bg-blue-900 rounded top-[16%] left-16'>
                        <p className='font-semibold text-white'>Distribution Retailer</p>
                    </div>
                )} */}

                {distributionSubMenu && (
                      <DistributionSubMenu isMenuFull = {false} onMouseEnter={hoverIn} onMouseLeave={hoverOut}/>
                    )}

              <div className='group py-1' onClick={openAccountingSubMenu} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                 
                            <FaBook className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                        </div>
                        <FaGreaterThan className={`flex-shrink-0 h-4 group-hover:h-5 duration-200 transform ${accountingSubMenu ? 'rotate-90': '' }`} size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>
                {/* {isMenuHover && (
                        <div className='absolute py-1 px-4 bg-blue-900 rounded top-[16%] left-16'>
                            <p className='font-semibold text-white'>AccountingSystem</p>
                        </div>
                )} */}
                {accountingSubMenu && (
                    <AccountingSubMenu isMenuFull = {false} onMouseEnter={hoverIn} onMouseLeave={hoverOut}/>
                )}

              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
    
                            <MdEmail className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>

                        </div>
                       
                    </div>
                 </div>
              </div>
            
              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
            
                            <MdPrivacyTip className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                        </div>
                       
                    </div>
                 </div>
              </div>

              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
   
                            <RiAdminFill className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                            
                        </div>
                       
                    </div>
                 </div>
              </div>

              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                           
                            <PiPhoneCallFill className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>

                        </div>
                       
                    </div>
                 </div>
              </div>

              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
            
                            <MdPrivacyTip className= "mx-1 flex-shrink-0" size ={20} color={"#7dd3fc"}/>

                        </div>
                    </div>
                 </div>
              </div>


             

           
            
            
      </div>
    );
  };
  
  export default MiniMenu;
  