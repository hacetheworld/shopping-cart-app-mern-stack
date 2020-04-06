import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../component/navbar/navbar';
import Hero from '../../component/hero/hero';
import Footer from '../../component/footer/footer';
import ProductList from '../../component/product-list/product-list';

function HomePage() {
    return (
        <div >
            <Navbar />
            <Hero />
            <ProductList />
            <Footer />

        </div>
    )
}

export default HomePage;
