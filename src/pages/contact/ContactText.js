// src/components/contact/ContactText.js
const ContactText = ({ isOpen, onClose }) => {
  return (
    <div className={`panel left ${isOpen ? "open" : ""}`}>
      <button className="close" onClick={onClose}>✕</button>

      <div className="panel-content">
        <h3>Let’s Talk</h3>
        <p>
          Have a project in mind, a question, or just want to say hi?
          I’m always open to conversations and collaborations.
        </p>
      </div>
    </div>
  );
};

export default ContactText;
