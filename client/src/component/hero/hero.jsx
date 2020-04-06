import React from 'react';

export default function Hero() {
    return (
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-5 font-weight-normal text-white">We sell Everything</h1>
                <p className="lead font-weight-normal text-secondary">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                <a className="btn btn-outline-secondary" href="/products">Checkout All Products</a>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    );
}
