import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginPage = ({loggedIn, setLoggedIn})=>{
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordChange = (event) => {
        setShowPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    function submitHandler(event) {
        event.preventDefault();
        setLoggedIn(true);
        toast.success('logged in', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
        navigate('/dashboard');
    };
    return (
        <div className="">
            <form className="flex flex-col gap-3" onSubmit={submitHandler}>
                <div className="flex flex-col gap2">
                    <label>Email Address <sup className="font-medium text-red-700">*</sup></label>
                    <input type="email" name="email" required className="bg-slate-500 rounded-[5px] p-1" placeholder="Enter your email"/>
                </div>
                <div className="flex flex-col gap2 relative">
                    <label>Password <sup className="font-medium text-red-700">*</sup></label>
                    <input type={showPassword ? 'text' : 'password'} onChange={handlePasswordChange} required name="password" className="bg-slate-500 rounded-[5px] p-1" placeholder="Enter your password"/>
                    <span onClick={togglePasswordVisibility} className="absolute bottom-[20px] right-[7px] text-[20px]">
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    <Link to="/password" className="text-[10px] text-blue-400 text-end">Forgot password?</Link>
                </div>
                <div>
                    <button className="w-full bg-yellow-400 text-black font-bold border-[1px] rounded-[5px] h-[40px]">Sign In</button>
                </div>
            </form> 
        </div>
    );
};

export default LoginPage;