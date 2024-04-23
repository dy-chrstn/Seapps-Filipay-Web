//import React from 'react'

import { useState,} from 'react'

import { IoIosNotifications } from "react-icons/io";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './header.css';

interface HeaderProps {
  onClick: () => void; 
  title: string;

}

const Header: React.FC<HeaderProps> = ({onClick, title }) => {

  const navigate = useNavigate();

  const profileMenuOpen = () => {

    if(!isProfileVisible)
    setIsProfileVisible(true)

    else setIsProfileVisible(false)
  }

  const menuOpen = () => {

    if(!menuVisible)
    setMenuVisible(true)

    else setMenuVisible(false)
  }

  const navigatePage = (page: any) => {
    navigate(page)
  }

  
  const [isProfileVisible, setIsProfileVisible] = useState(false)
  const [menuVisible, setMenuVisible] = useState(true)
  

  

    return (
      <div className='flex flex-row items-start w-screen mb-[-3px] gap-7'>

        {menuVisible ?
        
           <div className=" bg-dashboardPurple py-1 border-b-4 border-b-blue-900 lg:pr-1.5 2xl:pr-1.5 2xl:max-w-auto w-auto">
           <div className="   flex items-center flex-row py-3 pr-[.1rem] ">
             <img onClick={() => {onClick(); menuOpen();}} className=" w-10 h-10 flex-shrink-0 mx-3 bg-white" src="/Img/Dashboard/FiliPayIcon.png" alt="FiliPay Logo" />
           </div>
       </div>
            
      
        : <div className=" bg-dashboardPurple w-auto lg:w-auto border-b-4 border-b-dashboardPurple">
            <div className=" flex items-center flex-row py-3 ">
              <img onClick={() => {onClick(); menuOpen();}}  className=" w-10 h-10 flex-shrink-0 mx-3 bg-white" src="/Img/Dashboard/FiliPayIcon.png" alt="FiliPay Logo" />
              <div className="text-center lg:pr-[6.4rem] 2xl:pr-[6.45rem]">
                  <p className="text-sky-300 font-bold">Management</p>
                  <p className="text-sky-300 font-bold">Dashboard</p>
              </div>
            </div>
          </div> 
        }
        

        <div className="  py-3 w-full  h-[10%] border-b-2 flex flex-row justify-between items-center transparent-caret" >   
        <p className="text-blue-900 text-3xl font-sans font-bold">{title}</p>

            <div onClick={(profileMenuOpen)} className="  py-1 w-[30%] flex flex-row items-center justify-end mr-10 transparent-caret">
                  <IoIosNotifications className="mr-7" size={24} color={"black"} />
                <p className="flex flex-row font-bold font-sans text-sm">Juan Dela Cruz</p>
                <img className=" object-cover w-10 h-10 flex-shrink-0 mx-3 bg-white rounded-full" src="/Img/Dashboard/profile/profileIcon.avif" alt="FiliPay Logo" />
                  <TbTriangleInvertedFilled className="ml-1 flex-shrink-0" size={8} color={"black"}/>
            </div>
        </div>

       

        {isProfileVisible && (

          <div className='absolute border border-gray-200 bg-white right-10 shadow-md top-12 z-10 '>
                <div onClick={() => navigatePage('/profile') } className='flex flex-row items-center hover:bg-gray-300 w-full px-4 py-2'> 
                <FaUser className="mr-3 flex-shrink-0" size={12} color={"black"}/>
                  <p>Profile</p>
                </div>
                <div onClick = {() => navigatePage('/')}className='flex flex-row items-center px-4 py-2 hover:bg-gray-300'> 
                <FaSignOutAlt className="mr-3 flex-shrink-" size={12} color={"black"}/>
                  <p>Sign Out</p>
                </div>
          </div>
        )}

      </div>
    );
  };
  
  export default Header;
  