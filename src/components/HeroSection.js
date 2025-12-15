import React, { useState, useEffect } from 'react';
import { Play, Users, Award, BookOpen, Clock } from 'lucide-react';
import bgImage from '../assets/bg-image.png';
import './HeroSection.css';

const HeroSection = () => {
  const [counters, setCounters] = useState({
    students: 0,
    webinars: 0,
    experts: 0,
    hours: 0
  });
  
  // Use a state to trigger the entrance animation class
  const [isLoaded, setIsLoaded] = useState(false);

  const finalCounts = {
    students: 25000,
    webinars: 500,
    experts: 150,
    hours: 10000
  };

  useEffect(() => {
    setIsLoaded(true);

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalCounts).map(key => {
      const increment = finalCounts[key] / steps;
      let currentCount = 0;
      
      return setInterval(() => {
        currentCount += increment;
        if (currentCount >= finalCounts[key]) {
          currentCount = finalCounts[key];
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentCount)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          
          {/* Main Title */}
          <h1 className={`hero-title ${isLoaded ? 'fade-up' : ''}`} style={{ animationDelay: '0.1s' }}>
            Transform Your Career with<br />
            <span className="gradient-text">Expert-Led Webinars</span>
          </h1>
          
          {/* Subtitle */}
          <p className={`hero-subtitle ${isLoaded ? 'fade-up' : ''}`} style={{ animationDelay: '0.2s' }}>
            Join thousands of professionals advancing their skills. 
            Learn from industry leaders, gain practical insights, and accelerate your growth.
          </p>
          
          {/* Buttons */}
          <div className={`hero-buttons ${isLoaded ? 'fade-up' : ''}`} style={{ animationDelay: '0.3s' }}>
            <button className="hero-btn btn-primary">
              <Play size={18} fill="currentColor" />
              Explore Webinars
            </button>
            <button className="hero-btn btn-secondary">
              Watch Demo
            </button>
          </div>

          {/* Stats Bar - Completely restructured for alignment */}
          <div className={`stats-container ${isLoaded ? 'fade-up' : ''}`} style={{ animationDelay: '0.5s' }}>
            
            <div className="stat-item">
              <div className="stat-header">
                <Users size={16} />
                <span>Active Learners</span>
              </div>
              <div className="stat-number">
                {counters.students.toLocaleString()}+
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-header">
                <BookOpen size={16} />
                <span>Webinars</span>
              </div>
              <div className="stat-number">
                {counters.webinars}+
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-header">
                <Award size={16} />
                <span>Experts</span>
              </div>
              <div className="stat-number">
                {counters.experts}+
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-header">
                <Clock size={16} />
                <span>Hours</span>
              </div>
              <div className="stat-number">
                {counters.hours.toLocaleString()}+
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;