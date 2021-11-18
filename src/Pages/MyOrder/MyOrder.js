import React from 'react';

const MyOrder = (props) => {

    const { productImg, productName, productPrice, productId, customerEmail, _id, status } = props.myOrder;
    const handleCancelOrder = (id) => {
        const proceed = window.confirm('Are You Sure You Want To Cancel This Order');
        if (proceed) {
            fetch(`https://radiant-bayou-30066.herokuapp.com/orders/${id}`, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Deleted Successfully');
                        const remainingOrders = props.orders.filter(order => order._id !== id);
                        props.setOrders(remainingOrders);
                    }
                })
        }
    }
    return (
        <div className="border col-md-4">
            <img src={productImg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{productName}</h5>
                <p className="card-text">Price: {productPrice}$</p>
                <p className="card-text">ordered Email: {customerEmail}</p>
                <p className="card-text">Status: {status}</p>
                <button onClick={() => handleCancelOrder(_id)}>Cancel order</button>
            </div>
        </div>
    );
};

export default MyOrder;