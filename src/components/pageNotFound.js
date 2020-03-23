import React from 'react';
import { Link } from 'react-router-dom';
import frownFace from '../assets/img/download.jpg'

const pageNotFound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>Woops!!! We can't Find the page your looking for <img src={frownFace} width="25px" /></p>
            <Link to="/home">Click Here to Go to Our Home Page</Link>
        </div>
    )
}

export default pageNotFound;

