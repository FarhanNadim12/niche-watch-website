import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import Menubar from '../Shared/Menubar/Menubar';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://radiant-bayou-30066.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="">
            <Menubar></Menubar>
            <h1> {products.length} Products Available</h1>
            <div className="row w-100">
                {
                    products.map(product => <ManageProduct product={product} products={products} setProducts={setProducts} key={product._id} ></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;