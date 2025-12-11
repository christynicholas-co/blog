import React from "react";

export default function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright">
      <div className="container">
        <div className="row align-items-center"> 
          
          {/* Left Column: Terms and Policy Links (Now Stacked) */}
          <div className="col-md-6 text-center text-md-start"> 
            {/* Removed "list-inline" and related classes */}
            <ul className="list-unstyled mb-0"> 
              {/* Added mb-1 class to add a small bottom margin between stacked items */}
              <li className="mb-1"><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Right Column: Photos and Copyright Info */}
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <p className="mb-0">
              Photos from Unsplash/By <a href="/terms">Design</a> 
            </p>
            <p className="mb-0">
              &copy; {currentYear} Artful Bytes Blog
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
