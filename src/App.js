import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import Blogs from './Component/Blogs';
import Services from './Component/Services';
import Error from './Component/Error';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

const App = () => {
  return (
    <>
    {/* <h1>Comes from App js file</h1> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/services' element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>    
    </>
  );
};

export default App;