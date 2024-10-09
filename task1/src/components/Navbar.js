import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS


const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    );
};

export default Navbar;
