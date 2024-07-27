import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {useState, useEffect} from 'react';
import CartItem from "./CartItem";


const Cart = ()=>{
    const navigate = useNavigate();
    const {cart} = useSelector((state)=>state);
    const [totalAmount, setTotalAmount] = useState();
    function handleClick(){
        navigate("/");
    }

    useEffect(() => {
        setTotalAmount(cart.reduce((total, item) =>{
            return total + item.price;
        },0));
    }, [cart]);
    return (
        <div className="flex justify-center items-start min-h-screen mt-[30px] w-full">
            {
                cart.length > 0 ? (
                <div className="flex justify-between gap-16">
                    <div className="flex flex-col gap-16">
                        {
                            cart.map(
                                (item ,index) => {
                                    return <CartItem item={item} key={index}/>
                                }
                            )
                        }
                    </div>
                    <div className="flex flex-col gap-4 justify-between">
                        <div className="flex flex-col gap-2">
                            <p className="text-green-700 text-[25px] font-bold font-serif">Your Cart</p>
                            <h1 className="font-serif text-green-700 text-[40px] font-semibold">SUMMARY</h1>
                            <p className="font-bold text-[20px] text-slate-800">Total Items: {cart.length}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-[20px] text-slate-800">Total Amount: ${totalAmount}</p>
                            <button className="w-[450px] border-[2px] border-green-700 p-2 rounded-md bg-green-700 text-white font-bold text-[20px]
                                hover:text-green-700 hover:bg-white transition-all duration-[0.5s]">Checkout Now</button>
                        </div>
                    </div>
                </div>
                ) :(
                    <div className="flex flex-col gap-4 my-auto mt-[300px]">
                        <h1 className="text-[25px] font-semibold text-slate-700">Your Cart Is Empty!</h1>
                        <button onClick={handleClick} className="border-[1px] border-green-800 p-3 rounded-xl text-center font-bold bg-green-800 text-white
                        hover:bg-white hover:text-green-800 transition-all duration-500">Shop Now</button>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;