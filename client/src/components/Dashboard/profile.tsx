//import React from 'react'
import { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { MdDriveEta } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { PiPhoneCallFill } from "react-icons/pi";

const Menu = () => {

    const [isHover, setIsHover] = useState(false);

    const hoverIn = () => {
        setIsHover(true)
    }
    const hoverOut = () => {
        setIsHover(false)
    }


    return (
      <div className='bg-blue-900 absolute flex flex-col w-64 pt-7 top-[9%]'>

            {!isHover ? 
            <div className='group py-1'>
                <div className=" border-l-4  py-1 group-border-l-4 group-hover:border-white ">
                    <div className="w-full flex flex-row items-center py-1 bg-blue-800 ">
                        <MdDashboard className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                        <p className="font-bold text-xs font-sans text-white">Dashboard</p>
                    </div>
                </div> 
            </div>
                
            : 
            <div className='group py-1'>
                <div className="border-l-4 border-blue-900 py-1 group-border-l-4 hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300">
                        <MdDashboard className= "mx-2 flex-shrink-0 gap-2 " size ={20} color={"#7dd3fc"}/>
                        <p className="font-bold text-xs font-sans text-white">Dashboard</p>
                    </div>
                </div>
            </div>
            }
            
            <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
            <div  className=" border-l-4 border-blue-900 py-1 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                    <div className='w-full flex flex-row items-center'>
                        <FaUser className= "mx-2 flex-shrink-0 " size ={20} color={"#7dd3fc"}/>
                     
                        <p className="font-bold text-xs font-sans text-white">Client</p>
                    </div>
                    <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                </div>
            </div>
            </div>
           
{/* 
            <div>
                <div className='flex flex-row'>
                    icon
                    <p>Transport Cooperative</p>
                </div>

            </div> */}
              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                         
                            <MdDriveEta className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                            <p className="font-bold text-xs font-sans text-white">Driver</p>
                        </div>
                        <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>
          
              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                        <GiFullMotorcycleHelmet className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                        
                            <p className="font-bold text-xs font-sans text-white">Rider</p>
                        </div>
                        <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>

              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                           
                            <FaHandshake className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                        
                            <p className="font-bold text-xs font-sans text-white">Distribution Retailer</p>
                        </div>
                        <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>

              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
                 
                            <FaBook className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                            <p className="font-bold text-xs font-sans text-white">Accounting System</p>
                        </div>
                        <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>

              <div className='group py-1' onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
                <div  className="border-l-4 py-1 border-blue-900 group-hover:border-l-4 group-hover:border-white transition-all duration-300">
                    <div className="w-full flex flex-row items-center py-1 group-hover:bg-blue-800 transition-all duration-300 pr-5">
                        <div className=' w-full flex flex-row items-center '>
    
                            <MdEmail className= "mx-2 flex-shrink-0" size ={20} color={"#7dd3fc"}/>
                            <p className="font-bold text-xs font-sans text-white">Email Template</p>
                        </div>
                        <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
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
                        <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
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
                        <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
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
                        <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
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
                        <FaGreaterThan className="flex-shrink-0 h-4 group-hover:h-5 duration-200" size ={15} color={"#7dd3fc"}/>
                    </div>
                 </div>
              </div>


             

           
            
            
      </div>
    );
  };
  
  export default Menu;
  