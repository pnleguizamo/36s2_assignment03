import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: 'lightgray', padding: '1em' }}>
            <Link to="/" style={{ margin: '0 1em' }}>Home</Link>
            <Link to="/checkout" style={{ margin: '0 1em' }}>Checkout</Link>
        </nav>
    );
};

export default Navbar;
