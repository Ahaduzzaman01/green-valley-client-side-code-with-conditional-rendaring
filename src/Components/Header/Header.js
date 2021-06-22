import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
console.log(loggedInUser);
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top custom-bg">
            <div className="container-fluid container">
                <Link className="navbar-brand" to="/">Green Valley</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/orders">Orders</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/deals">Deals</Link>
                        </li>

                        <li className="nav-item nav-login-style">
                        {
                            loggedInUser.displayName ? <p className="mt-2 mb-0 nav-login">{loggedInUser.displayName}</p> : <Link className="nav-link nav-login" to="/login">Login</Link> 
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;