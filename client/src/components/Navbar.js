import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
	    <ul id="navbar">
	      <li>
	        <Link to="/" className="no-link-style">
	          Home
	        </Link>
	      </li>
	      <li>
	        <Link to="/sell/" className="no-link-style">
	          Sell
	        </Link>
	      </li>
	      <li>
	        <Link to="/cart/" className="no-link-style">
	          Cart
	        </Link>
	      </li>
	    </ul>
	  </nav>
	);
}

export { Navbar as default };