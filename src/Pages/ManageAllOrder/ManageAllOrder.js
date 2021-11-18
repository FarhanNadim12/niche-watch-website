import React, { useState } from 'react';

const ManageAllOrder = (props) => {
    const { productImg, productName, status, customerEmail, _id } = props.allOrder;
    const [sttatus, setStatus] = useState('');
    const handleBlur = (e) => {
        setStatus(e.target.value);

    }

    const handleStatusChange = (id) => {
        fetch(`https://radiant-bayou-30066.herokuapp.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ sttatus })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Status Changes Successfully,Please Reload The Page To See Status On Site')
                }
            })

    }
    return (
        <div className="card mb-3 "  >
            <div className="row g-0 d-flex align-items-center ">
                <div className="col-md-4">
                    <img style={{ width: "50%", height: "150px" }} src={productImg} class="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-start">
                        <h5 className="card-title">{productName}</h5>
                        <p className="card-text">Customers Email{customerEmail}</p>
                        <p className="card-text">Status: <b>{status}</b></p>
                        <span>Update Status</span> <br />
                        <select onBlur={handleBlur} className="form-select w-50 mb-2" id="inputGroupSelect04" aria-label="Example select with button addon">
                            <option selected>Choose One</option>
                            <option selected>Pending</option>
                            <option >Shipped</option>
                        </select>
                        <button onClick={() => handleStatusChange(_id)}>Change Products Status</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrder;