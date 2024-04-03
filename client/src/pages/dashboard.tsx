import { useState } from 'react'
import Header from '../components/admin/header';
import Menu from '../components/admin/Menu/menu';
import MiniMenu from '../components/admin/Menu/miniMenu';
import DashBoardTopBody from '../components/admin/Dashboard/DashBoardTopBody';
import BarGraph from '../components/admin/Dashboard/BarGraph/barGraph';
import { LuRefreshCw } from "react-icons/lu";


interface barData {
  labels: string[];
  datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
  }[];
}

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
    const barData: barData = {
      
      labels: ["Fair Income", "Load Sales", "Card Sales", "Card Income"], // Corrected array notation
      datasets: [{
          label: "Fair Income",
          data: [65, 59, 80, 81], // Example data
          backgroundColor: [
            '#23BCF1', // Color for the first bar
            '#2A33F2',  // Color for the second bar
            '#3A53B9',  // Color for the third bar
            '#F678F8',  // Color for the fourth bar
        ],
      }]
  };
return (
    <div className='w-screen h-screen'>
        <Header title="Dashboard" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div className={`${menuOpen ?'w-[25%]' : 'w-[25%]'} `}>
              {menuOpen ? <Menu title={"Dashboard"}/> : <MiniMenu title={"Dashboard"}/> }
            </div>
            
            <div className='h-full w-full mx-10 mt-5'>
            
              <DashBoardTopBody/>
              <hr className='w-full border-t-2 border-sky-300 ' />
                <div className='flex flex-row mt-4 h-[350px] justify-evenly'>
                  <div className='justify-center w-[70%] bg-gradient-to-b from-sky-200 via-sky-100 to-sky-100 mr-2 shadow-xl'>
                    <div className='flex flex-row bg-sky-200 h-[70px] items-center justify-between px-10 pr-5'>
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
                      <hr className='w-full border-2 border-sky-500  ' />
                      <h1 className='text-center font-bold text-blue-900 '>DAILY SALES FORECAST</h1>
                  
                      <div className=' mx-[18%] h-[250px] w-[500px] rounded-xl'>
                          <BarGraph  barData = {barData} />
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