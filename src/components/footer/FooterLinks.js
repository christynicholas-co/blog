import React from "react";

export default function FooterLinks() {
  return (
    <>
      <div className="col-xl-2 col-lg-4">
        <h3>Company</h3>
        <nav className="footer-nav">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </nav>
      </div>

      <div className="col-xl-2 col-lg-4">
        <h3>Popular Templates</h3>
        <nav className="footer-nav">
          <ul>
            <li><a href="/template1">Template One</a></li>
            <li><a href="/template2">Template Two</a></li>
          </ul>
        </nav>
      </div>

      <div className="col-xxl-2 col-xl-3 col-lg-4">
        <h3>Popular Categories</h3>
        <nav className="footer-nav">
          <ul>
            <li><a href="/category1">Category One</a></li>
            <li><a href="/category2">Category Two</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
