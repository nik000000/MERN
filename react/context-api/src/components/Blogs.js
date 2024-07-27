import {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';
const Blogs = () => {
    const {loading, posts} = useContext(AppContext);
    return(
        <div className="flex flex-col w-[700px] h-screen gap-5">
            {
                loading ? (<Spinner/>) : (
                    posts.length === 0 ? (<div>No Post found</div>) : (
                        posts.map(
                            (post) =>{
                                return <Card post={post} key={post.id}/>
                            }
                        )
                    )
                )
            }
        </div>
    );
};

export default Blogs;