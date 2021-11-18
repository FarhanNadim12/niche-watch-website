import React, { useEffect, useState } from 'react';
import AllReview from '../AllReview/AllReview';

const AllReviews = () => {
    const [allReviews, setAllReviews] = useState([]);
    useEffect(() => {
        fetch('https://radiant-bayou-30066.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])
    return (
        <div className="container">
            <h1>Reviews: {allReviews.length}</h1>
            <div className="row w-100 ">
                {
                    allReviews.map(allReview => <AllReview allReview={allReview} key={allReview._id}></AllReview>)
                }
            </div>
        </div>
    );
};

export default AllReviews;