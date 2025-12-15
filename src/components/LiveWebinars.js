import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar } from 'lucide-react';
import './LiveWebinars.css';

const LiveWebinars = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const liveWebinars = [
    {
      id: 1,
      category: "HR & Finance",
      title: "Basic Accounting and Finance for Human Resources",
      instructor: "Melveen Stevenson",
      date: "Dec 01, 2025",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 2,
      category: "Management",
      title: "How To Avoid Hiring Victims, Liars, and Saboteurs",
      instructor: "Teri Morning",
      date: "Dec 03, 2025",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 3,
      category: "Policy",
      title: "PTO or Sick Vacation With Mandatory Paid Leave",
      instructor: "Bob McKenzie",
      date: "Dec 04, 2025",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 4,
      category: "Leadership",
      title: "Effective Succession Planning Strategies",
      instructor: "William J. Rothwell",
      date: "Dec 09, 2025",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 5,
      category: "Business",
      title: "Corporate Strategy for 2026",
      instructor: "Dr. Sarah Jenkins",
      date: "Dec 12, 2025",
      image: "https://images.unsplash.com/photo-1598550874175-4d7112ee750c?auto=format&fit=crop&q=80&w=200",
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollTop = window.scrollY;
      
      // Calculate 0% to 100% progress through the section
      const start = sectionTop;
      const end = sectionTop + sectionHeight - windowHeight;

      let pct = (scrollTop - start) / (end - start);
      pct = Math.max(0, Math.min(1, pct));
      
      setProgress(pct);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- SCROLL MATH ---
  // We assume the Right Column takes up about 65% of the screen width
  // Total Width of all cards + gaps
  const cardWidth = 380;
  const gap = 40;
  const totalTrackWidth = liveWebinars.length * (cardWidth + gap);
  
  // The visible window for the cards (approx 65vw)
  const visibleWidth = window.innerWidth * 0.65;

  // We want to scroll until the end of the track aligns with the end of the screen
  const maxTranslate = totalTrackWidth - visibleWidth + 100; // +100 for padding
  
  const translateX = -(progress * maxTranslate);

  return (
    <section className="scroll-section-outer" ref={sectionRef}>
      <div className="sticky-wrapper">
        <div className="container split-layout">
          
          {/* LEFT SIDE: HEADER */}
          <div className="left-content">
            <h2 className="section-title">Trending <br/><span className="highlight">Webinars</span></h2>
            <p className="section-description">
              Discover the latest industry insights. <br/>
              Scroll down to explore our upcoming live sessions.
            </p>
            
            <div className="scroll-indicator">
               <div className="scroll-line"></div>
               <span>Scroll to Explore</span>
            </div>
          </div>

          {/* RIGHT SIDE: SCROLLING CARDS */}
          <div className="right-content">
            <div 
              className="horizontal-track" 
              ref={trackRef}
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {liveWebinars.map((webinar) => (
                <Link to={`/webinar/${webinar.id}`} key={webinar.id} className="card-link">
                  <div className="modern-card">
                    
                    <div className="card-top-row">
                      <span className="category-tag">{webinar.category}</span>
                      <div className="date-badge">
                        <Calendar size={14} />
                        <span>{webinar.date}</span>
                      </div>
                    </div>

                    <div className="card-content">
                      <h3 className="card-title">{webinar.title}</h3>
                    </div>

                    <div className="card-footer">
                      <div className="instructor-info">
                        <img src={webinar.image} alt={webinar.instructor} className="avatar" />
                        <div className="instructor-text">
                          <span className="label">Instructor</span>
                          <span className="name">{webinar.instructor}</span>
                        </div>
                      </div>
                      
                      <div className="icon-btn">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    <div className="glow-effect"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LiveWebinars;