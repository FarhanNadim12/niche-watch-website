import React from 'react';
import { Link } from 'react-router-dom';

const AllWatch = (props) => {
    const { img, name, _id, price, description } = props.watch;
    return (
        <div className="card col-md-4">
            <img src={img} height="350px" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Price: <b>{price}$</b></p>
                <button type="button" class="btn btn-primary"><Link style={{ color: "white" }} className="nav-link" to={`watches/${_id}`}>Purchase</Link></button>
            </div>
        </div>
    );
};

export default AllWatch;