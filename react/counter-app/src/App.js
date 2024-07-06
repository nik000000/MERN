import "./App.css";
import {useState} from 'react';
function App() {
  const [counter, setCounter] = useState(0);
  function handleDecrement(){
    if(counter-1 < 0){
      setCounter(0);
    }else{
      setCounter(counter-1);
    }
  }
  function handleIncrement(){
    setCounter(counter+1);
  }

  function resetHandler(){
    setCounter(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium">Increment and Decrement</div>
      <div className="flex flex-row text-[25px] text-[#344151] bg-white justify-center gap-12 py-3 rounded-small">
        <button onClick={handleDecrement} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
        <div className="font-bold gap-12 text-5xl">{counter}</div>
        <button onClick={handleIncrement} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
      </div>
      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>
    </div>
  );
}

export default App;
