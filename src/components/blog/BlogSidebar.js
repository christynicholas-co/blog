import React from 'react';
import '../../styles/blog/BlogSidebar.css';

export default function BlogSidebar() {
  return (
    <header className="blog-sidebar">
      <h1 className="blog-title">
        <a href="/">Christy&rsquo;s Blog</a>
      </h1>

      <div className="profile-section">
        <img
          className="profile-image"
          src="assets/images/profile.png"
          alt="profile"
        />

        <p className="bio">
          Hi, my name is Christy Nicholas. Briefly introduce yourself here.
          <br />
          <a href="/about">Find out more about me</a>
        </p>

        <ul className="social-list">
          <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-github-alt"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-stack-overflow"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-codepen"></i></a></li>
        </ul>
      </div>

      <nav className="sidebar-nav">
        <a className="nav-link active" href="/">Blog Home</a>
        <a className="nav-link" href="/blog-post">Blog Post</a>
        <a className="nav-link" href="/about">About Me</a>
      </nav>

      <div className="sidebar-cta">
        <a className="cta-button" href="https://themes.3rdwavemedia.com" target="_blank" rel="noopener noreferrer">
          Get in Touch
        </a>
      </div>
    </header>
  );
}
