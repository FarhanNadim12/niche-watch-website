import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Menubar from '../Shared/Menubar/Menubar';
import useAuth from '../../context/AuthProvider/useAuth';

const Review = () => {
    const { user } = useAuth();
    const [value, setValue] = React.useState(2);
    const [review, setReview] = useState('');
    const handleReview = (e) => {
        setReview(e.target.value);
    }
    const reviewObj = {
        reviewerName: user.displayName,
        reviewerEmail: user.email,
        rating: value,
        reviewDes: review
    }
    const handleSubmit = () => {
        fetch('https://radiant-bayou-30066.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewObj)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Submitted Successfully')


                }
            })

    }
    return (
        <div>
            <Menubar></Menubar>
            <h1>Review Us</h1>
            <Rating

                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <div className="input-group w-50 m-auto">

                <textarea onBlur={handleReview} className="form-control" aria-label="With textarea" placeholder="Review us"></textarea>
            </div>
            <button type="button" className="btn btn-info mt-2" onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Review;