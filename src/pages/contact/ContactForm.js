
// src/components/contact/ContactForm.js
const ContactForm = ({ isOpen, onClose }) => {
  return (
    <div className={`panel right ${isOpen ? "open" : ""}`}>
      <button className="close" onClick={onClose}>✕</button>

      <form className="contact-form">
        <div className="name-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email" />

        <textarea
          placeholder="Questions, comments, or anything else you’d like to share."
          rows="5"
        />

        <div className="form-actions">
          <button type="button">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
