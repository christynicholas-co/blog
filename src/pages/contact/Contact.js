// src/pages/contact/ContactMain.js
import { useState } from "react";
import SimpleNavbar from "../../components/SimpleNavbar";

import ContactForm from "./ContactForm";
import ContactText from "./ContactText";
import ContactIcons from "./ContactIcons";
import ContactCarousel from "./ContactCarousel";

import "../../styles/pages/contact/Contact.css";

const Contact = () => {
  const [panel, setPanel] = useState(null);

  const isOpen = panel !== null;

  return (
    <>
      <SimpleNavbar />

      {/* PAGE HEADER */}
      <div className="contact-header">
        <h1>Welcome.</h1>
        <h6>
          Thanks for stopping by. Questions, ideas, comments, or just saying hi —
          it all belongs here.
        </h6>
      </div>

      <div className="contact-box">
        {/* CENTER BUTTONS */}
        <div className={`contact-buttons ${isOpen ? "disabled" : ""}`}>
          <button onClick={() => setPanel("top")}>ICONS BABY</button>
          <button onClick={() => setPanel("right")}>CONTACT US</button>
          <button onClick={() => setPanel("bottom")}>SLIDESHOW</button>
          <button onClick={() => setPanel("left")}>SHOW ME TEXT</button>
        </div>

        {/* PANELS */}
        <ContactText isOpen={panel === "left"} onClose={() => setPanel(null)} />
        <ContactForm isOpen={panel === "right"} onClose={() => setPanel(null)} />
        <ContactIcons isOpen={panel === "top"} onClose={() => setPanel(null)} />
        <ContactCarousel isOpen={panel === "bottom"} onClose={() => setPanel(null)} />
      </div>
    </>
  );
};

export default Contact;
