// src/components/Header.js
import "../styles/Header.css";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <header className="header-wrapper">

      {/* TOP ROW */}
      <div className="header-toprow">
        <nav className="header-left">
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </nav>

        <div className="header-center">
          <h1 className="header-title">ARTFUL BYTES Blog</h1>
        </div>

        <div className="header-right">
          <a href="https://www.instagram.com/ "target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a href="https://www.tiktok.com/explore" target="_blank" rel="noopener noreferrer">TIKTOK</a>
          <a href="https://www.threads.com/?hl=en" target="_blank" rel="noopener noreferrer">THREADS</a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">CART</a>
        </div>
      </div>

      <br></br>
      {/* SUBHEADING */}
      <p className="header-subheading">GREEN TEA & CODE</p>

      {/* TAGLINE */}
      <p className="header-tagline"> Brewing creativity. One line at a time. </p>
      
       
      {/* DIVIDER */}
      <div className="header-divider"></div>

      {/* CATEGORIES */}
      <nav className="header-categories">
        <NavLink to="/life">LIFE</NavLink>
        <NavLink to="/tech">TECH</NavLink>
        <NavLink to="/books">BOOKS</NavLink>
        <NavLink to="/kitchen">KITCHEN</NavLink>
      </nav>

    </header>
  );
}

export default Header;
