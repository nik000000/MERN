import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Blogs from './Blogs';

function TagPage(){
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
        <div className="flex flex-col justify-center items-center mt-[60px] mb-[120px]">
            <Header/>
            <div className="flex gap-2 w-[700px] justify-start">
                <button className="border-[1px] rounded-md p-1 w-[80px] text-[14px]" onClick={()=> navigation(-1)}>Back</button>
                <h1 className="font-bold text-[15px]">
                    Blogs on <span className="font-bold">{tag}</span>
                </h1>
            </div>
            <Blogs/>
            <Footer/>
        </div>
    );
}

export default TagPage;