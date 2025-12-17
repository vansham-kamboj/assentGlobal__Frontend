import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import './Navbar.css';
import logoImg from '../assets/logo-assentGlocal.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize (Desktop view)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) document.body.style.overflow = 'hidden'; // Lock scroll
    else document.body.style.overflow = 'unset'; // Unlock scroll
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-wrapper">
          
          {/* 1. LEFT: LOGO */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logoimg">
              <img src={logoImg} alt="Assent Glocal" />
            </div>
          </Link>

          {/* 2. CENTER: DESKTOP SEARCH (Visible ONLY on Desktop) */}
          <div className="desktop-search-bar">
            <Search size={18} className="search-icon-static" />
            <input type="text" placeholder="Search for courses, webinars..." />
          </div>

          {/* 3. RIGHT: ACTIONS & MENU TOGGLE */}
          <div className="nav-actions">
            
            {/* Desktop Links (Visible ONLY on Desktop) */}
            <div className="desktop-links">
              <Link to="/" className="nav-link">Home</Link>
              
              <div className="nav-dropdown-wrapper">
                <span className="nav-link">Webinars <ChevronDown size={14}/></span>
                <div className="dropdown-content">
                  <Link to="/webinars">All Webinars</Link>
                  <Link to="/webinars/live">Live Sessions</Link>
                  <Link to="/webinars/recorded">Recorded</Link>
                </div>
              </div>

              <div className="nav-dropdown-wrapper">
                <span className="nav-link">Categories <ChevronDown size={14}/></span>
                <div className="dropdown-content">
                  <Link to="/category/hr">HR & Finance</Link>
                  <Link to="/category/tech">Technology</Link>
                  <Link to="/category/marketing">Marketing</Link>
                </div>
              </div>

              <Link to="/instructors" className="nav-link">Instructors</Link>
            </div>

            {/* Cart Icon (Visible on All Devices) */}
            <Link to="/cart" className="cart-btn">
              <ShoppingCart size={22} />
              <span className="cart-badge">2</span>
            </Link>

            {/* Login Button (Desktop Only) */}
            <Link to="/login" className="login-btn desktop-only">
              <User size={18} /> <span>Login</span>
            </Link>

            {/* Hamburger Toggle (Mobile Only) */}
            <button className="hamburger mobile-only" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE SIDE DRAWER --- */}
      <div className={`mobile-drawer-overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <span className="drawer-title">Menu</span>
          <button className="close-drawer" onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>

        <div className="drawer-content">
          
          {/* MOBILE SEARCH (Visible ONLY in Drawer) */}
          <div className="mobile-search-box">
            <Search size={18} className="mobile-search-icon" />
            <input type="text" placeholder="Search..." />
          </div>

          <Link to="/" className="drawer-link" onClick={closeMenu}>
            Home
          </Link>

          {/* Drawer Accordion 1 */}
          <div className={`drawer-accordion ${activeDropdown === 'webinars' ? 'active' : ''}`}>
            <button className="accordion-trigger" onClick={() => toggleDropdown('webinars')}>
              Webinars <ChevronRight size={16} className="arrow" />
            </button>
            <div className="accordion-body">
              <Link to="/webinars" onClick={closeMenu}>All Webinars</Link>
              <Link to="/webinars/live" onClick={closeMenu}>Live Sessions</Link>
              <Link to="/webinars/recorded" onClick={closeMenu}>Recorded</Link>
            </div>
          </div>

          {/* Drawer Accordion 2 */}
          <div className={`drawer-accordion ${activeDropdown === 'categories' ? 'active' : ''}`}>
            <button className="accordion-trigger" onClick={() => toggleDropdown('categories')}>
              Categories <ChevronRight size={16} className="arrow" />
            </button>
            <div className="accordion-body">
              <Link to="/category/hr" onClick={closeMenu}>HR & Finance</Link>
              <Link to="/category/tech" onClick={closeMenu}>Technology</Link>
              <Link to="/category/marketing" onClick={closeMenu}>Marketing</Link>
            </div>
          </div>

          <Link to="/instructors" className="drawer-link" onClick={closeMenu}>
            Instructors
          </Link>
        </div>

        <div className="drawer-footer">
          <Link to="/login" className="drawer-login-btn" onClick={closeMenu}>
            <User size={18} /> Login / Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
