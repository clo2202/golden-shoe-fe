import React from 'react';
import { Link } from "@reach/router"

const Nav = () => {
    return (
        <nav className="nav">
        <Link to="/">Home</Link> 
        <Link to="/">New In</Link> 
        <Link to="/">Men</Link> 
        <Link to="/">Women</Link>
      </nav>
    );
};

export default Nav;