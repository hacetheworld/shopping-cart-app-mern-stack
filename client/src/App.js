import React from 'react';
import './App.css';
import { Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home/home.page';
import ProductPage from './pages/products/product.page';

function App() {
  return (
    <div >
      <Route exact path='/' component={HomePage} />
      <Route exact path='/products' component={ProductPage} />
    </div>
  )
}

export default App;
