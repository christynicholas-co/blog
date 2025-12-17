import React from 'react';
// This component is designed to be reusable. It would typically accept post data as props.
// For now, I'll use the static content from the first item provided in your HTML as a placeholder example within the template structure.
import '../../styles/blog/PostPreview.css'; 

export default function PostPreview({ post }) {
    // A real implementation might use props like this:
    // const { title, date, time, comments, intro, link, thumbUrl } = post;
    
    // Using static data for the template structure as requested:
    return (
        <div className="item mb-5">
            <div className="row g-3 g-xl-0">
                <div className="col-2 col-xl-3">
                    {/* Assuming image paths are correctly handled in a React environment */}
                    <img className="img-fluid post-thumb" src="assets/images/blog/blog-post-thumb-1.jpg" alt="post thumbnail" />
                </div>
                <div className="col">
                    <h3 className="title mb-1"><a className="text-link" href="blog-post.html">Top 3 JavaScript Frameworks</a></h3>
                    <div className="meta mb-1">
                        <span className="date">Published 2 days ago</span>
                        <span className="time">5 min read</span>
                        <span className="comment"><a className="text-link" href="#">8 comments</a></span>
                    </div>
                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                    <a className="text-link" href="blog-post.html">Read more &rarr;</a>
                </div>{/*//col*/}
            </div>{/*//row*/}
        </div>
    );
}

