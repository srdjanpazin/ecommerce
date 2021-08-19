import React from 'react';
import Navbar from './Navbar';

const Header = () => {
	return (
		<header className="app-header">
        <div className="header-inner">
          <div className="header-branding">
            React Shop
          </div>
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search the shop" 
          />
          <button type="submit">
            Search
          </button>
        </div>
        <Navbar />
      </header>
	);
}

export { Header as default };