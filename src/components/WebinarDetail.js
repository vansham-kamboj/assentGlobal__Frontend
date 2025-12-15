import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Users, Star, Play, Download, Share2, ArrowLeft, CheckCircle2, ShieldCheck, Video } from 'lucide-react';
import './WebinarDetail.css';

const WebinarDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock Data (Kept exactly as you provided)
  const webinarDatabase = {
    1: {
      id: 1,
      title: "Advanced Leadership Strategies for Modern Managers",
      instructor: "Dr. Sarah Johnson",
      instructorBio: "Dr. Sarah Johnson is a renowned leadership expert with over 15 years of experience in organizational psychology and management consulting.",
      instructorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      date: "Dec 18, 2025",
      time: "2:00 PM EST",
      duration: "90 mins",
      participants: 245,
      maxParticipants: 500,
      rating: 4.9,
      reviews: 127,
      price: 49,
      originalPrice: 79,
      category: "HR Compliance",
      level: "Intermediate",
      language: "English",
      isLive: true,
      description: "Master the art of leading teams in an increasingly digital world. This comprehensive webinar covers essential leadership strategies, team management techniques, and communication skills needed for modern managers.",
      whatYouWillLearn: [
        "Advanced leadership frameworks and methodologies",
        "Effective team communication strategies",
        "Digital leadership in remote environments",
        "Conflict resolution and problem-solving techniques",
        "Performance management and feedback systems",
        "Building high-performing teams"
      ],
      agenda: [
        { time: "2:00 PM", topic: "Introduction and Welcome" },
        { time: "2:15 PM", topic: "Modern Leadership Challenges" },
        { time: "2:45 PM", topic: "Strategic Communication Techniques" },
        { time: "3:15 PM", topic: "Q&A and Interactive Discussion" }
      ],
      includes: [
        "Live interactive session",
        "Downloadable resources and templates",
        "Certificate of completion",
        "30-day access to recording",
        "Bonus leadership assessment tool"
      ]
    },
    // ... (Your other data objects would go here)
  };

  const webinar = webinarDatabase[id] || webinarDatabase[1];

  return (
    <div className="webinar-detail-page">
      
      {/* Background Decor */}
      <div className="bg-blob-top"></div>

      <div className="container">
        {/* Navigation */}
        <div className="nav-header">
           <Link to="/webinars" className="back-link">
             <div className="icon-circle"><ArrowLeft size={20} /></div>
             <span>Back to Webinars</span>
           </Link>
        </div>

        <div className="content-grid">
          
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="main-content">
            
            {/* Hero Header */}
            <div className="detail-hero">
              <div className="badges-row">
                 <span className="pill-category">{webinar.category}</span>
                 {webinar.isLive && (
                   <span className="pill-live">
                     <span className="pulse-dot"></span> Live Session
                   </span>
                 )}
              </div>
              
              <h1 className="hero-title">{webinar.title}</h1>
              
              <div className="hero-meta">
                 <div className="meta-pill">
                    <Calendar size={18} /> {webinar.date}
                 </div>
                 <div className="meta-pill">
                    <Clock size={18} /> {webinar.time}
                 </div>
                 <div className="meta-pill">
                    <Star size={18} className="star-icon" /> {webinar.rating} ({webinar.reviews} reviews)
                 </div>
              </div>
            </div>

            {/* Instructor Card */}
            <div className="section-card instructor-card">
              <img src={webinar.instructorImage} alt={webinar.instructor} className="instructor-img" />
              <div className="instructor-text">
                <span className="sub-label">Your Instructor</span>
                <h3>{webinar.instructor}</h3>
                <p>{webinar.instructorBio}</p>
              </div>
            </div>

            {/* Description */}
            <div className="section-card">
              <h2 className="section-heading">About This Webinar</h2>
              <p className="description-text">{webinar.description}</p>
            </div>

            {/* Learning Outcomes */}
            <div className="section-card">
              <h2 className="section-heading">What You'll Learn</h2>
              <div className="learning-grid">
                {webinar.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="learning-item">
                    <div className="check-icon"><CheckCircle2 size={20} /></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Agenda */}
            <div className="section-card">
              <h2 className="section-heading">Session Agenda</h2>
              <div className="timeline">
                {webinar.agenda.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="time-badge">{item.time}</span>
                      <span className="topic-text">{item.topic}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes */}
            <div className="section-card bg-green-light">
              <h2 className="section-heading">Included in Ticket</h2>
              <ul className="includes-list">
                {webinar.includes.map((item, index) => (
                  <li key={index}>
                    <ShieldCheck size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* --- RIGHT COLUMN: STICKY SIDEBAR --- */}
          <div className="sidebar-column">
            <div className="sticky-sidebar">
              
              <div className="price-card">
                <div className="price-header">
                  <span className="price-label">Total Price</span>
                  <div className="price-row">
                    <span className="current-price">${webinar.price}</span>
                    <span className="original-price">${webinar.originalPrice}</span>
                    <span className="discount-badge">SAVE 38%</span>
                  </div>
                </div>

                <div className="card-divider"></div>

                <div className="specs-list">
                   <div className="spec-row">
                      <Clock size={18} /> <span>{webinar.duration} Session</span>
                   </div>
                   <div className="spec-row">
                      <Users size={18} /> <span>{webinar.level} Level</span>
                   </div>
                   <div className="spec-row">
                      <Video size={18} /> <span>{webinar.language}</span>
                   </div>
                   <div className="spec-row">
                      <Download size={18} /> <span>Access Recordings</span>
                   </div>
                </div>

                <div className="quantity-control">
                  <label>Quantity</label>
                  <div className="qty-wrapper">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                </div>

                <div className="action-stack">
                  <button className="btn-primary">
                    {webinar.isLive ? 'Book Seat Now' : 'Buy Recording'}
                  </button>
                  <button className="btn-secondary">
                    Add to Cart
                  </button>
                </div>

                <div className="share-row">
                  <button className="text-btn"><Share2 size={16}/> Share</button>
                  <button className="text-btn"><Download size={16}/> Syllabus</button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WebinarDetail;