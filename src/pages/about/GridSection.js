import React from 'react';
import GridItem from './GridItem';
// import './GridSection.css'; // Add this line for later CSS

const gridItemsData = [
  {
    imageUrl: 'https://picsum.photos/200/150?random=1',
    title: 'Project One',
    description: 'A short description of this project.',
    linkUrl: '/project-one',
    linkText: 'View Project'
  },
  {
    imageUrl: 'https://picsum.photos/200/150?random=2',
    title: 'Project Two',
    description: 'A short description of this project.',
    linkUrl: '/project-two',
    linkText: 'View Project'
  },
  {
    imageUrl: 'https://picsum.photos/200/150?random=3',
    title: 'Project Three',
    description: 'A short description of this project.',
    linkUrl: '/project-three',
    linkText: 'View Project'
  },
  {
    imageUrl: 'https://picsum.photos/200/150?random=4',
    title: 'Project Four',
    description: 'A short description of this project.',
    linkUrl: '/project-four',
    linkText: 'View Project'
  }
];

const GridSection = () => {
  return (
    <section className="grid-section">
      <div className="section-header">
      <header>
        Have a question about a recipe? check out our <a href="#">**FAQ!**</a> &rarr;
      </header>
        <h2>DIVE DEEPER</h2>
        <p>If you're hungry for more, check out what else we've created:</p>
      </div>
      
      {/* This is the container for the 2x2 grid, CSS will define the columns/rows */}
      <div className="items-grid-container">
        {gridItemsData.map((item, index) => (
          <GridItem key={index} itemData={item} />
        ))}
      </div>
    </section>
  );
};

export default GridSection;
