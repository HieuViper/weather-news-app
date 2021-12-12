import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css'
function NavBar() {
    return (
        <ul>
            <li><Link class="active" to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    )
}
export default NavBar