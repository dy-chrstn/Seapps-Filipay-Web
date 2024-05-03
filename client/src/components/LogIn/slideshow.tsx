import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { FaSun } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { IoIosCloudyNight } from "react-icons/io";

const SlideShow = () => {
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

  // Function to convert numeric month to string representation
  const getMonthName = (month: number): string => {
    const monthNames: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month];
  };

  const getWeekdayName = (weekday: number): string => {
    const weekdayNames: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekdayNames[weekday];
  };

  // Getting current date
  const currentDate = new Date();
  const currentMonth = getMonthName(currentDate.getMonth());
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentWeekday = getWeekdayName(currentDate.getDay()); // 0 for Sunday, 1 for Monday, and so on

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Function to greet based on the time of the day
  const greet = () => {
    const hour = currentDate.getHours();
    if (hour < 12) {
      return { message: "Good Morning", symbol: <FaSun /> };
    } else if (hour < 18) {
      return { message: "Good Afternoon", symbol: <FaCloudSun /> };
    } else {
      return { message: "Good Evening", symbol: <IoIosCloudyNight /> };
    }
  };

  const { message, symbol } = greet();

  return (
    <div className="swiper-container shadow-lg top-0 right-0 left-0 z-0 items-center overflow-hidden h-full relative">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="/Img/login/slider-bg.png"
            alt="Slide 1"
          />
          <img
            className="absolute top-24 left-20 w-3/4 object-cover"
            src="Img/login/slide1-text.png"
            alt="Overlay 1"
          />
        </div>

        <div className="swiper-slide relative">
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="/Img/login/slider-bg.png"
            alt="Slide 2"
          />

          <div className="absolute inset-20 top-20 flex flex-col justify-center items-baseline">
            <img
              className="h-32 object-cover md:left-10 md:top-48 sm:top-48"
              src="/Img/login/slide2-text.png"
              alt="Overlay 1"
            />

            <p className="text-white font-sans font-bold  md:text-xl text-left mt-4 md:mt-8">
              Interested about our automated fare collection system
              <br /> and fleet management system?
            </p>

            <p className="text-white font-sans font-bold text-xs md:text-xl text-center md:mt-5">
              Get in touch today.
            </p>

            <a
              href="https://filipay.com.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-t from-buttonNeonPurple to-buttonTeal to-blue-500
               text-white px-1 py-2 rounded-lg text-sm md:text-sm font-semibold mt-1 md:mt-3 inline-block"
            >
              Learn More About FILIPAY.
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="swiper-slide relative">
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="/Img/login/slider-bg.png"
            alt="Slide 3"/>

          <div className="grid grid-cols-2 gap-4 absolute top-7 left-6 right-6">
            {/* Slide 3 Left Content */}
            <div className="col-span-1">
              <div
                className="p-6 rounded-lg shadow text-left"
                style={{ background: "rgba(255, 255, 255, 0.150)" }}
              >
                <p className="text-xl font-semibold tracking-tight text-slate-100 flex items-center">
                  {message}&nbsp; {symbol}
                </p>
                <p className="mb-1 text-5xl font-bold text-slate-100">
                  {currentTime}
                </p>
                <p className=" pt-1 font-normal text-lg text-slate-100">
                  {currentWeekday}, {currentMonth} {currentDay}, {currentYear}
                </p>
              </div>
              <div
                className="p-3 rounded-lg shadow text-left mt-4"
                style={{ background: "rgba(255, 255, 255, 0.150)" }}
              >
                <p className="text-xl font-bold mb-2 tracking-tight text-slate-100">
                  WHAT IS AN FMDS?
                </p>
                <p className="font-normal text-sm text-slate-100 " >
                  The FILIPAY Management Dashboard System is an online portal to
                  provide transport cooperatives with exclusive and downloadable
                  files of the daily ride transactions and other
                  easy-to-understand data from our wide list of linked FILIPAY
                  devices and applications.
                </p>
                <a
                  href="https://filipay.com.ph/fmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-t from-buttonNeonPurple to-buttonTeal to-blue-500 text-white 
                  px-1 py-1 ml-auto rounded-lg text-xs font-semibold mt-1 md:mt-3 inline-flex"
                >
                  Read More 
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Slide 3 Right Content */}
            <div className="col-span-1">
              <div
                className="p-6 rounded-lg shadow text-left"
                style={{ background: "rgba(255, 255, 255, 0.150)" }}
              >
                <p className="text-xl font-semibold mb-2 text-slate-100">
                  Lorem ipsum dolor sit amet, consectu
                </p>
                <p className="mb-1 text-sm font-normal text-slate-100">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                </p>
  
              </div>
              <div
                className="p-6 rounded-lg shadow text-left mt-4"
                style={{ background: "rgba(255, 255, 255, 0.150)" }}
              >
                <p className="text-xl font-bold mb-2 tracking-tight text-slate-100">
                  HOW CAN WE AVAIL IT?
                </p>
                <p className="font-normal text-sm text-slate-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing

                </p>
                <a
                  href="https://filipay.com.ph/fmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-t from-buttonNeonPurple to-buttonTeal to-blue-500 text-white
                   px-1 py-1 ml-auto rounded-lg text-xs font-semibold mt-1 md:mt-3 inline-flex items-center"
                >
                  Read More
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    ></path>
                  </svg>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Links */}
      <div className="absolute w-1/2 z-10 -bottom-3 m-auto left-0 right-0 flex justify-center p-10" id="links">
        <a href="https://filipay.com.ph/" className="grow w-6 h-10 me-4 text-white flex items-center justify-center rounded" style={{ backgroundColor: "rgb(22, 29, 111)" }}>
        <img src="Img\login\fp-link.png" alt="Filipay" className="w-8 h-8" />

        </a>
        <a href="https://www.linkedin.com/in/service-economy-applications-inc-sea-inc/" className="grow w-6 h-10 me-4 text-white flex items-center justify-center rounded" style={{ backgroundColor: "rgb(22, 29, 111)" }}>
        <img src="Img\login\linkedin-link.png" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://web.facebook.com/FilipayOfficial?_rdc=1&amp;_rdr" className="grow w-6 h-10 me-4 text-white flex items-center justify-center rounded" style={{ backgroundColor: "rgb(22, 29, 111)" }}>
        <img src="Img\login\fb-link.png" alt="Facebook" className="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/filipayofficial/" className="grow w-6 h-10 me-4 text-white flex items-center justify-center rounded" style={{ backgroundColor: "rgb(22, 29, 111)" }}>
        <img src="Img\login\instagram-link.png" alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="https://twitter.com/filipayofficial" className="grow w-6 h-10 me-4 text-white flex items-center justify-center rounded" style={{ backgroundColor: "rgb(22, 29, 111)" }}>
        <img src="Img\login\twitter-link.png" alt="Twitter" className="w-8 h-8" />
        </a>
        <a href="https://www.youtube.com/channel/UCfhdGa3z1_nc6Zmjwn6K7kQ" className="grow w-6 h-10 me-4 text-white flex items-center justify-center rounded" style={{ backgroundColor: "rgb(22, 29, 111)" }}>
        <img src="Img\login\youtube-link.png" alt="YouTube" className="w-8 h-8" />
        </a>
      </div>

    </div>
  );
};

export default SlideShow;
