import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const {cart} = useSelector((state)=>state);
    return (
        <div className="flex justify-evenly gap-[450px] items-center h-20 mx-auto bg-slate-900">
            <NavLink to="/" className="h-[80px]">
                <img src="https://ecomzy-shopping-cart.vercel.app/logo.png" alt="Not Found" 
                    className="w-[170px] pt-3 pb-3"/>
            </NavLink>
            
            <div className="flex gap-5 justify-center items-center">
                <NavLink to="/">
                    <p className="text-white  text-[17px]">Home</p>
                </NavLink>
                <NavLink to="/cart" className="bg-[#081523] text-white] relative">
                    {
                        cart.length === 0 ? (<div></div>):(
                            <div className=" text-white font-bold absolute animate-bounce rounded-full text-center bg-green-600 text-[10px] w-[18px] h-[18px] p-[1px] right-[-4px] top-[-7px]">{cart.length}</div>
                        )
                    }
                    
                    <BsCart4 className="h-[25px] w-[25px] text-white"/>
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;