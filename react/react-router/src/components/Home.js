import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    function clickHandler(){
        navigate("/about");
    }
    return(
        <div>
            Home Page<br/>
            <button onClick={clickHandler}>About</button>
        </div>
    );
};

export default Home;