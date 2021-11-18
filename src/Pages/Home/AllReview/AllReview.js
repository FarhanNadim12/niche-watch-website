import React from 'react';
import Rating from 'react-rating';

const AllReview = (props) => {
    const { reviewerName, reviewerEmail, rating, reviewDes } = props.allReview;
    return (


        <div className="card col-md-3">
            <h5 className="card-title">{reviewerName}</h5>
            <h6 className="card-subtitle mb-2 text-muted"><Rating
                style={{ color: "orange" }}
                readonly
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
            ></Rating></h6>
            <p className="card-text">{reviewDes}</p>

        </div>


    );
};

export default AllReview;