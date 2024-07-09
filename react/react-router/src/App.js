import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from './components/Home';
import MainHandler from './components/MainHandler';
function App() {
  return (
    <div className="mx-auto">
      <nav>
          <ul className="flex gap-2">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            <li>
              <NavLink to="/labs">Support Labs</NavLink>
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<MainHandler/>}>
          <Route index element={<Home/>}/>
          <Route path="/support" element={<div>Support Page</div>}></Route>
          <Route path="/about" element={<div>About Page</div>}></Route>
          <Route path="/labs" element={<div>Support Lab Page</div>}></Route>
          <Route path="/*" element={<div>Not Found</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
