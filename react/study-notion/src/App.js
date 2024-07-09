import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarTop from "./components/NavBarTop";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import {useState} from 'react';
import { ToastContainer } from "react-toastify";
import DashBoard from "./components/DashBoard";
import FormTemplate from "./components/FormTemplate";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const loginImage = "https://img.freepik.com/free-photo/smiling-female-student-writing-essay-sitting-with-laptop-floor_176420-20219.jpg?w=1060&t=st=1720427567~exp=1720428167~hmac=f55de3931501f1b3f2f602120060160a104ea7a779e5b8df8156e9612329f207";
  const signUpImage = "https://img.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink_176532-13861.jpg?t=st=1720432544~exp=1720436144~hmac=b98972fde293ad0e79e48b02cb7f7d31fc353668cd309ccfd43c69db2345b89b&w=1060"
  return (
    <div className="bg-slate-900 h-[100vh]">
      <NavBarTop loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<FormTemplate loggedIn={loggedIn} setLoggedIn={setLoggedIn}
            title="Welcome Back!"
            desc1="To keep connected with us please login with your personal info"
            desc2="Don't have an account? Sign up!"
            image={loginImage}
            formType="login"
          />}/>

        <Route path="/signup" element={<FormTemplate loggedIn={loggedIn} setLoggedIn={setLoggedIn}
            title="Join the millions learning to code with StudyNotion for free"
            desc1="Build skills for today tomorrow and beyond"
            desc2="Education to future proof your career"
            image={signUpImage}
            formType="signup"
          />}/>
          <Route path="/dashboard" element={
            <PrivateRoute loggedIn={loggedIn}>
              <DashBoard/>
            </PrivateRoute>
          }/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
