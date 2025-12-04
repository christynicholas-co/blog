import React from "react";
import "../../styles/blog.css";


function Blog() {
  return (
    <div className="container">
      {/* Header */}
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="link-secondary" href="#">Subscribe</a>
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="#">Blog</a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="link-secondary" href="#" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24">
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5"/>
                <path d="M21 21l-5.2-5.2"/>
              </svg>
            </a>
            <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
          </div>
        </div>
      </header>

      {/* Nav */}
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          {["World","U.S.","Technology","Design","Culture","Business","Politics","Opinion","Science","Health","Style","Travel"].map((item) => (
            <a key={item} className="p-2 link-secondary" href="#">{item}</a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="container">
        {/* Featured post */}
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
            <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
            <p className="lead mb-0">
              <a href="#" className="text-white fw-bold">Continue reading...</a>
            </p>
          </div>
        </div>

        {/* Two smaller posts */}
        <div className="row mb-2">
          {[
            { category: "World", title: "Featured post", date: "Nov 12" },
            { category: "Design", title: "Post title", date: "Nov 11" }
          ].map((post, idx) => (
            <div key={idx} className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className={`d-inline-block mb-2 text-${post.category === "World" ? "primary" : "success"}`}>{post.category}</strong>
                  <h3 className="mb-0">{post.title}</h3>
                  <div className="mb-1 text-muted">{post.date}</div>
                  <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="stretched-link">Continue reading</a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"/>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog posts + sidebar */}
        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">From the Firehose</h3>

            {/* Blog Post 1 */}
            <article className="blog-post">
              <h2 className="blog-post-title">Sample blog post</h2>
              <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>
              <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
              <hr />
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space...</p>
              <h2>Blockquotes</h2>
              <p>This is an example blockquote in action:</p>
              <blockquote className="blockquote">
                <p>Quoted text goes here.</p>
              </blockquote>
              <h3>Example lists</h3>
              <ul>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ul>
              <ol>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ol>
              <dl>
                <dt>HyperText Markup Language (HTML)</dt>
                <dd>The language used to describe and define the content of a Web page</dd>
                <dt>Cascading Style Sheets (CSS)</dt>
                <dd>Used to describe the appearance of Web content</dd>
                <dt>JavaScript (JS)</dt>
                <dd>The programming language used to build advanced Web sites and applications</dd>
              </dl>
              <h2>Inline HTML elements</h2>
              <p>HTML defines a long list of available inline tags...</p>
              <ul>
                <li><strong>To bold text</strong>, use <code>&lt;strong&gt;</code>.</li>
                <li><em>To italicize text</em>, use <code>&lt;em&gt;</code>.</li>
                <li>Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use <code>&lt;abbr&gt;</code>.</li>
                <li>Citations, like <cite>— Mark Otto</cite>, should use <code>&lt;cite&gt;</code>.</li>
                <li><del>Deleted</del> text should use <code>&lt;del&gt;</code> and <ins>inserted</ins> text should use <code>&lt;ins&gt;</code>.</li>
                <li>Superscript <sup>text</sup> uses <code>&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code>&lt;sub&gt;</code>.</li>
              </ul>
              <h2>Heading</h2>
              <p>This is some additional paragraph placeholder content...</p>
              <h3>Sub-heading</h3>
              <p>This is some additional paragraph placeholder content...</p>
              <pre><code>Example code block</code></pre>
            </article>

            {/* Blog Post 2 */}
            <article className="blog-post">
              <h2 className="blog-post-title">Another blog post</h2>
              <p className="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>
              <p>This is some additional paragraph placeholder content...</p>
              <blockquote>
                <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
              </blockquote>
              <h3>Example table</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Upvotes</th>
                    <th>Downvotes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Alice</td><td>10</td><td>11</td></tr>
                  <tr><td>Bob</td><td>4</td><td>3</td></tr>
                  <tr><td>Charlie</td><td>7</td><td>9</td></tr>
                </tbody>
                <tfoot>
                  <tr><td>Totals</td><td>21</td><td>23</td></tr>
                </tfoot>
              </table>
            </article>

            {/* Blog Post 3 */}
            <article className="blog-post">
              <h2 className="blog-post-title">New feature</h2>
              <p className="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>
              <ul>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ul>
            </article>

            {/* Pagination */}
            <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary" href="#">Older</a>
              <a className="btn btn-outline-secondary disabled" href="#" tabIndex="-1" aria-disabled="true">Newer</a>
            </nav>
          </div>

          {/* Sidebar */}
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely.</p>
              </div>
              <div className="p-4">
                <h4 className="fst-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                  {["March 2021","February 2021","January 2021","December 2020","November 2020","October 2020","September 2020","August 2020","July 2020","June 2020","May 2020","April 2020"].map((month) => (
                    <li key={month}><a href="#">{month}</a></li>
                  ))}
                </ol>
              </div>
              <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  {["GitHub","Twitter","Facebook"].map((site) => (
                    <li key={site}><a href="#">{site}</a></li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="blog-footer">
        <p>Blog template built for <a href="https://github.com/christynicholas-co/blog/">Artful Bytes Blog</a> by <a href="https://www.instagram.com/christynicholas.co/">@christynicholas.co</a>.</p>
        <p><a href="#">Back to top</a></p>
      </footer>
    </div>
  );
}

export default Blog;
