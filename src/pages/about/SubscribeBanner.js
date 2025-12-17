import React from 'react';

export default function SubscribeBanner() {
    return (
        <div className="container-fluid mt-5 p-4" style={{ backgroundColor: '#215c4d', color: 'white' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h4>Want more deliciousness?</h4>
                        <p>Subscribe here and we'll send you an email as new recipes are published AND our fan favorites ebook!</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        {/* Placeholder for form input/button */}
                        <input type="email" placeholder="ENTER EMAIL ADDRESS" className="form-control me-2" style={{ maxWidth: '250px' }} />
                        <button className="btn btn-warning">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
