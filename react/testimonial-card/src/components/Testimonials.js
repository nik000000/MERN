import React from 'react';
import Card from './Card';
import { useState } from 'react';
const Testimonials = ({reviews}) => {
    const [reviewId, setReviewId] = useState(1);

    function getReview(){
        let reviewWithid;
        reviews.forEach(review => {
            if(review.id === reviewId){
                reviewWithid = review;
            }
        });
        return reviewWithid;
    }
    return(
        <div className='flex flex-col w-[85vw] md:w-[700px] justify-center items-center bg-slate-100 p-10 mt-10 transition-all duration-700
            hover:shadow-xl'>
            <Card review={getReview(reviewId)} setReviewId={setReviewId} reviewId={reviewId}/>
        </div>
    );
};

export default Testimonials;