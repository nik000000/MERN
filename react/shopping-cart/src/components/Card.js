
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {add, remove} from '../redux/slices/cartSlice';

const Card = ({product}) => {
    const title = product.title.substr(0, 14);
    const description = product.description.substr(0, 70);
    const {cart} = useSelector((state)=> state);
    const dispatch = useDispatch();

    function addToCart(){
        toast.success("added to cart");
        dispatch(add(product));
    }

    function removeFromCart(){
        toast.success("removed from cart");
        dispatch(remove(product.id));
    }

    function descriptionHandle(){
        console.log("description");
    }
    return (
        <div className="flex flex-col gap-4 w-[270px] h-[380px] mt-3 p-3 shadow-lg justify-center items-center rounded-xl
                cursor-pointer hover:scale-110 transition-all duration-[0.5s] hover:focus-visible:ease-in ease-in-out hover:shadow-4xl border-[1px] border-slate-200" 
                onClick={descriptionHandle}>
            <h2 className="text-[18px] font-bold text-slate-700">{title}...</h2>
            <p className="font-thin text-[10px] ml-8 mr-4 w-[160px] text-slate-600">{description}...</p>
            <img src={product.image} alt="Not Found" className="h-[180px]" />
            <div className="flex gap-5 items-center w-full justify-between mt-3">
                <p className="text-green-700 font-bold">${product.price}</p>
                {
                    cart.some((p)=>p.id===product.id) ? (
                        <div>
                            <button className="border-[2px] border-slate-800 p-1 rounded-3xl text-[13px] w-[120px] font-bold hover:bg-slate-700 hover:text-white
                            transition-all duration-[0.5s]" onClick={removeFromCart}>Remove</button>
                        </div>
                    ) : (
                        <button className="border-[2px] border-slate-800 p-1 rounded-3xl text-[13px] w-[120px] font-bold hover:bg-slate-700 hover:text-white
                            transition-all duration-[0.5s]" onClick={addToCart}>ADD TO CART</button>
                    )
                }
                
            </div>
        </div>
    );
};

export default Card;