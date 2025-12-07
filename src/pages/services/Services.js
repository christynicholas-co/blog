// src/pages/services/Services.js

import React from "react";
import SimpleNavbar from "../../components/SimpleNavbar";
import AboutServices from "./AboutServices";
import ServicesGrid from "./ServicesGrid";
import heroImg from "../../styles/images/header/services-hero.jpg";

function Services() {
  return (
    <>
      <SimpleNavbar />

      <div className="services-page">
        {/* Hero Section */}
        <div className="services-hero" style={{ backgroundImage: `url(${heroImg})` }}>
          <div className="services-hero-overlay">
            <h1 className="services-hero-title">Services</h1>
            <p className="services-hero-subtitle">
              Crafting digital experiences with design, strategy, and technology
            </p>
          </div>
        </div>

        <AboutServices />
        <ServicesGrid />
      </div>
    </>
  );
}

export default Services;
