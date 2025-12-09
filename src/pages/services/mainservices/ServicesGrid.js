import React from "react";
import ServicesCard from "./ServicesCard";
import "../../../styles/pages/services/mainservices/ServicesGrid.css";

export default function ServicesGrid() {
  return (
    <div className="services-container">

      <div className="services-header">
        <h2>SERVICES</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      
      <div className="row g-4">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <ServicesCard
            icon="bi bi-code-slash"
            number="01"
            title="Custom Application Development"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu."
            link="/services/design"
          />
        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <ServicesCard
            icon="bi bi-bar-chart"
            number="02"
            title="Strategic Business Planning"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu."
            link="/services/web"
          />
        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
          <ServicesCard
            icon="bi bi-palette"
            number="03"
            title="Brand & Identity Design"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu."
            link="/services/logos"
          />
        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
          <ServicesCard
            icon="bi bi-megaphone"
            number="04"
            title="Digital Marketing & SEO"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu."
            link="/services/etc"
          />
        </div>
      </div>
    </div>
  );
}
