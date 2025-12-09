import { useState } from "react";
import "../../../styles/pages/services/servicescontactform/ContactServices.css";

import { FaCube, FaShareAlt } from 'react-icons/fa'; 

const ContactServices = () => {
  return (
    <div className="layout-container">
      
      {/* Top Navigation Icons */}
      <div className="nav-icons top-left">...</div>
      <div className="nav-icons top-right">
        <FaCube className="icon" />
        <FaShareAlt className="icon share-icon" />
      </div>

      <div className="side-content left-side">
        {/* The left side is currently empty in your image, but you can add content here */}
      </div>

      <div className="side-content right-side">
        <div className="form-wrapper">
          <p className="form-title">Leave a comment</p>
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" />
          </div>
          <button type="submit" className="send-button">Send</button>
        </div>
      </div>

      {/* Bottom Bar (Webpack warning area) */}
      <div className="bottom-bar">
          {/* Text content like "Webpack compiled with 1 warning" goes here */}
      </div>
    </div>
  );
};

export default ContactServices;
