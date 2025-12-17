import React from 'react';
import BlogSidebar from './BlogSidebar';
import BlogCTA from './BlogCTA';
import PostPreview from './PostPreview';
import '../../styles/blog/Blog.css';

const postsData = [
  { id: 1, title: "Top 3 JavaScript Frameworks", date: "2 days ago", time: "5 min read", comments: 8, intro: "Lorem ipsum...", thumbUrl: "assets/images/blog/blog-post-thumb-1.jpg" },
  { id: 2, title: "About Remote Working", date: "3 months ago", time: "3 min read", comments: 26, intro: "Lorem ipsum...", thumbUrl: "assets/images/blog/blog-post-thumb-2.jpg" },
  { id: 3, title: "A Guide to Becoming a Full-Stack Developer", date: "2 months ago", time: "15 min read", comments: 3, intro: "Lorem ipsum...", thumbUrl: "assets/images/blog/blog-post-thumb-3.jpg" },
  { id: 4, title: "High Performance JavaScript", date: "1 month ago", time: "8 min read", comments: 12, intro: "Lorem ipsum...", thumbUrl: "assets/images/blog/blog-post-thumb-4.jpg" },
  { id: 5, title: "Learn React in 24 Hours", date: "2 months ago", time: "10 min read", comments: 23, intro: "Lorem ipsum...", thumbUrl: "assets/images/blog/blog-post-thumb-5.jpg" },
  { id: 6, title: "How to Build Desktop Apps with HTML, CSS and JavaScript", date: "3 months ago", time: "2 min read", comments: 1, intro: "Lorem ipsum...", thumbUrl: "assets/images/blog/blog-post-thumb-6.jpg" },
];

export default function Blog() {
  return (
    <div className="main-wrapper">

      {/* HEADER lives above this in layout */}

      <div className="blog-layout">
        <aside className="blog-left">
          <BlogSidebar />
        </aside>

        <main className="blog-right">
          <BlogCTA />

          <section className="blog-list px-3 py-5 p-md-5">
            <div className="container single-col-max-width">
              {postsData.map(post => (
                <PostPreview key={post.id} post={post} />
              ))}

              <nav className="blog-nav nav nav-justified my-5">
                <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">
                  Previous
                </a>
                <a className="nav-link-next nav-item nav-link rounded" href="#">
                  Next
                </a>
              </nav>
            </div>
          </section>

          <nav className="blog-pagination" aria-label="Pagination">
            <a className="btn btn-outline-primary" href="#">Older</a>
            <a className="btn btn-outline-secondary disabled" href="#" tabIndex="-1" aria-disabled="true">
              Newer
            </a>
          </nav>

          <footer className="blog-footer">
        <p>
          Blog template built for{' '}
          <a href="https://github.com/christynicholas-co/blog/">Artful Bytes Blog</a> by{' '}
          <a href="https://www.instagram.com/christynicholas.co/">@christynicholas.co</a>.
        </p>
        <p><a href="#">Back to top</a></p>
      </footer>

        </main>
      </div>

      

    </div>
  );
}
