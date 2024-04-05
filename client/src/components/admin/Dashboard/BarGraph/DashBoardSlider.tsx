import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

import DailySales from "./DailySales";
import MonthlySales from "./MonthlySales";
import AnnualSales from "./AnnualSalesForecast";

interface barData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
}

const dailySalesLabels = {

  Label1: "Fair Income",
  Label2: "Load Sales",
  Label3: "Card Sales",
  Label4: "Card Income"

}

const annualSalesLabels = {

  Label1: "Fair Income",
  Label2: "Load Sales",
  Label3: "Card Sales",
}

const DashBoardSlider = () => {

  const dailySales: barData = {
    labels: [dailySalesLabels.Label1, dailySalesLabels.Label2, dailySalesLabels.Label3, dailySalesLabels.Label4],
    datasets: [{

      data: [65, 59, 80, 81], // Example data
      backgroundColor: [
        "#23BCF1", // Color for the first bar
        "#2A33F2", // Color for the second bar
        "#3A53B9", // Color for the third bar
        "#F678F8", // Color for the fourth bar
      ],
    }]
  };
  
  const Days = Array.from({ length: 30 }, (_, index) => (index + 1).toString());
  
  const Data = [];
  for (let i = 0; i < 30; i++) {
      Data.push(Math.floor(Math.random() * 101));
  }

  Data.sort((a, b) => a - b);
  
  const monthlySales: barData = {
    labels: Days, // Corrected array notation
    datasets: [
      {
        data: Data, // Example data
        backgroundColor: [
          "#112FA7", // Color for the first bar
        ],
      },
      
      
    ],
  };
  
  const annualSales: barData = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "ARL",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ], // Corrected array notation
    datasets: [
      {
        // data: [65, 59, 80, 81, 70, 30, 72, 77, 87, 60, 63, 50], // Example data
        data: [65, 81, 72, 56, 52, 45, 78, 98, 76, 78, 44, 56],
        backgroundColor: [
          "#BDE1F1", // Color for the first bar
        ],
      },
      {
        data: [59, 70, 34, 75, 89, 88, 76, 65, 67, 54, 56, 44], // Example data
        backgroundColor: [
          "#6DA3C2", // Color for the first bar
        ],
      },
      {
        data: [80, 30, 45, 67, 78, 98, 76, 54, 54, 78, 88, 89], // Example data
        backgroundColor: [
          "#40468D", // Color for the first bar
        ],
      },
    ],
  };

  
  
  
  
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container shadow-lg top-0 right-0 left-0 z-0 items-center overflow-hidden h-full relative">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <h1 className="text-center font-bold text-blue-900 ">
            DAILY SALES FORECAST
          </h1>
          <div className="flex flex-row pr-28">
            <DailySales barData={dailySales} />
              <div className="flex flex-col items-left justify-end ml-4 mb-8">
                <div className="flex flex-row items-center w-[100px]">
                  <div className="bg-[#23BCF1] h-[10px] w-[10px] mr-1 rounded-lg"></div>
                  <span className="text-xs font-bold">{dailySalesLabels.Label1}</span>
                </div>
                <div className="flex flex-row items-center">
                  <div className="bg-[#2A33F2] h-[10px] w-[10px] mr-1  rounded-lg"></div>
                  <span className="text-xs font-bold">{dailySalesLabels.Label2}</span>
                </div>
                <div className="flex flex-row items-center">
                  <div className="bg-[#3A53B9] h-[10px] w-[10px] mr-1  rounded-lg"></div>
                  <span className="text-xs font-bold">{dailySalesLabels.Label3}</span>
                </div>
                <div className="flex flex-row items-center">
                  <div className="bg-[#F678F8] h-[10px] w-[10px] mr-1  rounded-lg"></div>
                  <span className="text-xs font-bold">{dailySalesLabels.Label4}</span>
                </div>
              </div>
          </div>
        </div>
        <div className="swiper-slide relative">
          
          <h1 className="text-center font-bold text-blue-900 ">
            MONTHLY FORECAST
          </h1>
          <div className="flex flex-row pr-28">
            <MonthlySales barData={monthlySales} />
            <div className="flex flex-col items-center justify-center ml-4 mb-8">
                <div className="flex flex-row items-center w-[100px]">
                  <div className="bg-[#112FA7] h-[10px] w-[10px] mr-1 rounded-lg"></div>
                  <span className="text-xs font-bold">Days</span>
                </div>
              </div>
          </div>  
          
        </div>
        <div className="swiper-slide relative">
   
          <h1 className="text-center font-bold text-blue-900 ">
            ANNUAL SALES FORECAST
          </h1>
          <div className="flex flex-col mx-12 pb-12">
            <AnnualSales barData={annualSales} />
            <div className="flex flex-row items-center justify-evenly mt-4">
                <div className="flex flex-row items-center w-[100px]">
                  <div className="bg-[#BDE1F1] h-[10px] w-[10px] mr-1 rounded-lg"></div>
                  <span className="text-xs font-bold">{annualSalesLabels.Label1}</span>
                </div>
                <div className="flex flex-row items-center">
                  <div className="bg-[#6DA3C2] h-[10px] w-[10px] mr-1  rounded-lg"></div>
                  <span className="text-xs font-bold">{annualSalesLabels.Label2}</span>
                </div>
                <div className="flex flex-row items-center">
                  <div className="bg-[#40468D] h-[10px] w-[10px] mr-1  rounded-lg"></div>
                  <span className="text-xs font-bold">{annualSalesLabels.Label3}</span>
                </div>
              </div>
          </div>
     
        </div>
      </div>
    </div>
  );
};

export default DashBoardSlider;
