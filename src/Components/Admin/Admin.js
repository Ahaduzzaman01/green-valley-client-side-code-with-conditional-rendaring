import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faThLarge, faPlus } from '@fortawesome/free-solid-svg-icons'
import './Admin.css'

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const history = useHistory();

    const onSubmit = data => {
        const productData = {
            name: data.product,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        }
        const url = `https://shielded-sierra-64175.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => {
                if (res) {
                    alert("An item has been successfully added. Please check the home page.")
                }
            });
    };

    const handleImageUpload = product => {
        const imageData = new FormData();
        imageData.set('key', '7ecebd31fe0780e2c3ecdfe9ad94a3fb');
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
            });
    }

    const handleManageProduct = () => {
        const url = '/manage'
        history.push(url);
    }

    return (
        <div className="main-container container">
            <div className="left-sidebar mt-3">
                <h4 className="text-center pt-2">Green Valley</h4>

                <div className="sidebar-container mt-4">
                    <div onClick={handleManageProduct} className="p-2 sidebar-item">
                        <p><span className="me-2"><FontAwesomeIcon icon={faThLarge} /></span>Manage Product</p>
                    </div>
                    <div className="p-2 sidebar-item">
                        <p><span className="me-2"><FontAwesomeIcon icon={faPlus} /></span>Add Product</p>
                    </div>
                    <div className="p-2 sidebar-item">
                        <p><span className="me-2"><FontAwesomeIcon icon={faPen} /></span>Edit Product</p>
                    </div>
                </div>
            </div>

            <div className="admin-page-container mt-4 ms-3">
                <h4 className="ms-2">Add Product</h4>
                <div className="form-container">
                    <div className="form-wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-width p-4">
                                <label className="h5" htmlFor="product">Product Name</label>
                                <br />
                                <input className="w-100 mb-2 form-control" placeholder="Product Name" name="product" required ref={register} />
                                <br />
                                <label className="h5" htmlFor="weight">Weight</label>
                                <br />
                                <input className="w-100 mb-2 form-control" placeholder="Weight" name="weight" required ref={register} />
                                <br />
                            </div>
                            <div className="form-width p-4">
                                <label className="h5" htmlFor="price">Add Price</label>
                                <br />
                                <input className="w-100 mb-2 form-control" placeholder="Add Price" name="price" required ref={register} />
                                <br />
                                <label className="h5" htmlFor="photo">Add Photo</label>
                                <br />
                                <input name="photo" type="file" required onChange={handleImageUpload} />
                                <br />
                                <input className="save-btn mt-4" type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;