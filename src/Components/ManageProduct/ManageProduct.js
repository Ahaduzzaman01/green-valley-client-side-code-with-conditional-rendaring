import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faThLarge, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import ManageProductDetails from '../ManageProductDetails/ManageProductDetails';

const ManageProduct = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://shielded-sierra-64175.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddProduct = () => {
        const url = '/admin'
        history.push(url);
    }

    return (
        <div className="main-container mb-3 container">
            <div className="left-sidebar mt-3">
                <h4 className="text-center pt-2">Green Valley</h4>

                <div className="sidebar-container mt-4">
                    <div className="p-2 sidebar-item">
                        <p><span className="me-2"><FontAwesomeIcon icon={faThLarge} /></span>Manage Product</p>
                    </div>
                    <div onClick={handleAddProduct} className="p-2 sidebar-item">
                        <p><span className="me-2"><FontAwesomeIcon icon={faPlus} /></span>Add Product</p>
                    </div>
                    <div className="p-2 sidebar-item">
                        <p><span className="me-2"><FontAwesomeIcon icon={faPen} /></span>Edit Product</p>
                    </div>
                </div>
            </div>

            <div className="w-100">
                <div className="w-75 m-auto mt-5">
                    <h4>Manage Product</h4>
                    <div className="text-center">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="text-start" scope="col">Product Name</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map(product => <ManageProductDetails product={product}></ManageProductDetails>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;