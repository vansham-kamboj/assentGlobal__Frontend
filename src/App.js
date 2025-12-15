import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Webinars from './pages/Webinars';
import Chronicles from './pages/Chronicles';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import WebinarDetail from './components/WebinarDetail';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/webinars/:category" element={<Webinars />} />
          <Route path="/webinar/:id" element={<WebinarDetail />} />
          <Route path="/chronicles" element={<Chronicles />} />
          <Route path="/chronicles/:category" element={<Chronicles />} />
          <Route path="/chronicle/:id" element={<WebinarDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;