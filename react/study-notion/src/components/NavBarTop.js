import React from 'react';
import { Link , NavLink, useNavigate} from 'react-router-dom';
import { FcSoundRecordingCopyright } from "react-icons/fc";
import './NavBarTop.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBarTop = ({loggedIn, setLoggedIn}) => {
    const navigate = useNavigate();
    function loginHandler(){
        navigate('/login');
    }
    function signUpHandler(){
        navigate('/signup');
    }

    function logOutHandler(){
        setLoggedIn(false);
        toast.success('logged out', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            });
        navigate('/login');
    }
    function dashBoardHandler(){
        navigate('/dashboard');
    }
    return (
        <div className="pt-[20px] flex flex-col justify-center items-center pb-[10px]">
            <nav className="flex gap-[300px] items-center">
                <div>
                   <Link to="/" className="flex gap-[0.2rem] text-white"> <FcSoundRecordingCopyright className="h-[25px] w-[25px]"/>StudyNotion</Link>
                </div>
                <ul className="flex gap-7">
                    <li>
                        <NavLink to="/" className="text-white p-[5px]">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="text-white p-[5px]">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="text-white p-[5px]">Contact</NavLink>
                    </li>
                </ul>


                <ul className="flex gap-3 items-center text-center ">
                    
                        
                    {!loggedIn &&<li >
                        <button className="button" formType="login" onClick={loginHandler}>Login</button>
                    </li>
                    }
                    { !loggedIn &&
                        <li >
                            <button className="button" formType="signup" onClick={signUpHandler}>Sign Up</button>
                        </li>
                    }
                    { loggedIn &&
                        <li >
                            <button className="button" onClick={logOutHandler}>Logout</button>
                        </li>
                    }
                    {
                        loggedIn &&
                        <li >
                            <button className="button" onClick={dashBoardHandler}>Dashboard</button>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default NavBarTop;