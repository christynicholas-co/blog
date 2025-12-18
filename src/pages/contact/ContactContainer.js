import React, { useState, useEffect } from 'react';
import '../../styles/pages/contact/ContactContainer.css';

const ContactContainer = () => {
  const [activeView, setActiveView] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);

  const closeAll = () => {
    setIsActive(false);
    setTimeout(() => setActiveView(null), 300);
  };

  useEffect(() => {
    if (activeView && activeView !== 'slideshow') {
      requestAnimationFrame(() => setIsActive(true));
    }
  }, [activeView]);

  const SlideContent = ({ index }) => {
    switch (index) {
      case 1:
        return (
          <>
            <p>I AM MODAL ONE</p>
            <button className="btn btn-dark" onClick={() => setSlideIndex(2)}>NEXT STEP</button>
          </>
        );
      case 2:
        return (
          <>
            <p>I AM MODAL TWO</p>
            <button className="btn btn-dark" onClick={() => setSlideIndex(1)}>BACK</button>
            <button className="btn btn-dark" onClick={() => setSlideIndex(3)}>NEXT STEP</button>
          </>
        );
      case 3:
        return (
          <>
            <p>I AM MODAL THREE</p>
            <button className="btn btn-dark" onClick={() => setSlideIndex(2)}>BACK</button>
            <button className="btn btn-dark" onClick={() => setSlideIndex(4)}>NEXT STEP</button>
          </>
        );
      case 4:
        return (
          <>
            <p>I AM MODAL FOUR</p>
            <button className="btn btn-dark" onClick={() => setSlideIndex(1)}>BACK</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="custom-widget-wrapper">
      <div className="container text-center">
        <h1 className="mb-2">Examples</h1>
        <p className="lead mb-5">React-controlled overlays</p>
        <div className="row">
          <div className="col-md-8 offset-md-2 d-grid gap-2">
            <button className="btn btn-outline-primary btn-lg" onClick={() => setActiveView('contact')}>CONTACT US</button>
            <button className="btn btn-outline-secondary btn-lg" onClick={() => setActiveView('icons')}>ICONS BABY</button>
            <button className="btn btn-outline-dark btn-lg" onClick={() => setActiveView('text')}>SHOW ME TEXT</button>
            <button className="btn btn-dark btn-lg" onClick={() => { setActiveView('slideshow'); setSlideIndex(1); }}>SLIDESHOW</button>
          </div>
        </div>
      </div>

      {activeView && activeView !== 'slideshow' && (
        <div className={`offcanvas-overlay ${activeView} ${isActive ? 'active' : ''}`}>
          <div className="offcanvas-header">
            <h6 className="m-0">{activeView.toUpperCase()}</h6>
            <button className="btn-close" onClick={closeAll}>×</button>
          </div>
          <div className="offcanvas-body">
            {activeView === 'text' && <p className="lead">Your long lorem ipsum content here, managed by React.</p>}
            {activeView === 'icons' && (
              <div className="row g-3">
                {['github', 'twitter', 'linkedin'].map(icon => (
                  <div key={icon} className="col text-center">
                    <i className={`bi-${icon} fs-2`}></i>
                    <div className="text-muted">{icon}</div>
                  </div>
                ))}
              </div>
            )}
            {activeView === 'contact' && (
              <form>
                <button type="submit" className="btn btn-primary btn-lg w-100">SEND</button>
              </form>
            )}
          </div>
        </div>
      )}

      {activeView === 'slideshow' && (
        <div className="modal-backdrop">
          <div className="modal-dialog slide-modal">
            <div className="modal-content">
              <div className="modal-header">
                <button className="btn-close" onClick={closeAll}>×</button>
              </div>
              <div className="modal-body">
                <p>I AM MODAL {slideIndex}</p>
              </div>
              <div className="modal-footer">
                <SlideContent index={slideIndex} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactContainer;
