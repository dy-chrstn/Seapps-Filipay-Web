import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import SlideShow from "../components/LogIn/slideshow";
import { useNavigate } from "react-router-dom";
import coopApi from "../api/coop";

const LogIn = () => {
  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFields((states) => ({
      ...states,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    try {
      const response = await coopApi.loginCoop(fields.email, fields.password); 

      console.log("Response: ", response);

      const indicator = await response.messages.message

      if(response.messages.code === 0) {
        navigate("/dashboard");
      }else{
        setMessage(indicator);
        setIsValid(false);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setIsValid(false);
    }
  };

  return (
    <div className="flex h-screen pl-16">
      <div className="w-full bg-white p-6 flex justify-center items-center">
        <div className="max-w-md w-full">
          <div className=" flex justify-center">
            <img
              className="-mt-1 w-32 h-32"
              src="/Img/Filipay-logo-893d1a80.png"
              alt="FiliPay Logo"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <p className="text-4xl font-bold font-sans text-left">Sign In</p>
            <p className="py-4 mb-0 text-lg font-medium font-sans">
              Email Address
            </p>
            <input
              className="border border-gray focus:outline-none p-2 w-full rounded-lg mb-4"
              type="text"
              name="email"
              id="email"
              value={fields.email}
              onChange={handleInput}
              placeholder="name@company.com"
              required={true}
            />
            <p className="text-lg font-medium font-sans mb-3">Password</p>
            <div className="relative">
              <input
                className="border border-gray focus:outline-none p-2 w-full rounded-lg mb-6"
                type={showPassword ? "text" : "password"} // Toggle password visibility
                value={fields.password}
                name="password"
                id="password"
                onChange={handleInput}
                placeholder="Enter your Password"
                required={true}
              />
              <span
                className="absolute top-3 right-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            <p className="text-sm font-sans text-right text-blue-500 cursor-pointer mb-4">
              Forgot Password?
            </p>
            <div className="flex items-center mb-6">
              <input
                className="border border-gray rounded-lg mr-2"
                type="checkbox"
                value={""}
                onChange={handleInput}
              />
              <p className="text-sm font-sans">Keep me logged in</p>
            </div>
            <div className="flex justify-center">
              {!isValid ? (
                <p className="text-xs font-medium font-sans mt-5 text-red-500">
                  {message}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-xl text-lg px-5 py-2.5 w-full"
            >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
      {/* Right side with slideshow */}
      <div className="w-2/3 m-10 hidden md:block">
        <SlideShow />
      </div>
    </div>
  );
};

export default LogIn;
