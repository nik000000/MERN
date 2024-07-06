import React from 'react';
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({course, likedCourses, setLikedCourses}) => {
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=> prev.filter((cid)=>cid !== course.id));
            toast.warning("like removed: "+course.title);
        }else{
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((prev)=>[...prev, course.id]);
            }
            toast.success("liked course: " + course.title);
        }
    }
    return (
        <div className="flex flex-col bg-[#0c0b34] w-[300px] rounded-ms overflow-hidden bg-opacity-80 hover:scale-105 duration-[1s]">
            <div className="relative">
                <img src={course.image.url} alt="not found"/>
                <div className="absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-[-15px] grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                        
                    </button>
                </div>
            </div>
            
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {
                        course.description.length > 100 ? (course.description.substr(0,100)+"...") : (course.description)
                    }
                </p>
            </div>
        </div>
    );
}
export default Card;