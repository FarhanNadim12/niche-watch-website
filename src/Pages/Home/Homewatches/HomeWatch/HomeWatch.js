import React from 'react';
import { Link } from 'react-router-dom';

const HomeWatch = (props) => {
    const { img, name, description, price, _id } = props.homeWatch
    return (

        <div className="card col-md-4">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Price: <b>{price}$</b></p>
                <button><Link to={`watches/${_id}`}>Purchase</Link></button>
            </div>



        </div>
    );
};

export default HomeWatch;