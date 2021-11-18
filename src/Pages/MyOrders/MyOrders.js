import React, { useEffect, useState } from 'react';
import useAuth from '../../context/AuthProvider/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import Menubar from '../Shared/Menubar/Menubar';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    console.log(user.email);
    useEffect(() => {
        fetch('https://radiant-bayou-30066.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const myOrders = orders.filter(order => order.customerEmail === user.email)
    console.log(myOrders);
    return (
        <div>
            <Menubar></Menubar>
            <h1>My Orders: {myOrders.length}</h1>
            <div className="card-group gx-5 row w-100">
                {
                    myOrders.map(myOrder => <MyOrder orders={orders} setOrders={setOrders} myOrder={myOrder} key={myOrder._id} ></MyOrder>)
                }
            </div>

        </div>
    );
};

export default MyOrders;