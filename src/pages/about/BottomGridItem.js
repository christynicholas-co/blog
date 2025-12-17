// src/pages/about/BottomGridItem.js
import React from 'react';

const BottomGridItem = ({ itemData }) => {
  return (
    <div className="info-block">
      <h3>{itemData.title}</h3>

      {itemData.type === 'textBlock' &&
        itemData.content.map((text, i) => (
          <p key={i}>{text}</p>
        ))
      }

      {itemData.type === 'links' && (
        <>
          <ul>
            {itemData.links.map((link, i) => (
              <li key={i}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
          <p>{itemData.footerContent}</p>
        </>
      )}
    </div>
  );
};

export default BottomGridItem;
