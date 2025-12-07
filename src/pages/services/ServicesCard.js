import React from "react";
import "../../styles/pages/services/ServicesCard.css";

export default function ServicesCard({ icon, number, title, text, link }) {
  return (
    <div className="service-item">
      <div className="service-icon">
        <i className={icon}></i>
      </div>

      <div className="service-content">
        <span className="service-number">{number}</span>
        <h3 className="service-title">{title}</h3>
        <p className="service-text">{text}</p>

        <a href={link} className="service-link">
          Learn More <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
