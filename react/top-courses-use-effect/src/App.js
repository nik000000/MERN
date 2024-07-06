import "./App.css";
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import {useEffect, useState} from 'react';
import {apiUrl, filterData} from './data';
import { toast } from "react-toastify";
import Spinner from './components/Spinner';
import Cards from "./components/Cards";
function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  useEffect(() => {
    console.log("inside useeffect");
    const fetchData = async() => {
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const coursesData = await res.json();
        setCourses(coursesData.data);
      }catch(error){
        toast.error("something went wrong");
      }
      setLoading(false);
    }
    fetchData();
    
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-[#0d2e5a44]">
        <NavBar></NavBar>
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
          <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
            {
              loading ? (<Spinner></Spinner>) :
              (<Cards courses={courses} category={category}/>)
            }
          </div>
        </div>
    </div>
  );
}

export default App;
