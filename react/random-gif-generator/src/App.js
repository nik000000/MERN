import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";
import CustomHookUse from "./components/CustomHookUse";

function App() {
  return (
    <div className="flex flex-col w-full h-screen background relative overflow-x-hidden items-center p-[20px]">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] text-4xl font-bold">RANDOM GIF</h1>
      <div className="flex flex-col justify-center items-center p-5">
        <Random/>
        <Tag/>
        <CustomHookUse/>
      </div>
    </div>
  );
}

export default App;
