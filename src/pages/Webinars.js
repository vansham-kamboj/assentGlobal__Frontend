import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Search, ArrowUpRight, Filter } from 'lucide-react';
import './Webinars.css';

const Webinars = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || 'all-webinars');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [filteredWebinars, setFilteredWebinars] = useState([]);

  const categories = [
    { id: 'all-webinars', name: 'All Webinars', count: 9 },
    { id: 'hr-finance', name: 'HR & Finance', count: 4 },
    { id: 'management', name: 'Management', count: 3 },
    { id: 'leadership', name: 'Leadership', count: 2 }
  ];

  const allWebinars = [
    {
      id: 1,
      title: "Basic Accounting and Finance for the Human Resources Professional",
      instructor: "Melveen Stevenson",
      date: "Dec 01, 2025",
      category: "hr-finance",
      categoryDisplay: "HR & FINANCE",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      price: 199
    },
    {
      id: 2,
      title: "How To Avoid Hiring Victims, Liars, Bullies, And Saboteurs",
      instructor: "Teri Morning",
      date: "Dec 03, 2025",
      category: "management",
      categoryDisplay: "MANAGEMENT",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
      price: 249
    },
    {
      id: 3,
      title: "PTO or Sick Vacation With Mandatory Paid Leave Gaining Ground",
      instructor: "Bob McKenzie",
      date: "Dec 04, 2025",
      category: "hr-finance",
      categoryDisplay: "HR POLICY",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      price: 179
    },
    {
      id: 4,
      title: "Effective Succession Planning",
      instructor: "William J. Rothwell",
      date: "Dec 09, 2025",
      category: "leadership",
      categoryDisplay: "LEADERSHIP",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
      price: 299
    },
    {
      id: 5,
      title: "Project Management for Administrative Professionals",
      instructor: "Rebecca Staton-Reinstein",
      date: "Dec 10, 2025",
      category: "management",
      categoryDisplay: "PROJECT MGMT",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200",
      price: 189
    },
    {
      id: 6,
      title: "Accelerate AI Readiness Your Roadmap for Successful AI Adoption",
      instructor: "Dr. B. Lynn Ware",
      date: "Dec 11, 2025",
      category: "management",
      categoryDisplay: "TECHNOLOGY",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      price: 349
    },
    {
      id: 7,
      title: "How To Deal with Clashing Co-workers",
      instructor: "Bob Churilla",
      date: "Dec 12, 2025",
      category: "management",
      categoryDisplay: "CONFLICT RES",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      price: 159
    },
    {
      id: 8,
      title: "Linking Pay to Performance-Increasing Employee Engagement",
      instructor: "Diane L. Dee",
      date: "Dec 12, 2025",
      category: "hr-finance",
      categoryDisplay: "COMPENSATION",
      image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80&w=200",
      price: 229
    },
    {
      id: 9,
      title: "Harassment, Bullying, Gossip, Confrontational and Disruptive Behaviour",
      instructor: "Bruce Lee",
      date: "Dec 16, 2025",
      category: "management",
      categoryDisplay: "COMPLIANCE",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      price: 279
    }
  ];

  useEffect(() => {
    let filtered = allWebinars;

    if (selectedCategory !== 'all-webinars') {
      filtered = filtered.filter(webinar => webinar.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(webinar =>
        webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        webinar.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort webinars
    filtered = [...filtered].sort((a, b) => { // Create a copy before sorting
      switch (sortBy) {
        case 'date': return new Date(a.date) - new Date(b.date);
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        default: return 0;
      }
    });

    setFilteredWebinars(filtered);
  }, [selectedCategory, searchTerm, sortBy]);

  const getCategoryName = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.name : 'All Webinars';
  };

  return (
    <div className="webinars-page">
      <div className="container">
        
        {/* Header */}
        <div className="webinars-header">
          <div className="header-content">
            <h1 className="page-title">
              {category ? getCategoryName(category) : 'All Webinars'}
            </h1>
            <p className="page-subtitle">
              Discover expert-led webinars designed to advance your professional skills
            </p>
          </div>
        </div>

        <div className="webinars-content-wrapper">
          
          {/* Sidebar */}
          <div className="webinars-sidebar">
            <div className="sidebar-sticky">
              <div className="filter-group">
                <h3>Search</h3>
                <div className="search-box">
                  <Search size={18} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="filter-group">
                <h3>Categories</h3>
                <div className="category-list">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                    >
                      <span>{cat.name}</span>
                      <span className="count-badge">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <h3>Sort By</h3>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                  <option value="date">Date: Upcoming</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="webinars-main">
            <div className="results-info">
              Showing {filteredWebinars.length} results
            </div>

            <div className="webinars-grid">
              {filteredWebinars.map(webinar => (
                <Link to={`/webinar/${webinar.id}`} key={webinar.id} className="card-link-wrapper">
                  <div className="clean-card">
                    
                    {/* Top Row */}
                    <div className="card-top">
                      <span className="category-pill">{webinar.categoryDisplay}</span>
                      <div className="date-row">
                        <Calendar size={16} />
                        <span>{webinar.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="card-title">{webinar.title}</h3>

                    {/* Divider */}
                    <div className="card-divider"></div>

                    {/* Bottom Row */}
                    <div className="card-bottom">
                      <div className="instructor-box">
                        <img src={webinar.image} alt={webinar.instructor} className="instructor-img" />
                        <div className="instructor-meta">
                          <span className="label">INSTRUCTOR</span>
                          <span className="name">{webinar.instructor}</span>
                        </div>
                      </div>
                      <div className="arrow-btn">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>

                  </div>
                </Link>
              ))}
            </div>

            {filteredWebinars.length === 0 && (
              <div className="no-results">
                <h3>No webinars found</h3>
                <p>Try adjusting your search criteria.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Webinars;