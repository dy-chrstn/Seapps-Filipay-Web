import React, { useState } from 'react'
import SlideShow from '../components/LogIn/slideshow';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [passValue, setPassValue] = useState<string>('');
    const [isValid, setIsValid] = useState(true)

    const admin = "admin"
    const pass = "1234"
const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handlePassChange = (event: any) => {
      setPassValue(event.target.value);
    };

    const isValidInput = (value: string) => {
        // Regular expression to check for special characters and spaces
        const regex = /^[!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
        return !regex.test(value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault(); // Prevent default form submission
        if (isValidInput(inputValue) && isValidInput(passValue)) {
            navigatePage(); // Navigate only if input fields are valid
        } else {
            setIsValid(false);
            setInputValue("")
            setPassValue("") // Show error message if input fields are invalid
        }
    };

    const navigate = useNavigate();
    
    const navigatePage = () => {


        if(inputValue === admin && passValue === pass){
            navigate('/dashboard')
        }

        else{
            setIsValid(false); 
            setInputValue("")
            setPassValue("")
            
        }
    }  

    
return (
    <div className='w-screen h-screen flex flex-row items-center'>
        <div className='  w-1/2 h-screen flex '>
            <div className = " w-full flex flex-col my-7">
                <div className=' flex justify-center items-center'>
                    <img className=" w-40 h-40" src="/Img/Filipay-logo-893d1a80.png" alt="FiliPay Logo" />
                </div>
            
                <form className = " px-9 mx-1" onSubmit={handleSubmit}>
                    <p className = "text-4xl font-bold font-sans">Sign In</p>
                  
                    <p className = "text-lg font-medium font-sans mb-3" >Email</p>
                    <input className='border border-gray focus:outline-none p-2 w-full rounded-lg' 
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        required={true}
                    />
                    

                    <p className = "text-lg font-medium font-sans mb-3 mt-5" >Password</p>
                    <input className='border border-gray focus:outline-none p-2 w-full rounded-lg' 
                        type="password"
                        value={passValue}
                        onChange={handlePassChange}
                        placeholder="Enter your Password"
                        required={true}
                    />

                    <div className ="flex flex-row items-center mt-4">
                        <input className='border border-gray rounded-lg mr-1' 
                            type="checkbox"
                            value={passValue}
                            onChange={handlePassChange}
                            placeholder="Enter your Password"
                            required={true}
                        />
                        <p className = "text-sm font-sans">Keep me logged in</p>
                    </div>

                    <div className='flex w-full justify-center'>
                    {!isValid ? <p className = "text-xs font-medium font-sans mt-5 text-red-500" >Invalid Username or Password</p>
                    : <p className = "mt-9" ></p>}
            
                    </div>
                   
                  <button type = "submit" className='text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-xl text-lg px-5 py-2.5  mb-2 mt-2 w-full'>SIGN IN</button>

                    
                
                </form>
            </div>  
        
        </div>



        <div className=' flex w-full h-screen py-7 px-3'>
            {/* <img className = "w-full flex rounded-2xl" src = "/public/Img/login/background-image-b201e33a.jpg"/>
            <img className = "absolute my-32 mx-16" src = "/public/Img/login/first-slide-text-4b72792a.png"/> */}
            <SlideShow/>
        </div>
    </div>
  );

}


export default LogIn;