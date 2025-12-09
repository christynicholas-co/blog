import React from "react";
import { Link } from "react-router-dom";
import PricingBox from "./PricingBox";
import WhatYouGetStack from "./WhatYouGetStack";
import TechUsed from "./TechUsed";
import WorkProcess from "./WorkProcess";

function ServiceDetails() {
  return (
    <div className="service-details">
      <header className="details-header">
        <Link to="/services" className="back-link">← Back</Link>
      </header>

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
      <WorkProcess />
    </div>
  );
}

export default ServiceDetails;
