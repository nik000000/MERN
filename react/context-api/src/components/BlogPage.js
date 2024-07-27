import {useState, useContext, useEffect} from 'react';
import { AppContext } from '../context/AppContext';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Card from './Card';
import Spinner from './Spinner';

function BlogPage(){
    const [blog, setBlog] = useState(null);
    const [relatedBogs, setRelatedBogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading, setLoading} = useContext(AppContext);
    const blogId = location.pathname.split('/').at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBogs(data.relatedBlogs);
        }catch(e){
            console.error(e);
            setBlog(null);
            setRelatedBogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname]);
    return (
        <div className="flex flex-col items-center mt-[60px] mb-[160px] gap-2">
            <Header/>
            <div className="flex gap-2 w-[700px] justify-start">
                <button className="border-[1px] rounded-md p-1 w-[80px] text-[14px]" onClick={()=> navigation(-1)}>Back</button>
            </div>
            { 
                loading ? (<Spinner/>) : 
                    (blog ? (
                        <div className="flex flex-col w-[700px] h-screen gap-5">
                            <Card post={blog}/>
                            <h1 className="text-[30px] font-bold">Related Blogs</h1>
                            {
                                relatedBogs.map((blog) =>{
                                    return (<Card post={blog} key={blog.id}/>)
                                })
                            }
                        </div>
                    ) : (<p>No blog Found</p>))
            }
        </div>
    );
}

export default BlogPage;