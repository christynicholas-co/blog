import React from "react";

export default function FooterAbout() {
  return (
    <div className="col-xxl-6 col-xl-5 col-md-12 footer-about">
      <a href="/" className="logo d-flex align-items-center">
        <img alt="Your Logo" src="/your-logo.png" width="214" height="30" />
      </a>
      <p className="description">
        Replace this text with your own description about Greenspaghetti or Artful Bytes.
      </p>
      <div className="social-links d-flex mt-3">
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        <a href="/rss" target="_blank" rel="noreferrer">RSS</a>
        <a href="/newsletter" rel="noreferrer">Newsletter</a>
      </div>
    </div>
  );
}
