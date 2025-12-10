import { useState } from "react";
import "../../../styles/pages/services/servicescontactform/ContactServices.css";

import { FaCube, FaShareAlt } from 'react-icons/fa'; 

const ContactServices = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    // Handle form submission logic here
    console.log('Form submitted:', { firstName, lastName, email, comment });
    alert('Comment sent!');
   // Reset form fields (optional)
    setFirstName('');
    setLastName('');
    setEmail('');
    setComment('');
  };


  return (
    // <-- Outer container to center the whole component
    <div className="contentBox"> 
      <div className="form-container">
        <div className="form-wrapper">
    {/* Top Navigation Icons */}
        <div className="nav-icons top-left">...</div>
            <div className="nav-icons top-right">
              <FaCube className="icon" />
              <FaShareAlt className="icon share-icon" />
            </div>

            <div className="side-content left-panel">
              <div className="form-content">
                  <h2 className="form-title">Have Questions or Comments..</h2>
              </div>   
            </div>

            <div className="right-panel">
              <div className="form-content">
                  <h2 className="form-title">Leave a comment</h2>
                  <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    <input type="text" placeholder="Last name" value={lastName}  onChange={(e) => setLastName(e.target.value)} required  />
                    <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <textarea placeholder="Leave a comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                    <button type="submit" className="send-button">Send</button>
                  </form>
              </div>
            </div>
        </div>    
      </div>
    </div> // <-- Close outer container
  );
};

export default ContactServices;
