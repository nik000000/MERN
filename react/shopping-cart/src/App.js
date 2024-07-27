import "./App.css";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import {Routes, Route} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="w-full">
      <div>
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
