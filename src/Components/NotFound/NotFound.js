import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="text-danger not-found-style">
            <h2>
                <span className="me-2"><FontAwesomeIcon icon={faExclamationTriangle} /></span>
                    Oops... Page Not Found!!!
                <span className="ms-2"><FontAwesomeIcon icon={faExclamationTriangle} />
                </span>
            </h2>
        </div>
    );
};

export default NotFound;