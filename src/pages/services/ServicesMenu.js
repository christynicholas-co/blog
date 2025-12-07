// src/pages/services/ServicesMenu.js

import React from "react";
import "../../styles/pages/services/ServicesMenu.css";

export default function ServicesMenu() {
  return (
    <div className="services-list">
      <a href="#" className="active">Web Design</a>
      <a href="#">Software Development</a>
      <a href="#">Product Management</a>
      <a href="#">Graphic Design</a>
      <a href="#">Marketing</a>
    </div>
  );
}
