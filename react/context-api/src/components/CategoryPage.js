import Header from "./Header";
import Footer from "./Footer";
import Blogs from "./Blogs";
import { useLocation, useNavigate } from 'react-router-dom';

function CategoryPage(){
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    return (
    <div className="flex flex-col items-center mt-[60px] mb-[120px] gap-2">
        <Header/>
        <div className="flex gap-2 w-[700px] justify-start">
            <button className="border-[1px] rounded-md p-1 w-[80px] text-[14px]" onClick={()=> navigation(-1)}>Back</button>
            <h1>
                Blogs Category <span>{category}</span>
            </h1>
        </div>
        <Blogs/>
        <Footer/>
    </div>
    );
}

export default CategoryPage;