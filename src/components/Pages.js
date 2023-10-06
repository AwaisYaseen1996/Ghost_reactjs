import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Tag from './Tags';
import Author from './Author';
import About from './About'
import Header from './Header';
import Footer from './Footer';
import './responsive.css'

const Pages = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tag/getting-started" element={<Tag />} />
                <Route path="/author/ghost" element={<Author />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default Pages;
