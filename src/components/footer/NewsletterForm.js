import React from "react";

export default function NewsletterForm() {
  return (
    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="newsletter-form">
              <h3>Join Our Newsletter</h3>
              <p>
                Subscribe to our newsletter to receive emails about new
                template releases and updates
              </p>
              <form
                action="#"
                method="POST"
                className="php-email-form"
                id="newsletter-form"
              >
                <input type="email" className="mb-3" name="email" placeholder="Enter your Email address" required />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
