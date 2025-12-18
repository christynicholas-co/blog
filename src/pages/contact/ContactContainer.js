import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../../styles/pages/contact/ContactContainer.css';

const ContactContainer = () => {
  const [activeView, setActiveView] = useState(null);
  const [slideIndex, setSlideIndex] = useState(1);

  const closeAll = () => setActiveView(null);

  return (
    <div className="custom-widget-wrapper">
      {/* MAIN MENU */}
      <div className="container text-center">
        <h1 className="mb-2">Examples</h1>
        <p className="lead mb-5">React-controlled overlays</p>

        <div className="row">
          <div className="col-md-8 offset-md-2 d-grid gap-2">
            <button onClick={() => setActiveView('contact')}>CONTACT US</button>
            <button onClick={() => setActiveView('icons')}>ICONS BABY</button>
            <button onClick={() => setActiveView('text')}>SHOW ME TEXT</button>
            <button onClick={() => { setActiveView('slideshow'); setSlideIndex(1); }}>
              SLIDESHOW
            </button>
          </div>
        </div>
      </div>

      {/* OFFCANVAS */}
      {activeView && activeView !== 'slideshow' && (
        <div className={`offcanvas-overlay ${activeView}`}>
          <div className="offcanvas-header">
            <h6>{activeView.toUpperCase()}</h6>
            <button onClick={closeAll}>X</button>
          </div>

          <div className="offcanvas-body">
            {activeView === 'text' && (
              <p>Your long lorem ipsum content here...</p>
            )}

            {activeView === 'icons' && (
              <div className="icons-grid">
                <div className="icon-item"><FaGithub /><span>GitHub</span></div>

                <div className="icon-item"><FaTwitter /><span>Twitter</span></div>

                <div className="icon-item"><FaLinkedin /><span>LinkedIn</span></div>
              </div>
            )}


            {activeView === 'contact' && (
              <form>
                <input placeholder="First name" />
                <input placeholder="Last name" />
                <textarea placeholder="Message" />
                <button type="submit">SEND</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL SLIDESHOW */}
      {activeView === 'slideshow' && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <button className="close-x modal-close" onClick={closeAll }>X</button>

            <p>I AM MODAL {slideIndex}</p>

            <div>
              {slideIndex > 1 && (
                <button onClick={() => setSlideIndex(slideIndex - 1)}>BACK</button>
              )}
              {slideIndex < 4 ? (
                <button onClick={() => setSlideIndex(slideIndex + 1)}>NEXT</button>
              ) : (
                <button onClick={closeAll}>CLOSE</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactContainer;
