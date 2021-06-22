import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import googleIcon from '../../images/googleIcon.png'


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [user, setUser] = useState({})
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const provider = new firebase.auth.GoogleAuthProvider();

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleLogin = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setUser(user);
                setLoggedInUser(user);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    return (
        <div className="login-container">
            <div onClick={handleGoogleLogin} className="login-wrapper">
                <div>
                    <img src={googleIcon} alt="" />
                </div>
                <div>
                    <h5>Log In with Google</h5>
                </div>
            </div>
        </div>
    );
};

export default Login;