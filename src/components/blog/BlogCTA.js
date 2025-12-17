import React from 'react';
import '../../styles/blog/BlogCTA.css'; 

export default function BlogCTA() {
  return (
    <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
            <h2 className="heading">DevBlog - A Blog Template Made For Developers</h2>
            <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
            <div className="single-form-max-width pt-3 mx-auto">
                <form className="signup-form row g-2 g-lg-2 align-items-center">
                    <div className="col-12 col-md-9">
                        <label className="sr-only" htmlFor="semail">Your email</label>
                        <input type="email" id="semail" name="semail1" className="form-control me-md-1 semail" placeholder="Enter email" />
                    </div>
                    <div className="col-12 col-md-2">
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </div>
                </form>{/*//signup-form*/}
            </div>{/*//single-form-max-width*/}
        </div>{/*//container*/}
    </section>
  );
}

