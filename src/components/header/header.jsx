import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div>Logo Rotation</div>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/applied-redux">Rotate</Link></li>               
            </ul>
        </header>
    );
}

export default Header;