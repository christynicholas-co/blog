import React from 'react';

export default function IconSystem() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 text-center mb-4">
                    <p className="text-uppercase" style={{ letterSpacing: '2px' }}>Our icon system to help you identify</p>
                    <h2>LOREM IPSUM</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                {/* Placeholder Columns for Icons/Text */}
                <div className="col-6 col-md-3 text-center">
                    {/* Placeholder for Icon (e.g., SVG or FontAwesome) */}
                    <p>Icon Placeholder</p>
                    <p><strong>Vegan</strong></p>
                </div>
                <div className="col-6 col-md-3 text-center">
                    <p>Icon Placeholder</p>
                    <p><strong>Vegetarian</strong></p>
                </div>
                <div className="col-6 col-md-3 text-center">
                    <p>Icon Placeholder</p>
                    <p><strong>Dairy-Free</strong></p>
                </div>
                 <div className="col-6 col-md-3 text-center">
                    <p>Icon Placeholder</p>
                    <p><strong>Naturally Sweetened</strong></p>
                </div>
            </div>
        </div>
    );
}
