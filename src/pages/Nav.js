import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css'
function NavBar() {
    return (
        <ul id="container">
            <li><Link class="item active" to="/">Home</Link></li>
            <li><Link class="item" to="/news">News</Link></li>
            <li><Link class="item" to="/contact">Contact</Link></li>
            <li><Link class="item" to="/about">About</Link></li>
        </ul>
    )
}

//active navbar
let items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
export default NavBar