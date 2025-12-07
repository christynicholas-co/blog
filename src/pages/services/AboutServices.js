import React from "react";
import "../../styles/pages/services/AboutServices.css";

export default function AboutServices() {
  return (
    <section className="about-services">
      <div className="about-grid">

        {/* LEFT: FULL IMAGE + FULL-SIZE MENU */}
        <div className="about-left">

          <img
            src="https://picsum.photos/600/600?grayscale"
            alt="About Background"
            className="about-bg"
          />

          <div className="about-overlay"></div>

          <div className="services-menu-full">
            <ul>
              <li className="active">Web Design</li>
              <li>Software Development</li>
              <li>Product Management</li>
              <li>Graphic Design</li>
              <li>Marketing</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="about-right">
          <h2>Empowering Businesses Through Innovative Solutions</h2>

          <p className="intro">
            Agile methodologies drive our collaborative approach, ensuring optimal
            outcomes across diverse industry verticals.
          </p>

          <div className="about-block">
            <h4>Expert Consulting</h4>
            <p>
              In today's dynamic market landscape, strategic implementation of emerging
              technologies drives competitive advantage and sustainable growth trajectories.
            </p>
          </div>

          <div className="about-block">
            <h4>Innovative Solutions</h4>
            <p>
              Leveraging cutting-edge frameworks and methodologies to deliver scalable
              solutions that address complex business challenges effectively.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
