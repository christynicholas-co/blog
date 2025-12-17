import React from 'react';
import BottomGridItem from './BottomGridItem';
// import './BottomGrid.css'; // Link this for uniform styling

const sectionContentData = [
  {
    title: 'NO SPONSORED CONTENT',
    type: 'textBlock',
    content: [
      "We feel that it's important to mention we don't accept free products or do sponsored content on Minimalist Baker. This is because we value our readers' trust above all and aim to keep our content pure and honest.",
      "While we have worked with brands we love in the past, it's something we've chosen not to practice moving forward. We want our audience to know we aren't being paid to say or promote anything - period. Every new post is original, valuable, and unsponsored."
    ],
  },
  {
    title: 'WHO IS MINIMALIST BAKER?',
    type: 'textBlock',
    content: [
      "It all started in 2012 with a simple idea to make home cooking more approachable, and has since evolved into something much bigger. While Dana still leads creative vision and John manages all things technical and business-related, we are now a small team of people working to make Minimalist Baker a destination for simple, delicious recipes."
    ],
  },
  {
    title: 'FOLLOW US / CONTACT',
    type: 'links',
    links: [
      { name: 'Instagram', url: '#' },
      { name: 'Twitter', url: '#' },
      { name: 'Facebook', url: '#' },
      { name: 'YouTube', url: '#' },
      { name: 'Pinterest', url: '#' },
      { name: 'Subscribe', url: '#' },
    ],
    footerContent: "Sorry! We can't handle the volume of individual emails we receive. However, we have a very extensive **FAQ/Knowledge Base here!**"
  },
];

const BottomGrid = () => { // Component name changed to BottomGrid
  return (
    <section className="info-section-container">
      {/* This container will be styled with CSS to be a 1x3 grid */}
      {sectionContentData.map((item, index) => (
       <BottomGridItem key={index} itemData={item} />
      ))}
    </section>
  );
};

export default BottomGrid; // Exporting the new name
