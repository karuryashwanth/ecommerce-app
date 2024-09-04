import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this file for styling

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>YourShop</h1>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/cart" className="nav-link">View Cart</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
