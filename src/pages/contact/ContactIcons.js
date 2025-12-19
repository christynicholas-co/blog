

// src/components/contact/ContactIcons.js
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const ContactIcons = ({ isOpen, onClose }) => {
  return (
    <div className={`panel top ${isOpen ? "open" : ""}`}>
      <button className="close" onClick={onClose}>✕</button>

      <div className="icons-row">
        <FaGithub />
        <FaLinkedin />
        <FaTwitter />
        <FaEnvelope />
      </div>
    </div>
  );
};

export default ContactIcons;

