import React from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
const Card = ({review, setReviewId, reviewId}) => {
    function surpriseHandler(){
        let id = getRandomNumberInRange(1, 5);
        while(id === reviewId){
            id = getRandomNumberInRange(1, 5);
        }
        setReviewId(id);
    }

    function leftClickHandler(){
        let newId = reviewId;
        if(reviewId === 1){
            newId = 5;
        }else{
            newId = reviewId - 1;
        }
        setReviewId(newId);
    }
    const getRandomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
    function rightClickHandler(){
        setReviewId((prev)=> prev = (prev)%5+1);
    }
    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10]'>
                <img src={review.image} alt='not found' className='aspect-square rounded-full w-[140px] h-[140px] z-[24]'/>
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div>
            </div>
            <div className='flex flex-col'>
                <h1 className='tracking-wider text-center mt-7 font-bold text-2xl capitalize'>{review.name}</h1>
                <p className='text-center mt-1 mb-7 text-violet-300 capitalize text-small'>{review.job}</p>
            </div>
            <FaQuoteLeft className='text-violet-400 mx-auto top-5'/>
            <p className='text-center mt-4 text-slate-500'>{review.text}</p>
            <FaQuoteRight className='text-violet-400 mx-auto top-5 mt-5'/>
            <div className='flex text-3xl top-5 gap-3 text-violet-400 text-bold justify-center items-center mt-5'>
                <button onClick={leftClickHandler} className='cursor-pointer hover:text-violet-500'
                    ><FiChevronLeft/></button>
                <button onClick={rightClickHandler} className='cursor-pointer hover:text-violet-500'><FiChevronRight/></button>
            </div>
            <div className='mt-5'>
                <button onClick={surpriseHandler} 
                    className='bg-violet-400 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise me</button>
            </div>
        </div>
    );
};

export default Card;