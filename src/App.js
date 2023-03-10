import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home.js'
import Nopage from './page/Nopage.js'
import About from './page/About.js';
import Contact from './page/Contact.js';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Service from './page/Service.js';
import Gototop from './component/Gototop.js';
import Singleproduct from './page/Singleproduct.js';

const App = () => {
  return (
    <div>
      <Gototop />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/singleproduct/:id' element={<Singleproduct />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App