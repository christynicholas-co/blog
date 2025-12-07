// src/pages/services/Services.js

import React from "react";
import SimpleNavbar from "../../components/SimpleNavbar";
import PricingBox from "./PricingBox";
import WhatYouGetStack from "./WhatYouGetStack";
import TechUsed from "./TechUsed";
import WorkProcess from "./WorkProcess";
import ServicesMenu from "./ServicesMenu";
import AboutServices from "./AboutServices";
import ServicesGrid from "./ServicesGrid";

function Services() {
  return (
    <>
      <SimpleNavbar />

      <div className="services-page">
        <h1>Services offered by Artful Bytes</h1>

        <AboutServices />

        <PricingBox
          title="Web Development"
          tagline="Full-Stack Solutions"
          price="$2,500"
          delivery="4-6 weeks delivery"
          revisions="Unlimited revisions"
          support="60 days support"
        />

        <WhatYouGetStack />

        <TechUsed />

        <ServicesGrid />

        <WorkProcess />
      </div>
    </>
  );
}

export default Services;
