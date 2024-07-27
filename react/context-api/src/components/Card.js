import { NavLink} from "react-router-dom";

const Card = ({post}) =>{
    return (
        <div className="flex flex-col gap-2">
            <div>
                <NavLink to={`/blog/${post.id}`} className="font-extrabold text-[15px] hover:underline transition-all duration-200">{post.title}</NavLink>
                <p className="font-serif text-[12px]">By {post.author} on <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`} className="hover:underline transition-all duration-200 font-bold">{post.category}</NavLink></p>
                <p className="font-serif text-[12px]">Posted on {post.date}</p>
            </div>
            <div>
                <p className="font-serif text-[15px]"> {post.content}</p>
            </div>
            <div className="flex gap-2 underline text-blue-600 cursor-pointer text-[14px]">
                {
                post.tags.map((tag, index) => {
                    let tagNew = tag.replaceAll(" ","-")
                    return (
                        <p key={index}><NavLink to={`/tags/${tagNew}`}>#{tag}</NavLink></p>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Card;