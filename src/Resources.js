import React, { useState } from 'react';
import './Resources.css';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoCall, IoSchool, IoPeople, IoHome, IoCheckmarkCircle, IoPerson, IoSearch, IoMedkit } from 'react-icons/io5';
import { FaRegLightbulb } from 'react-icons/fa6';

function Resources() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const resources = [
    {
      category: 'Professional Help',
      icon: <IoCall />,
      color: '#fecaca',
      items: [
        {
          name: 'Campus Counseling',
          description: 'Available Mon-Fri, 9am-5pm',
          urgent: false
        },
        {
          name: 'Crisis Hotline',
          description: '24/7 confidential support',
          urgent: true
        }
      ]
    },
    {
      category: 'Academic Support',
      icon: <IoSchool />,
      color: '#bfdbfe',
      items: [
        {
          name: 'Tutoring Center',
          description: 'Get help with specific courses',
          urgent: false
        },
        {
          name: 'Academic Advisor',
          description: 'Discuss workload & extensions',
          urgent: false
        }
      ]
    },
    {
      category: 'Peer Support',
      icon: <IoPeople />,
      color: '#fef08a',
      items: [
        {
          name: 'Student Wellness Group',
          description: 'Weekly meetups, Wed 6pm',
          urgent: false
        },
        {
          name: 'Mindfulness Club',
          description: 'Meditation & chill sessions',
          urgent: false
        }
      ]
    }
  ];

  return (
    <div className="resources-container">
      {/* Header */}
      <div className="resources-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <IoArrowBack />
        </button>
        <h1>Resource Navigator</h1>
        <div className="header-spacer"></div>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-bar">
          <IoSearch />
          <input 
            type="text" 
            placeholder="What do you need help with?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Resource Categories */}
      <div className="resources-content">
        {resources.map((category, idx) => (
          <div key={idx} className="resource-category">
            <div className="category-header">
              <div className="category-icon" style={{ background: category.color }}>
                {category.icon}
              </div>
              <h2>{category.category}</h2>
            </div>

            <div className="resource-items">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="resource-item">
                  <div className="resource-content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  {item.urgent && (
                    <span className="urgent-badge">URGENT</span>
                  )}
                  <button className="resource-arrow">›</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
<div className="bottom-nav">
  <button className="nav-item" onClick={() => navigate('/')}>
    <IoHome />
    <span>Home</span>
  </button>
  <button className="nav-item" onClick={() => navigate('/checkin')}>
    <IoCheckmarkCircle />
    <span>Check-in</span>
  </button>
  <button className="nav-item active">
    <IoMedkit />
    <span>Resources</span>
  </button>
  <button className="nav-item" onClick={() => navigate('/explore')}>
  <FaRegLightbulb />
  <span>Explore</span>
</button>
  <button className="nav-item" onClick={() => navigate('/profile')}>
    <IoPerson />
    <span>Profile</span>
  </button>
</div>
    </div>
  );
}

export default Resources;