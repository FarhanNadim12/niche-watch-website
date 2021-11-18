import React from 'react';

const ManageProduct = (props) => {
    const { _id, img, name, description, price } = props.product;
    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are You Sure You Want To Delete This Product');
        if (proceed) {
            fetch(`https://radiant-bayou-30066.herokuapp.com/watches/${id}`, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product Deleted Successfully');
                        const remainingProducts = props.products.filter(order => order._id !== id);
                        props.setProducts(remainingProducts);
                    }
                })
        }
    }
    return (
        <div className="border col-md-4">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"> {description}$</p>
                <p className="card-text">Price: {price}</p>

                <button onClick={() => handleDeleteProduct(_id)}>Delete Product</button>
            </div>
        </div>
    );
};

export default ManageProduct;