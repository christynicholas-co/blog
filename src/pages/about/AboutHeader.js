import React from 'react';

export default function AboutHeader() {
    return (
        <div className="container mt-5">
            {/* Existing H1 and Paragraphs */}
            <div className="row">
                <div className="col-12">
                    <h1>WELCOME, EVERYONE!</h1>
                    <p>At Artful Bytes we share simple recipes for code and cooking and life and tech that require <strong>10 ingredients or less, 1 bowl, or 30 minutes or less</strong> to prepare.</p>
                    <p>All are welcome.</p>
                    <p>Whether you're new to Artful Bytes or have been around for a while, we're so glad you're here.</p>
                </div>
            </div>

            {/* New Two-Column Section Structure (Image & List) */}
            <div className="row mt-4">
                <div className="col-md-6">
                    {/* Placeholder for the list content */}
                    <p>Placeholder for 10 ingredients or Less list section.</p>
                </div>
                <div className="col-md-6">
                    {/* Placeholder for the image (e.g., the apples image) */}
                    <p>Placeholder for image section.</p>
                </div>
            </div>

        </div>
    );
}
