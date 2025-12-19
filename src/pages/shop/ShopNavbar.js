import React from "react";
import "../../styles/pages/shop/ShopNavbar.css"

const ShopNavbar = () => {
  return (
    <div className="shop-nav-wrapper">
      <nav className="shop-nav">
        <span className="shop-nav-item active">Shop all</span>
        <span className="shop-nav-item">Tech</span>
        <span className="shop-nav-item">Books</span>
        <span className="shop-nav-item">Kitchen</span>
        <span className="shop-nav-item">Favorites</span>
      </nav>
      <div className="shop-nav-divider" />
    </div>
  );
};

export default ShopNavbar;
