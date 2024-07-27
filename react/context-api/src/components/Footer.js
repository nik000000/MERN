import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {useContext} from 'react';

const Footer = () => {
    const {pageSize, pageCount, handlePageChange} = useContext(AppContext);
    const location = useLocation()
    
    function prevHandler(){
        if(pageCount === 0){
            return;
        }
        const pagePath = location.pathname.split('/')[1];
        const pathValue = location.pathname.split('/')[2];
        if(pagePath === "categories"){
            handlePageChange(pageCount-1, null, pathValue);
        }else if(pagePath === "tags"){
            handlePageChange(pageCount-1, pathValue);
        }else{
            handlePageChange(pageCount-1);
        }
    }

    function nextHandler(){
        if(pageCount === pageSize){
            return;
        }
        const pagePath = location.pathname.split('/')[1];
        const pathValue = location.pathname.split('/')[2];
        if(pagePath === "categories"){
            handlePageChange(pageCount+1, null, pathValue);
        }else if(pagePath === "tags"){
            handlePageChange(pageCount+1, pathValue);
        }else{
            handlePageChange(pageCount+1);
        }
    }
        
    return(
        <div className="text-center bottom-0 fixed w-full flex flex-col items-center z-10 bg-white h-[50px] gap-2">
            <div className="border-[2px] h-[2px] w-full shadow-md"></div>
            <div className="flex gap-[600px] w-[850px] justify-between">
                <div className="flex gap-5">
                    {
                        pageCount > 1 ? (<button className="border-[1px] rounded-md p-1 w-[80px] text-[14px]" onClick={prevHandler}>Previous</button>) : (
                            <div></div>
                        )
                    }
                    {
                        pageCount < pageSize ? (<button className="border-[1px] rounded-md p-1 w-[80px] text-[14px]" onClick={nextHandler}>Next</button>):(<div></div>)
                    }
                    
                </div>
                <div>
                    {pageCount} of {pageSize}
                </div>
            </div>
        </div>
    );
};

export default Footer;