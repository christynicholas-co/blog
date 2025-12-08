import { useState } from "react";
import "../../styles/pages/services/ContactServices.css";

export default function ContactForm() {
  const [selectedType, setSelectedType] = useState("");

  return (
    <div className="contact-container">
      <div className="panel-wrapper left">
        <div className="left-panel">
          <div>
            <h1>Contact Us</h1>
            <p>
              If your question isn’t answered above, or you’d like a custom service, reach out below.
            </p>
          </div>
        </div>
      </div>

      <div className="panel-wrapper right">
        <div className="right-panel">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
          <input type="email" placeholder="Your email" required />

          <div className="bubbles">
            {["Question", "Custom Project", "Other"].map((type) => (
              <span
                key={type}
                className={selectedType === type ? "bubble active" : "bubble"}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </span>
            ))}
          </div>

          <textarea placeholder="Your message" required></textarea>

          <button className="send-btn">Send</button>
        </div>
      </div>
    </div>
  );
}
