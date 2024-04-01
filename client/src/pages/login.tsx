import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi'; 
import SlideShow from '../components/LogIn/slideshow';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [passValue, setPassValue] = useState<string>('');
    const [isValid, setIsValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const navigate = useNavigate();

    const admin = "admin";
    const pass = "1234";

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassValue(event.target.value);
    };

    const isValidInput = (value: string) => {
        // Regular expression to check for special characters and spaces
        const regex = /^[!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        return !regex.test(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission
        if (isValidInput(inputValue) && isValidInput(passValue)) {
            navigatePage(); // Navigate only if input fields are valid
        } else {
            setIsValid(false);
            setInputValue("");
            setPassValue(""); // Show error message if input fields are invalid
        }
    };

    const navigatePage = () => {
        if (inputValue === admin && passValue === pass) {
            navigate('/dashboard');
        } else {
            setIsValid(false);
            setInputValue("");
            setPassValue("");
        }
    };

    return (
        <div className="flex h-screen pl-16">
            <div className="w-full bg-white p-6 flex justify-center items-center">
                <div className="max-w-md w-full">
                    <div className=' flex justify-center'>
                        <img className="-mt-1 w-32 h-32" src="/Img/Filipay-logo-893d1a80.png" alt="FiliPay Logo" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <p className="text-4xl font-bold font-sans text-left">Sign In</p>
                        <p className="py-4 mb-0 text-lg font-medium font-sans">Email Address</p>
                        <input className='border border-gray focus:outline-none p-2 w-full rounded-lg mb-4'
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="name@company.com"
                            required={true}
                        />
                        <p className="text-lg font-medium font-sans mb-3">Password</p>
                        <div className="relative">
                            <input className='border border-gray focus:outline-none p-2 w-full rounded-lg mb-6'
                                type={showPassword ? 'text' : 'password'} // Toggle password visibility
                                value={passValue}
                                onChange={handlePassChange}
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
                        <p className="text-sm font-sans text-right text-blue-500 cursor-pointer mb-4">Forgot Password?</p>
                        <div className="flex items-center mb-6">
                            <input className='border border-gray rounded-lg mr-2'
                                type="checkbox"
                                value={passValue}
                                onChange={handlePassChange}
                                required={true}
                            />
                            <p className="text-sm font-sans">Keep me logged in</p>
                        </div>
                        <div className='flex justify-center'>
                            {!isValid ? <p className="text-xs font-medium font-sans mt-5 text-red-500">Invalid Username or Password</p> : null}
                        </div>
                        <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-xl text-lg px-5 py-2.5 w-full'>SIGN IN</button>
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
