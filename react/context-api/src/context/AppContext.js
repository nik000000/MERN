import {createContext, useState} from 'react';
import { baseUrl } from '../BaseURl';
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [pageSize, setPageSize] = useState(0);

    const value ={
        posts, setPosts,
        loading, setLoading,
        pageCount, setPageCount,
        pageSize, setPageSize,
        fetchBlogPosts, handlePageChange
    };

    // filling data
    async function fetchBlogPosts(page=1, tag=null, category=null){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            tag = tag.replaceAll("-", " ");
            url += `&tag=${tag}`;
        }

        if(category){
            category = category.replaceAll("-", " ");
            url += `&category=${category}`;
        }
        try{
            const result = await fetch(url);
            const data = await result.json();
            setPageCount(data.page);
            setPosts(data.posts);
            setPageSize(data.totalPages); 
        }catch(e){
            setPageCount(1);
            setPosts([]);
            setPageSize(0);
        }
        setLoading(false);
    }

    function handlePageChange(page, tag=null, category=null){
        setPageCount(page);
        //navigate({search: `?page=${page}`});
        fetchBlogPosts(page, tag, category);
    }

    return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>;
}