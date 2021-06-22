import React from 'react';
import './OrdersDetails.css'

const OrdersDetails = (props) => {
    const { imageURL, name, price, email, displayName, checkoutTime, weight } = props.order;

    return (
        <div className="card-container card-deck col-md-6 m-3 shadow py-3">
            <div className="image-box">
                <img src={imageURL} class="" alt="" />
            </div>
            <div className="card-details p-3">
                <h5 class="">{name} - <span>{weight}</span></h5>
                <h6>Price: <span className="taka-icon">৳</span>{price}</h6>
                <p>Email: {email}</p>
                <p>Checkout Time: {checkoutTime}</p>
            </div>
        </div>
    );
};

export default OrdersDetails;