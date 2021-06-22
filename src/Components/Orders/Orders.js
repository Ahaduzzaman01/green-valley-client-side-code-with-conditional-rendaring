import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import OrdersDetails from '../OrdersDetails/OrdersDetails';
import './Orders.css'

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    useEffect(() => {
        const url = 'https://shielded-sierra-64175.herokuapp.com/orders?email=' + loggedInUser.email;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div className="row container m-auto mb-5">
            <h3 className="mt-4">Hello <span className="user-name">{loggedInUser.displayName}</span>, here is your orders list.</h3>
            {
                orders.map(order => <OrdersDetails order={order}></OrdersDetails>)
            }
        </div>
    );
};

export default Orders;