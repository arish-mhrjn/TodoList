import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import Index from './Index';
import About from './About';
import Login from './Login';

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/index" element={<Index></Index>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/login" element={<Login></Login>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
