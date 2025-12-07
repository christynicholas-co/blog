// PricingBox.js
import React from "react";

export default function PricingBox({ title = "JS", price = "$1,200", period = "project", features = [], ctaLabel = "Get started", onCta = () => {} }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-2">{title}</h5>
        <p className="card-subtitle text-muted mb-3">Custom JavaScript development</p>
        <div className="d-flex align-items-baseline mb-3">
          <span className="display-6 fw-bold">{price}</span>
          <span className="ms-2 text-muted">/ {period}</span>
        </div>
        <ul className="list-unstyled mb-4">
          {features.length ? features.map((f, i) => (
            <li key={i} className="d-flex align-items-center mb-2">
              <span className="me-2 text-success">✓</span>
              <span>{f}</span>
            </li>
          )) : (
            <>
              <li className="d-flex align-items-center mb-2"><span className="me-2 text-success">✓</span><span>Modern JS stack (ES6+)</span></li>
              <li className="d-flex align-items-center mb-2"><span className="me-2 text-success">✓</span><span>Component-based architecture</span></li>
              <li className="d-flex align-items-center mb-2"><span className="me-2 text-success">✓</span><span>Responsive UI with Bootstrap</span></li>
              <li className="d-flex align-items-center mb-2"><span className="me-2 text-success">✓</span><span>GitHub workflow & Vercel-ready</span></li>
            </>
          )}
        </ul>
        <button type="button" className="btn btn-success mt-auto" onClick={onCta}>{ctaLabel}</button>
      </div>
    </div>
  );
}
