import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Users, Eye, Search } from 'lucide-react';
import './Chronicles.css';

const Chronicles = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || 'all-webinars');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [filteredChronicles, setFilteredChronicles] = useState([]);

  const categories = [
    { id: 'all-webinars', name: 'All Chronicles', count: 18 },
    { id: 'hr-compliance', name: 'HR Compliance', count: 6 },
    { id: 'bfsi', name: 'BFSI', count: 4 },
    { id: 'life-science-and-health-care', name: 'Life Science and Health Care', count: 8 }
  ];

  // Mock chronicles data
  const allChronicles = [
    {
      id: 1,
      title: "How Leadership Training Transformed Our Remote Team",
      author: "Sarah Mitchell",
      authorTitle: "HR Director at TechCorp",
      date: "Dec 15, 2025",
      readTime: "5 min read",
      views: 1240,
      category: "hr-compliance",
      image: "/api/placeholder/400/250",
      excerpt: "Discover how our company implemented leadership training programs that resulted in 40% improvement in team productivity and employee satisfaction.",
      tags: ["Leadership", "Remote Work", "Team Management"]
    },
    {
      id: 2,
      title: "Digital Banking Transformation: A Success Story",
      author: "Michael Rodriguez",
      authorTitle: "CTO at FinanceFirst Bank",
      date: "Dec 12, 2025",
      readTime: "7 min read",
      views: 890,
      category: "bfsi",
      image: "/api/placeholder/400/250",
      excerpt: "Learn how we successfully digitized our banking operations, reducing processing time by 60% while maintaining security standards.",
      tags: ["Digital Transformation", "Banking", "Technology"]
    },
    {
      id: 3,
      title: "Implementing HIPAA Compliance in Small Clinics",
      author: "Dr. Jennifer Park",
      authorTitle: "Medical Director",
      date: "Dec 10, 2025",
      readTime: "6 min read",
      views: 567,
      category: "life-science-and-health-care",
      image: "/api/placeholder/400/250",
      excerpt: "A practical guide to implementing HIPAA compliance measures in small healthcare practices without breaking the budget.",
      tags: ["HIPAA", "Healthcare", "Compliance"]
    },
    {
      id: 4,
      title: "Building Effective Communication Channels",
      author: "Alex Thompson",
      authorTitle: "Communications Manager",
      date: "Dec 8, 2025",
      readTime: "4 min read",
      views: 723,
      category: "hr-compliance",
      image: "/api/placeholder/400/250",
      excerpt: "How we improved internal communication by 50% using structured feedback systems and regular team check-ins.",
      tags: ["Communication", "Team Building", "Feedback"]
    },
    {
      id: 5,
      title: "Risk Management in Cryptocurrency Trading",
      author: "David Chen",
      authorTitle: "Risk Analyst",
      date: "Dec 5, 2025",
      readTime: "8 min read",
      views: 1156,
      category: "bfsi",
      image: "/api/placeholder/400/250",
      excerpt: "Essential risk management strategies for cryptocurrency trading platforms and how to protect investor assets.",
      tags: ["Risk Management", "Cryptocurrency", "Finance"]
    },
    {
      id: 6,
      title: "Clinical Trial Efficiency: Lessons Learned",
      author: "Dr. Maria Santos",
      authorTitle: "Clinical Research Coordinator",
      date: "Dec 3, 2025",
      readTime: "9 min read",
      views: 445,
      category: "life-science-and-health-care",
      image: "/api/placeholder/400/250",
      excerpt: "Key insights from managing multiple clinical trials and how proper planning can reduce timelines by 30%.",
      tags: ["Clinical Trials", "Research", "Efficiency"]
    }
  ];

  useEffect(() => {
    let filtered = allChronicles;

    // Filter by category
    if (selectedCategory !== 'all-webinars') {
      filtered = filtered.filter(chronicle => chronicle.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(chronicle =>
        chronicle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chronicle.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chronicle.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort chronicles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date) - new Date(a.date);
        case 'views':
          return b.views - a.views;
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime);
        default:
          return 0;
      }
    });

    setFilteredChronicles(filtered);
  }, [selectedCategory, searchTerm, sortBy]);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  const getCategoryName = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.name : 'All Chronicles';
  };

  return (
    <div className="chronicles-page">
      <div className="container">
        {/* Header */}
        <div className="chronicles-header">
          <div className="header-content">
            <h1 className="page-title">
              {category ? getCategoryName(category) : 'Chronicles'}
            </h1>
            <p className="page-subtitle">
              Real stories and insights from professionals who transformed their careers
            </p>
          </div>
          
          <div className="header-stats">
            <div className="stat">
              <span className="stat-number">{filteredChronicles.length}</span>
              <span className="stat-label">Stories Available</span>
            </div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Total Readers</span>
            </div>
          </div>
        </div>

        <div className="chronicles-content">
          {/* Sidebar */}
          <div className="chronicles-sidebar">
            {/* Search */}
            <div className="search-section">
              <h3>Search Chronicles</h3>
              <div className="search-box">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by title, author, or topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="filter-section">
              <h3>Categories</h3>
              <div className="category-list">
                {categories.map(cat => (
                  <Link
                    key={cat.id}
                    to={cat.id === 'all-webinars' ? '/chronicles' : `/chronicles/${cat.id}`}
                    className={`category-item ${selectedCategory === cat.id ? 'active' : ''}`}
                  >
                    <span className="category-name">{cat.name}</span>
                    <span className="category-count">{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="filter-section">
              <h3>Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="date">Latest</option>
                <option value="views">Most Viewed</option>
                <option value="readTime">Quick Reads</option>
              </select>
            </div>
          </div>

          {/* Main Content */}
          <div className="chronicles-main">
            {/* Results Header */}
            <div className="results-header">
              <div className="results-info">
                <span className="results-count">
                  Showing {filteredChronicles.length} chronicle{filteredChronicles.length !== 1 ? 's' : ''}
                </span>
                {searchTerm && (
                  <span className="search-info">for "{searchTerm}"</span>
                )}
              </div>
            </div>

            {/* Chronicles Grid */}
            <div className="chronicles-grid">
              {filteredChronicles.map(chronicle => (
                <article key={chronicle.id} className="chronicle-card">
                  <div className="chronicle-image">
                    <div className="image-placeholder">📖</div>
                    <div className="chronicle-category">
                      {getCategoryName(chronicle.category)}
                    </div>
                  </div>

                  <div className="chronicle-content">
                    <div className="chronicle-meta">
                      <div className="meta-item">
                        <Calendar size={14} />
                        <span>{chronicle.date}</span>
                      </div>
                      <div className="meta-item">
                        <Clock size={14} />
                        <span>{chronicle.readTime}</span>
                      </div>
                      <div className="meta-item">
                        <Eye size={14} />
                        <span>{chronicle.views} views</span>
                      </div>
                    </div>

                    <h3 className="chronicle-title">{chronicle.title}</h3>
                    
                    <div className="author-info">
                      <div className="author-avatar">👤</div>
                      <div className="author-details">
                        <div className="author-name">{chronicle.author}</div>
                        <div className="author-title">{chronicle.authorTitle}</div>
                      </div>
                    </div>

                    <p className="chronicle-excerpt">{chronicle.excerpt}</p>

                    <div className="chronicle-tags">
                      {chronicle.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>

                    <Link to={`/chronicle/${chronicle.id}`} className="read-more-btn">
                      Read Full Story
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredChronicles.length === 0 && (
              <div className="no-results">
                <h3>No chronicles found</h3>
                <p>Try adjusting your search criteria or browse different categories.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chronicles;