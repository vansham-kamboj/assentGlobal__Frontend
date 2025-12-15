import React from 'react';
import { 
  Monitor, 
  Headphones, 
  Users, 
  PlayCircle, 
  Calendar,
  BarChart3,
  PieChart
} from 'lucide-react';
import './UpcomingSeminars.css';

const UpcomingSeminars = () => {
  return (
    <section className="upcoming-seminars">
      <div className="container">
        
        <div className="section-header">
          <h2 className="section-title">UPCOMING SEMINARS</h2>
          <p className="section-subtitle">
            Industry-leading sessions designed for the modern professional.
          </p>
        </div>

        <div className="bento-grid">
          
          {/* --- LEFT CARD (Large Vertical) --- */}
          {/* Maps to "Unlock Hidden Patterns" */}
          <div className="bento-card bento-large">
            
            {/* Visual Area (Simulating the 4 icons grid) */}
            <div className="large-card-visual">
              <div className="visual-circle-group">
                <div className="visual-item">
                   <Monitor size={32} color="#35B729" strokeWidth={1.5} />
                </div>
                <div className="visual-item highlight">
                   <BarChart3 size={32} color="#333" strokeWidth={1.5} />
                   <div className="float-icon float-top-right">
                     <span style={{width:'8px', height:'8px', background:'red', borderRadius:'50%', display:'block'}}></span>
                   </div>
                </div>
                <div className="visual-item highlight">
                   <span style={{fontWeight:700, fontSize:'1.2rem'}}>98%</span>
                </div>
                <div className="visual-item">
                   <PieChart size={32} color="#35B729" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="large-card-content">
              <h3 className="large-title">Upcoming Webinar</h3>
              <p className="large-desc">
                Live intuitive trainings conveyed by prestigious industry pioneers 
                utilizing the most recent innovation.
              </p>
              <a href="/webinars/upcoming" className="pill-btn">Try Now</a>
            </div>
          </div>


          {/* --- RIGHT COLUMN (Stack) --- */}
          <div className="bento-stack">
            
            {/* Top Right Card */}
            {/* Maps to "Meet the AI" */}
            <div className="bento-card bento-small">
              <div className="small-content">
                <h3 className="small-title">Recorded Webinar</h3>
                <p className="small-desc">
                  Leverage AI-powered forecasts to anticipate trends and plan ahead 
                  with our extensive library.
                </p>
                <a href="/webinars/recorded" className="pill-btn">Explore Library</a>
              </div>
              
              <div className="small-visual">
                <Headphones size={48} color="#111" strokeWidth={1} />
                <div className="float-icon float-bottom-left">
                  <PlayCircle size={20} color="#35B729" />
                </div>
              </div>
            </div>

            {/* Bottom Right Card */}
            {/* Maps to "Reminders" */}
            <div className="bento-card bento-small">
              <div className="small-content">
                <h3 className="small-title">Upcoming Seminar</h3>
                <p className="small-desc">
                  High class seminars over the globe. Organize and gain from specialists alike.
                </p>
                <a href="/seminars/upcoming" className="pill-btn" style={{background: '#35B729'}}>
                  Join Event
                </a>
              </div>
              
              <div className="small-visual">
                <Users size={48} color="#111" strokeWidth={1} />
                <div className="float-icon float-top-right">
                  <Calendar size={20} color="#35B729" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default UpcomingSeminars;