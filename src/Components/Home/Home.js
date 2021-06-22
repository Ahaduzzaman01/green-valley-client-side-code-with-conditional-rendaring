import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Product from '../Product/Product';
import './Home.css'


const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://shielded-sierra-64175.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="input-group input-group-lg mb-3 w-50 m-auto my-5">
                <input type="text" className="form-control" placeholder="Search Product" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="search-btn" type="button" id="button-addon2">Button</button>
            </div>

            <div className="row container m-auto mb-5">
                {
                    products.length === 0 && <span className="home-page-loading-spinner"><CircularProgress color="secondary" /></span>
                }
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default Home;