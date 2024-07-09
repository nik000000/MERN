import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpForm = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({
    CreatePassword: false,
    ConfirmPassword: false,
  });
  const [active, setActive] = useState('Student');
  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoggedIn(true);
    toast.success('Logged in', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    navigate('/dashboard');
  };

  const selectHandler = (event) => {
    const selectedValue = event.target.getAttribute('value');
    setActive(selectedValue);
  };

  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={submitHandler}>
        <div className="flex gap-3 p-[0.10rem] bg-slate-500 w-1/2 justify-center items-center border-[1px] border-[#68696633] rounded-[30px]">
          <div
            className={`p-2 rounded-[30px] w-1/2 text-center ${
              active === 'Student' ? 'bg-slate-900' : 'bg-slate-500'
            } cursor-pointer`}
            value="Student"
            name="Student"
            onClick={selectHandler}
          >
            Student
          </div>

          <div
            className={`p-2 rounded-[30px] w-1/2 text-center ${
              active === 'Instructor' ? 'bg-slate-900' : 'bg-slate-500'
            } cursor-pointer`}
            value="Instructor"
            name="Instructor"
            onClick={selectHandler}
          >
            Instructor
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <label>First Name <sup className="font-medium text-red-700">*</sup></label>
            <input required
              type="text"
              name="firstName"
              className="bg-slate-500 rounded-[5px] p-1"
              placeholder="Enter First Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Last Name <sup className="font-medium text-red-700">*</sup></label>
            <input required
              type="text"
              name="lastName"
              className="bg-slate-500 rounded-[5px] p-1"
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label>Email Address <sup className="font-medium text-red-700">*</sup></label>
          <input required
            type="email"
            name="email"
            className="bg-slate-500 rounded-[5px] p-1"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 relative">
            <label>Create Password <sup className="font-medium text-red-700">*</sup></label>
            <input required
              type={showPassword.CreatePassword ? 'text' : 'password'}
              name="CreatePassword"
              className="bg-slate-500 rounded-[5px] p-1"
              placeholder="Enter your password"
            />
            <span
              onClick={() => togglePasswordVisibility('CreatePassword')}
              className="absolute bottom-[8px] right-[4px] text-[20px] cursor-pointer"
            >
              {showPassword.CreatePassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="flex flex-col gap-2 relative">
            <label>Confirm Password <sup className="font-medium text-red-700">*</sup></label>
                <input required
                type={showPassword.ConfirmPassword ? 'text' : 'password'}
                name="ConfirmPassword"
                className="bg-slate-500 rounded-[5px] p-1"
                placeholder="Confirm your password"
                />
                <span
                onClick={() => togglePasswordVisibility('ConfirmPassword')}
                className="absolute bottom-[8px] right-[4px] text-[20px] cursor-pointer"
                >
                {showPassword.ConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>
            </div>
        <div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold border-[1px] rounded-[5px] h-[40px]"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
