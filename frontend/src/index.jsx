import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Catalog from './components/pages/Catalog';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Legal from './components/pages/Legal';
import Product from './components/pages/Product';
import { CartProvider, HeaderProvider } from './components/utils/context';
import Checkout from './components/pages/Checkout';
import ThankYou from './components/pages/Thank-you';
import StyledBase from './components/styles/base';
import StyledLayouts from './components/styles/Layouts';
import StyledComponents from './components/styles/Components';
import Error404 from './components/pages/error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <HeaderProvider>
        <CartProvider>
          <StyledBase />
          <StyledLayouts />
          <StyledComponents />
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/catalog' element={<Catalog />}/>
            <Route path='/product/:productId' element={<Product />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/thank-you' element={<ThankYou />}/>
            <Route path='/faq' element={<Legal />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='*' element={<Error404 />} />
          </Routes>
          <Footer />
        </CartProvider>
      </HeaderProvider>
    </Router>
  </React.StrictMode>
);

