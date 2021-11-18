import React, { useState } from 'react';
import Menubar from '../Shared/Menubar/Menubar';

const AddProducts = () => {
    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [des, setDes] = useState('');
    const [price, setPrice] = useState('');
    const imageBlur = (e) => {
        setImg(e.target.value)
    }
    const nameBlur = (e) => {
        setName(e.target.value)
    }
    const desBlur = (e) => {
        setDes(e.target.value)
    }
    const PriceBlur = (e) => {
        setPrice(e.target.value)
    }
    const newProduct = {
        img,
        name,
        description: des,
        price

    }
    const handleOnSubmit = (e) => {

        fetch('https://radiant-bayou-30066.herokuapp.com/watches', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successfully')
                }
            })


        e.preventDefault()

    }
    return (
        <div>
            <Menubar></Menubar>
            <h1>Add A Products</h1>
            <form onSubmit={handleOnSubmit} className="w-50 m-auto">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Image Link</label>
                    <input onBlur={imageBlur} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Product Name</label>
                    <input onBlur={nameBlur} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Products Description</label>
                    <textarea onBlur={desBlur} type="text" className="form-control" id="exampleInputEmail1" aria-label="With textarea" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Products Price</label>
                    <input onBlur={PriceBlur} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProducts;