import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';

const Checkout = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { email, displayName } = loggedInUser;
    const [clickedProduct, setClickedProduct] = useState([]);

    useEffect(() => {
        const url = `https://shielded-sierra-64175.herokuapp.com/checkout/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setClickedProduct(data[0]));
    }, [])

    const handleCheckout = () => {
        const userCheckout = { ...clickedProduct, email, displayName, checkoutTime: new Date() };
        fetch('https://shielded-sierra-64175.herokuapp.com/addOrders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userCheckout)
        })
            .then(res => res.json())
            .then(data => {
            })
    }

    return (
        <div className="w-50 m-auto mt-5">
            <h4>Checkout</h4>
            <div className="text-center">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="text-start" scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-start">{clickedProduct.name} - {clickedProduct.weight}</td>
                            <td>1</td>
                            <td>৳{clickedProduct.price}</td>
                        </tr>
                        <tr>
                            <td className="text-start" colSpan="2">Total</td>
                            <td>৳{clickedProduct.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={handleCheckout} className="btn btn-success">Checkout</button>
        </div>
    );
};

export default Checkout;