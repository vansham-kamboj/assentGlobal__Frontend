import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';
import logoimg from '../assets/logo-assentGlocal.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2); // Example count

  const categories = [
    'All Webinars',
    'HR Compliance',
    'BFSI',
    'Life Science & Healthcare'
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          
          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logoimg} className='logoimg' alt="Rect Image"></img>
          </Link>

          {/* Search Bar - Modern Pill Shape */}
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search topics..." 
              className="search-input"
            />
            <Search className="search-icon" size={18} />
          </div>

          {/* Navigation Links */}
          <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
            
            <Link to="/" className="nav-link">Home</Link>
            
            {/* Webinars Dropdown */}
            <div className="nav-dropdown">
              <Link to="/webinars" className="nav-link dropdown-trigger">
                Webinars
                <ChevronDown size={14} className="dropdown-icon" />
              </Link>
              <div className="dropdown-menu">
                {categories.map((category, index) => (
                  <Link 
                    key={index}
                    to={`/webinars/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="dropdown-item"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            {/* Chronicles Dropdown */}
            <div className="nav-dropdown">
              <Link to="/chronicles" className="nav-link dropdown-trigger">
                Chronicles
                <ChevronDown size={14} className="dropdown-icon" />
              </Link>
              <div className="dropdown-menu">
                <Link to="/chronicles/latest" className="dropdown-item">Latest News</Link>
                <Link to="/chronicles/archived" className="dropdown-item">Archives</Link>
                <Link to="/chronicles/featured" className="dropdown-item">Featured Stories</Link>
              </div>
            </div>

            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            
            {/* Cart Icon */}
            <div className="cart-container">
              <ShoppingCart size={20} strokeWidth={2} />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>

            {/* Login CTA */}
            <Link to="/login" className="nav-link login-link">Login</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;