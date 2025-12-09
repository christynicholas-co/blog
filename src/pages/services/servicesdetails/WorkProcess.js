import React from "react";
import "../../../styles/pages/services/servicesdetails/WorkProcess.css";

export default function WorkProcess() {
  return (
    <section id="work-process" className="work-process section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Work Process</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="steps-item">
              <div className="steps-image">
                <img
                  src="https://picsum.photos/600/400?random=1"
                  alt="Step 1"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="steps-content">
                <div className="steps-number">01</div>
                <h3>Research & Analysis</h3>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                <div className="steps-features">
                  <div className="feature-item"><i className="bi bi-check-circle"></i><span>Market Research</span></div>
                  <div className="feature-item"><i className="bi bi-check-circle"></i><span>Data Analysis</span></div>
                  <div className="feature-item"><i className="bi bi-check-circle"></i><span>User Feedback</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="steps-item">
              <div className="steps-image">
                <img
                  src="https://picsum.photos/600/400?random=2"
                  alt="Step 2"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="steps-content">
                <div className="steps-number">02</div>
                <h3>Design & Planning</h3>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.</p>
                <div className="steps-features">
                  <div className="feature-item"><i className="bi bi-check-circle"></i><span>Wireframing</span></div>
                  <div className="feature-item"><i className="bi bi-check-circle"></i><span>UI/UX Design</span></div>
                  <div className="feature-item"><i className="bi bi-check-circle"></i><span>Prototyping</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <div className="steps-item">
              <div className="steps-image">
                <img
                  src="https://picsum.photos/600/400?random=3"
                  alt="Step 3"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="steps-content">
                <div className="steps-number">03</div>
                <h3>Development & Launch</h3>
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore.</p>
                <div className="steps-features">
                  <div className="feature-item"><i className="bi bi-check-circle"></i><span>Development</span></div>
                  <div className="feature-item"><i className="bi bi-check-circle"></i><span>Testing</span></div>
                  <div className="feature-item"><i className="bi bi-check-circle"></i><span>Deployment</span></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
