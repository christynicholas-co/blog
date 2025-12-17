import React from 'react';
// import './GridItem.css'; // Add this line for later CSS

const GridItem = ({ itemData }) => {
  return (
    <div className="grid-item">
      <img src={itemData.imageUrl} alt={itemData.title} className="item-image" />
      <div className="item-content">
        <h3>{itemData.title}</h3>
        <p>{itemData.description}</p>
        {itemData.linkUrl && <a href={itemData.linkUrl}>{itemData.linkText || 'Learn More'}</a>}
      </div>
    </div>
  );
};

export default GridItem;
