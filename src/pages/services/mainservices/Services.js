import React from "react";
import SimpleNavbar from "../../../components/SimpleNavbar";
import AboutServices from "./AboutServices";
import ServicesGrid from "./ServicesGrid";
import ServicesCard from "./ServicesCard";
import FaqDropdown from "./FaqDropdown";
import FaqHeader from "./FaqHeader";
import ContactServices from "../servicescontactform/ContactServices";

import heroImg from "../../../styles/images/header/header-bg.jpg";

function Services() {
  return (
    <>
      <SimpleNavbar />

      <div className="services-page">

        {/* Hero */}
        <div
          className="services-hero"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="services-hero-overlay">
            <h1 className="services-hero-title">Services</h1>
            <p className="services-hero-subtitle">
              Crafting digital experiences with design, strategy, and technology
            </p>
          </div>
        </div>

        <AboutServices />
        <ServicesCard />
        <ServicesGrid />

        <FaqHeader />
        <FaqDropdown />

        <ContactServices />

      </div>
    </>
  );
}

export default Services;
