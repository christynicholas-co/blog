import React, { useState } from "react";
import "../../styles/pages/services/FaqDropdown.css";

export default function FaqDropdown() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const items = [
    {
      q: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar?",
      a: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
      q: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem?",
      a: "Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh."
    },
    {
      q: "Vestibulum ante ipsum primis in faucibus orci luctus?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      q: "Nulla facilisi morbi tempus iaculis urna id volutpat?",
      a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
    },
    {
      q: "Praesent sapien massa, convallis a pellentesque nec?",
      a: "At vero eos et accusamus et iusto odio dignissimos ducimus."
    }
  ];

  return (
    <section id="faq" className="faq section">
      <div className="faq-wrapper">
        {items.map((item, i) => {
          const isActive = openIndex === i;

          return (
            <div
              key={i}
              className={`faq-item ${isActive ? "faq-active" : ""}`}
            >
              <div className="faq-header" onClick={() => toggle(i)}>
                <div className="faq-icon">
                  <i className="bi bi-question-circle"></i>
                </div>

                <h4>{item.q}</h4>

                <div className="faq-toggle">
                  <i className="bi bi-plus"></i>
                  <i className="bi bi-dash"></i>
                </div>
              </div>

              <div
                className="faq-content"
                style={{
                  gridTemplateRows: isActive ? "1fr" : "0fr",
                  visibility: isActive ? "visible" : "hidden",
                  opacity: isActive ? 1 : 0,
                }}
              >
                <div className="content-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
