import React from 'react';

export default function WeeklyUpdates() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h2>Expect new recipes weekly</h2>
                    <p>with a mix of savory and sweet including desserts, breakfasts, entries, sides, snacks, and more (find all recipes here). When you make one of our recipes we want you to say "How was it that simple but still tastes that good?!"</p>
                </div>
                <div className="col-md-6">
                    {/* Placeholder for the cauliflower image */}
                   <img src="https://picsum.photos/250" alt="placeholder" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}
