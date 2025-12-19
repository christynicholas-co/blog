import React from "react";
import "../../styles/pages/shop/ShopCard.css";

const ShopCard = ({ item }) => {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="shop-card"
    >
      <div className="shop-card-image" />

      <div className="shop-card-content">
        <span className="shop-card-title">{item.title}</span>
        <span className="shop-card-price">{item.price}</span>
      </div>
    </a>
  );
};

export default ShopCard;
