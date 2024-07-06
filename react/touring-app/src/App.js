import "./App.css";
import Tours from "./components/Tours";
import {useState} from "react";
import data from "./data";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour=>tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className="flex flex-col justify-center items-center h-[100vh]">
         <h2 className="text-[20px] font-extrabold">No Tours Left</h2>
         <button className="btn-white btn-red mt-[18px] px-[80px] py-[10px] border-[1px] rounded-[10px] text-[18px] font-bold bg-[#07213421]
                   hover:bg-blue-900 hover:text-white transition-all duration-[0.5s]" onClick={()=>setTours(data)}>Refresh</button>
      </div>
     );
  }
  return (
   <div className="app">
      <Tours tours={tours} removeTour={removeTour}></Tours>
   </div>
  );
}

export default App;
