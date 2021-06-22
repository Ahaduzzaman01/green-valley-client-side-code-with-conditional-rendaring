import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import './ManageProductDetails.css'

const ManageProductDetails = (props) => {
    const { name, weight, price, _id } = props.product;

    const deleteProduct = id => {
        fetch(`https://shielded-sierra-64175.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("An item has been successfully deleted. Please check the home page.")
                }
            })
    }

    return (
        <tr>
            <td className="text-start">{name}</td>
            <td>{weight}</td>
            <td><span className="money-icon">৳</span>{price}</td>
            <td><span className="edit-icon"><FontAwesomeIcon icon={faEdit} /></span><span className="delete-icon" onClick={() => deleteProduct(_id)}><FontAwesomeIcon icon={faTrashAlt} /></span></td>
        </tr>
    );
};

export default ManageProductDetails;