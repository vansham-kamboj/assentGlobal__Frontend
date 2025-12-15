import React, { useState } from 'react';
import { 
  Cpu, 
  FileCheck, 
  Users, 
  Globe, 
  ShieldCheck,
  Zap 
} from 'lucide-react';
import './Benefits.css';
import featureImage from '../assets/Learning-illustration.png';

const Benefits = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  
  const benefitsData = [
    {
      id: 1,
      icon: <Users size={24} />,
      title: "In-house research capabilities with renowned experts",
      description: "We collaborate with top industry minds to bring you proprietary insights and cutting-edge methodologies."
    },
    {
      id: 2,
      icon: <FileCheck size={24} />,
      title: "Training module in regulatory compliance",
      description: "Stay ahead of legal requirements with up-to-date curriculums designed for strict industry standards."
    },
    {
      id: 3,
      icon: <Zap size={24} />,
      title: "Making the training practical and accessible",
      description: "Our flexible learning formats ensure that knowledge is easily applied to daily real-world tasks."
    },
    {
      id: 4,
      icon: <Globe size={24} />,
      title: "Best practices across industries",
      description: "We benchmark against global standards to ensure your team is learning from the absolute best."
    },
    {
      id: 5,
      icon: <ShieldCheck size={24} />,
      title: "Safety and continuous improvement of operations",
      description: "Prioritizing operational safety and creating feedback loops for constant organizational growth."
    }
  ];

  
  
  

  return (
    <section className="benefits-section">
      <div className="container">
        
        {/* Main Header Text */}
        <div className="benefits-header">
          <h2 className="section-title">
            Assent Global influence the best technology, in-house research capabilities
          </h2>
          <p className="section-description">
            We are passionate about learning and development of millions of individuals 
            and corporates all over the globe ensuring the quality, safety, and continuous 
            improvement of global operations.
          </p>
        </div>

        <div className="benefits-content">
          
          {/* Left: Interactive List */}
          <div className="benefits-list">
            {benefitsData.map((item, index) => (
              <div 
                key={item.id} 
                className={`benefit-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="benefit-header">
                  <div className="benefit-icon">
                    {item.icon}
                  </div>
                  <h3 className="benefit-title">{item.title}</h3>
                </div>
                
                <div className="benefit-description">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Dynamic Image */}
          <div className="benefits-image-wrapper">
            <img 
              src={featureImage} 
              alt="Corporate Training Dashboard" 
              className="benefits-image" 
            />
            
            {/* Decorative Floating Badge */}
            <div className="floating-badge">
               <Cpu size={20} color="#35B729" />
               <span>AI-Powered Learning</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;