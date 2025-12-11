import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { FaInstagram, FaPinterestP, FaFacebookF } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import '../styles/Header.css'; 

const HeaderComponent = () => {
  const location = useLocation();
  const [activeCategoryPath, setActiveCategoryPath] = useState(location.pathname);

  // Function to handle the click event and update the active state
  const handleCategoryClick = (event, path) => {
    // NavLink handles the actual routing, we just update the local state for styling
    setActiveCategoryPath(path);
  };

  // Update the state if the user navigates using other links in the app
  useEffect(() => {
    setActiveCategoryPath(location.pathname);
  }, [location.pathname]);

  // Helper function to check if the current link should have the 'active' CSS class
  const getCategoryClass = (path) => {
    return activeCategoryPath === path ? 'category-item active' : 'category-item';
  };

  return (
    <header className="header-container">
      <div className="top-nav">
        <nav className="main-nav-links">
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Services">Services</a>
          <a href="/Shop">Shop</a>
          <a href="/Contact">Contact</a>
        </nav>
        <div className="logo-container">
          <span className="logo-text">ARTFUL BYTES</span>
        </div>
        <div className="social-icons">
          <FaInstagram className="icon" />
          <FaPinterestP className="icon" />
          <FaFacebookF className="icon" />
          <div className="cart-icon">
            <BsBag className="icon" />
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>

      <div className="blog-header">
        <h1>Green Tea & Code</h1>
        <h5>Brewing creativity one line at a time</h5>
      </div>

      <hr className="divider" />

      <div className="blog-categories">
        <NavLink 
          to="/Life" 
          className={getCategoryClass('/Life')} 
          onClick={(e) => handleCategoryClick(e, '/Life')}
        >LIFE</NavLink>
        
        <NavLink 
          to="/Tech" 
          className={getCategoryClass('/Tech')} 
          onClick={(e) => handleCategoryClick(e, '/Tech')}
        >TECHNOLOGY</NavLink>
        
        <NavLink 
          to="/Books" 
          className={getCategoryClass('/Books')} 
          onClick={(e) => handleCategoryClick(e, '/Books')}
        >BOOKS</NavLink>
        
        <NavLink 
          to="/Kitchen" 
          className={getCategoryClass('/Kitchen')} 
          onClick={(e) => handleCategoryClick(e, '/Kitchen')}
        >KITCHEN</NavLink>
      </div>
    </header>
  );
};

export default HeaderComponent;
