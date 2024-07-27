import Header from './Header';
import Blogs from './Blogs';
import Footer from './Footer';

function Home(){
    return (
        <div className="flex flex-col justify-center items-center overfloww-x-hidden mt-[60px] mb-[100px]">
            <Header/>
            <Blogs/>
            <Footer/>
        </div>
    );
}

export default Home;