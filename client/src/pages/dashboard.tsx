import { useState } from 'react'
import Header from '../components/admin/header';
import Menu from '../components/admin/Menu/menu';
import MiniMenu from '../components/admin/Menu/miniMenu';
import DashBoardTopBody from '../components/admin/Dashboard/DashBoardTopBody';
import { LuRefreshCw } from "react-icons/lu";
import DashBoardSlider from '../components/admin/Dashboard/BarGraph/DashBoardSlider';

const Dashboard: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }
    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = (event:any) => {
      setSelectedOption(event.target.value);
    };

    
return (
    <div className='w-screen h-screen'>
        <Header title="Dashboard" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div className={`${menuOpen ?'w-[25%]' : 'w-[25%]'} `}>
              {menuOpen ? <Menu title={"Dashboard"}/> : <MiniMenu title={"Dashboard"}/> }
            </div>
            
            <div className='h-full w-[75%] mx-10 mt-5 '>
              <DashBoardTopBody/>
              <hr className='w-full border-t-2 border-sky-300  ' />
                <div className='flex flex-row mt-4 h-[350px] justify-evenly bg-green-300'>
                  
                  <div className='  2xl:w-[50%] w-[70%] px-32 shadow-xl bg-gradient-to-b from-sky-200 via-sky-100 to-sky-100'>
                  <div className='flex flex-row bg-pink-300 h-[70px] w-[100%] items-center justify-between px-10 pr-5'>
                      <div className="flex flex-row items-center justify-between w-full rounded ">
                            {/* leftside */}
                        <div className='flex flex-row items-center '> 
                          <p className='text-[.70rem] text-blue-500 mr-2 font-semibold'>Month</p>
                              <label htmlFor="dropdown"></label>
                                <select id="dropdown" value={selectedOption} onChange={handleChange}>
                                  <option value="option1">January</option>
                                  <option value="option2">February</option>
                                  <option value="option3">March</option>
                                  <option value="option4">April</option>
                                  <option value="option5">May</option>
                                  <option value="option6">June</option>
                                  <option value="option7">July</option>
                                  <option value="option8">August</option>
                                  <option value="option9">September</option>
                                  <option value="option10">October</option>
                                  <option value="option11">November</option>
                                  <option value="option12">December</option>
                                </select>

      

                              <p className='text-[.70rem] text-blue-500 font-semibold mx-2'>Year</p>

                              <label htmlFor="dropdown"></label>
                                <select id="dropdown" value={selectedOption} onChange={handleChange}>
                                  <option value="option1">2024</option>
                                  <option value="option2">2023</option>
                                  <option value="option3">2022</option>
                                  <option value="option4">2021</option>
                                  <option value="option5">2020</option>
                                  <option value="option6">2019</option>
                                  <option value="option7">2018</option>
                                  <option value="option8">2017</option>
                                  {/* <option value="option9">September</option>
                                  <option value="option10">October</option>
                                  <option value="option11">November</option>
                                  <option value="option12">December</option> */}
                                  </select>
                        </div>
                              {/* RightSide */}
                        <div className='flex flex-row items-center'>
                        <p className='text-[.70rem] text-blue-500 mr-2 font-semibold'>Month</p>
                              <label htmlFor="dropdown"></label>
                                <select id="dropdown" value={selectedOption} onChange={handleChange}>
                                  <option value="option1">Monthly</option>
                                  <option value="option2">Yearly</option>
                                  <option value="option3">Weekly</option>
                                  <option value="option4">Daily</option>
                                  {/* <option value="option5">May</option>
                                  <option value="option6">June</option>
                                  <option value="option7">July</option>
                                  <option value="option8">August</option>
                                  <option value="option9">September</option>
                                  <option value="option10">October</option>
                                  <option value="option11">November</option>
                                  <option value="option12">December</option> */}
                                </select>
                          <LuRefreshCw className='mx-2' size={17} color={"black"}/>
                        </div>
                      </div>
                    </div>
                    {/* Graph Container  */}
                    <div className=' '>
                          <DashBoardSlider />
                    </div>
                  </div>
                    <div className='bg-white border-4 rounded-sm w-[20%]'>
                    </div>

                </div>
            </div>
          
        </div>

    </div>
  );

}


export default Dashboard;

