import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slice/CounterSlice";

const Counter = () =>{
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="flex gap-3 justify-center items-center h-[800px]">
            <button onClick={()=>dispatch(increment())}>increment</button>
            <p>{count}</p>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
        </div>
    );
}

export default Counter;