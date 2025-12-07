import React from "react";

export default function TechUsed() {
  return (
    <div className="tech-details">
      <h3 className="section-heading">Technologies & Tools</h3>
      <div className="tech-categories">
        <div className="tech-category">
          <h5>Frontend</h5>
          <div className="tech-tags">
            <span>React</span>
            <span>Vue.js</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>SASS</span>
          </div>
        </div>
        <div className="tech-category">
          <h5>Backend</h5>
          <div className="tech-tags">
            <span>Node.js</span>
            <span>Express</span>
            <span>Python</span>
            <span>Django</span>
            <span>REST API</span>
          </div>
        </div>
        <div className="tech-category">
          <h5>Database</h5>
          <div className="tech-tags">
            <span>MongoDB</span>
            <span>PostgreSQL</span>
            <span>Redis</span>
            <span>Firebase</span>
          </div>
        </div>
      </div>
    </div>
  );
}


