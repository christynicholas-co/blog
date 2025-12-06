import React from "react";
import NewsletterForm from "./NewsletterForm";
import FooterAbout from "./FooterAbout";
import FooterLinks from "./FooterLinks";
import FooterCopyright from "./FooterCopyright";
import "./Footer.css";


export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <NewsletterForm />
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <FooterAbout />
            <FooterLinks />
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}
