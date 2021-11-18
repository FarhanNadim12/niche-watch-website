import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../../context/AuthProvider/useAuth';


const Watch = () => {
    const [watch, setWatch] = useState({})
    const { id } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://radiant-bayou-30066.herokuapp.com/watches/${id}`)
            .then(res => res.json())
            .then(data => setWatch(data))
    }, [])
    const order = {
        productImg: watch.img,
        productName: watch.name,
        productPrice: watch.price,
        productId: watch._id,
        customerEmail: user.email,
        customerName: user.name,
        status: "Pending"
    }
    const handlePlaceOrder = (e) => {
        fetch('https://radiant-bayou-30066.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Ordered Placed Successfully')
                }
            })
        e.preventDefault();
    }

    return (
        <div className="card mb-3" >
            <div className="row g-0 d-flex align-items-center">
                <div className="col-md-4">
                    <img style={{ width: "75%" }} src={watch.img} class="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-start">
                        <h5 className="card-title">{watch.name}</h5>
                        <p className="card-text">{watch.description}</p>
                        <p className="card-text">Price: <b>{watch.price}$</b></p>
                        <form onSubmit={handlePlaceOrder}>
                            <p>Product Name</p>
                            <input style={{ width: "35%" }} type="text" value={watch.name} disabled /><br />
                            <p>Ordered email</p>
                            <input style={{ width: "35%" }} type="email" value={user.email} disabled /><br />
                            <p>Product id</p>
                            <input style={{ width: "35%" }} value={watch._id} disabled /><br />
                            <p>Customer Name</p>
                            <input style={{ width: "35%" }} type="text" value={user.displayName} disabled /><br />
                            <p>Price</p>
                            <input style={{ width: "35%" }} type="number" value={watch.price} disabled /><br />
                            <input type="submit" value="Place Order" />
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watch;