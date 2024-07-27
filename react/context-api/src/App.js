import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import "./App.css";
import { AppContext } from "./context/AppContext";
import {useContext, useEffect} from 'react';
import Home from './components/Home';
import BlogPage from './components/BlogPage';
import TagPage from './components/TagPage';
import CategoryPage from './components/CategoryPage';

function App() {

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(()=>{
    const page =  searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    }else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    }else{
      fetchBlogPosts(page);
    }
  }, [location.pathname, location.search]);
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
  );
}

export default App;
