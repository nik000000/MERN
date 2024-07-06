import React from 'react';
import Card from './Card';
import {useState} from 'react';

const Cards = ({courses, category}) =>{
    const [likedCourses, setLikedCourses] = useState([]);
    let allCourses = [];
    function getCourse(){
        if(category === "All"){
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course)
                });
            })
        }else{
            return courses[category];
        }
        return allCourses;
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourse().map((course)=>{
                    return (
                        <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                    );
                })
            }
        </div>
    );
};

export default Cards;