import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../component/navbar/navbar';
import Footer from '../../component/footer/footer';
import ProductList from '../../component/product-list/product-list';

function ProductPage() {
    return (
        <div >
            <Navbar />
            <ProductList />
            <Footer />

        </div>
    )
}

export default ProductPage;
