import React from 'react';
import { Link } from "@reach/router"

const Nav = () => {
    return (
        <nav className="nav">
        <Link to="/">Home</Link> 
        <Link to="/new-in">New In</Link> 
        <Link to="/men">Men</Link> 
        <Link to="/shoes">Women</Link>
      </nav>
    );
};

export default Nav;