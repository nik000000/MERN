import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {remove} from '../redux/slices/cartSlice';

function CartItem({item}){
    const dispatch = useDispatch();
    function remoFromCart(){
        dispatch(remove(item.id));
        toast.success("item removed successfully");
    }
    return (
        <div className="flex gap-[40px] w-full">
            <div>
                <img src={item.image} alt="Not Found" className="h-[220px] w-[180px]"/>
            </div>
            <div className="flex flex-col gap-4 w-[400px]">
                <h1 className="font-semibold text-slate-700 text-[23px]">{item.title}</h1>
                <p className="text-slate-800 text-[16px] font-serif">{item.description}</p>
                <div className="flex justify-between">
                    <p className="text-green-700 font-bold">${item.price}</p>
                    <div className="bg-red-200 rounded-full p-[7px] text-[30px] cursor-pointer hover:bg-red-400">
                        <MdDelete className="hover:text-green-300 text-[25px]" onClick={remoFromCart}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;