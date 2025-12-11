import React from "react";
import FooterLinks from "./FooterLinks";
import FooterCopyright from "./FooterCopyright";
import "./Footer.css";



export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <FooterLinks />
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}