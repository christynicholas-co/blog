import React from "react";


export default function WhatYouGetStack() {
  return (
    <div className="features-grid">
      <h3 className="section-heading">What You Get</h3>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="feature-box">
            <div className="icon-wrapper">
              <i className="bi bi-layers"></i>
            </div>
            <h4>Modern Architecture</h4>
            <p>Scalable, maintainable code structure using the latest web technologies and best practices for long-term success.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="feature-box">
            <div className="icon-wrapper">
              <i className="bi bi-speedometer2"></i>
            </div>
            <h4>Lightning Fast</h4>
            <p>Optimized performance with lazy loading, code splitting, and CDN integration for instant page loads.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="feature-box">
            <div className="icon-wrapper">
              <i className="bi bi-phone-landscape"></i>
            </div>
            <h4>Responsive Design</h4>
            <p>Pixel-perfect layouts that adapt seamlessly across all devices, from mobile phones to large desktop screens.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="feature-box">
            <div className="icon-wrapper">
              <i className="bi bi-graph-up"></i>
            </div>
            <h4>SEO Optimized</h4>
            <p>Search engine friendly structure with semantic HTML, meta tags, and performance optimizations built in.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
