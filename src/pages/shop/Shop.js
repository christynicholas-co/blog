// src/pages/shop/Shop.js

import React from "react";
import SimpleNavbar from "../../components/SimpleNavbar";
import ShopNavbar from "./ShopNavbar";
import ShopCard from "./ShopCard";
import ShopItems from "./ShopItems";
import "../../styles/pages/shop/Shop.css";

const Shop = () => {
  return (
    <div className="shop-page">
      <SimpleNavbar />
      <ShopNavbar />

      <div className="shop-container">
        <div className="shop-grid">
          {ShopItems.map((item) => (
            <ShopCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

