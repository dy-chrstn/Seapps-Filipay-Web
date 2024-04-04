import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { FaSun } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { IoIosCloudyNight } from "react-icons/io";
import DailySales from "./DailySales";
import MonthlySales from "./MonthlySales";
import AnnualSales from "./AnnualSalesForecast";

interface barData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}
const DashBoardSlider = () => {

  const dailySales: barData = {
    labels: ["Fair Income", "Load Sales", "Card Sales", "Card Income"], // Corrected array notation
    datasets: [
      {
        label: "Fair Income",
        data: [65, 59, 80, 81], // Example data
        backgroundColor: [
          "#23BCF1", // Color for the first bar
          "#2A33F2", // Color for the second bar
          "#3A53B9", // Color for the third bar
          "#F678F8", // Color for the fourth bar
        ],
      },
    ],
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
        label: "Fair Income",
        data: Data, // Example data
        backgroundColor: [
          "#23BCF1", // Color for the first bar
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
        label: "Fair Income",
        data: [65, 59, 80, 81, 70, 30, 72, 77, 87, 60, 63, 50], // Example data
        backgroundColor: [
          "#23BCF1", // Color for the first bar
          "#2A33F2", // Color for the second bar
          "#3A53B9", // Color for the third bar
          "#F678F8", // Color for the fourth bar
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
          <DailySales barData={dailySales} />
        </div>
        <div className="swiper-slide relative">
          
          <h1 className="text-center font-bold text-blue-900 ">
            MONTHLY FORECAST
          </h1>
          <MonthlySales barData={monthlySales} />
        </div>
        <div className="swiper-slide relative">
   
          <h1 className="text-center font-bold text-blue-900 ">
            ANNUAL SALES FORECAST
          </h1>
          <AnnualSales barData={annualSales} />
        </div>
      </div>
    </div>
  );
};

export default DashBoardSlider;
