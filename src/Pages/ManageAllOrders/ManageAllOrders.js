import React, { useEffect, useState } from 'react';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import Menubar from '../Shared/Menubar/Menubar';
const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://radiant-bayou-30066.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <div>
            <Menubar></Menubar>
            <h1>Manage all orders {allOrders.length}</h1>
            <div className="row w-100">
                {
                    allOrders.map(allOrder => <ManageAllOrder allOrder={allOrder} key={allOrder._id}></ManageAllOrder>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;