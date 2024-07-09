import React from 'react';
import { FcGoogle } from "react-icons/fc";
import LoginPage from './LoginPage';
import SignUpForm from './SignUpForm';
const FormTemplate = ({title, desc1, desc2, image, formType, setLoggedIn})=>{
    const backgroundImage = "https://img.freepik.com/free-vector/gradient-connection-background_23-2150518074.jpg?w=1060&t=st=1720466419~exp=1720467019~hmac=ec800143ba028c3dc01e0f7be920fb254b92af6096fb484685044486e4da0040";
    return (
        <div className="flex items-center justify-between text-white gap-[100px] pt-10 pl-[27rem] pr-[30rem]">
            <div className="flex flex-col gap-3 w-3/6">
                <h1 className="font-bold text-[30px]">{title}</h1>
                <div>
                    <p className="text-[#9ea29f] font-light">{desc1}</p>
                    <p className="text-[#317e44] font-light">{desc2}</p>
                </div>
                {
                    formType === 'signup'?
                    (<SignUpForm setLoggedIn={setLoggedIn}/>):(<LoginPage setLoggedIn={setLoggedIn}/>)
                }
                <div className="flex gap-1 justify-center items-center">
                    <div className="border-[1px] w-11/12 h-[1px] border-gray-600"></div>
                    <p className="text-gray-600 text-[15px]">OR</p>
                    <div className="border-[1px] w-11/12 h-[1px] border-gray-600"></div>
                </div>
                <button className="flex items-center gap-2 font-light border-[1px] p-3 justify-center rounded-md border-gray-600"><FcGoogle/> Sign in with google</button>

            </div>

            <div className="w-3/6 mb-auto relative hover:scale-110 transition-all duration-200">
                <img 
                    src={image}
                    alt='not found'
                    className="w-[400px] z-[2] relative ">
                </img>
                <img 
                    src={backgroundImage}
                    alt='not found'
                    className="w-[400px] right-[40px] top-[10px] absolute z-[1]">
                </img>
            </div>
        </div>
    );
};

export default FormTemplate;