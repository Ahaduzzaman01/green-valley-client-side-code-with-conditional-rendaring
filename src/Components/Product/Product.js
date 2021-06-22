import React from 'react';
import { useHistory } from 'react-router';
import './Product.css'

const Product = props => {

    const { imageURL, name, weight, price, _id } = props.product;
    const history = useHistory();
    const goToCheckout = id => {
        const url = `checkout/${id}`;
        history.push(url);
    }

    return (
        <div className="card-deck col-md-4 mt-4">
            <div className="card shadow custom-card">
                <img className="card-img-top" src={imageURL} alt="" />
                <div className="card-body custom-card-body">
                    <h5 className="card-title">{name} - <span>{weight}</span></h5>
                </div>
                <div className="card-footer custom-card-body d-flex justify-content-between align-items-center">
                    <span className="price h3"><span className="money-icon">৳</span>{price}</span>
                    <button onClick={() => goToCheckout(_id)} className="custom-btn">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Product;