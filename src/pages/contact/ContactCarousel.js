// src/components/contact/ContactCarousel.js
import { useState } from "react";

const ContactCarousel = ({ isOpen, onClose }) => {
  const [index, setIndex] = useState(0);

  const slides = [
    "Carousel Item One",
    "Carousel Item Two",
    "Carousel Item Three",
    "Carousel Item Four"
  ];

  const next = () => {
    if (index === slides.length - 1) {
      onClose();
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const back = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className={`panel bottom ${isOpen ? "open" : ""}`}>
      <button className="close" onClick={onClose}>✕</button>

      <div className="carousel-content">
        <h3>{slides[index]}</h3>
      </div>

      <div className="carousel-controls">
        <button onClick={back} disabled={index === 0}>Back</button>
        <button onClick={next}>
          {index === slides.length - 1 ? "Close" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default ContactCarousel;

