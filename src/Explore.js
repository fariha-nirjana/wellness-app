import React, { useState } from 'react';
import './Explore.css';
import { useNavigate } from 'react-router-dom';
import { IoHome, IoCheckmarkCircle, IoPerson, IoMedkit, IoBookOutline, IoSearch } from 'react-icons/io5';
import { FaRegLightbulb } from 'react-icons/fa6';

function Explore() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Academic', 'Social', 'Self-Care'];

  // Mock activity recommendations
  const activities = [
    {
      id: 1,
      agent: 'WORKLOAD BALANCER',
      agentColor: '#dbeafe',
      title: 'Start Project X Early',
      description: 'You have a high energy slot this Tuesday 3-5pm. Perfect for tackling the difficult part.',
      image: '/api/placeholder/400/200',
      category: 'Academic'
    },
    {
      id: 2,
      agent: 'SOCIAL CONNECTOR',
      agentColor: '#e0e7ff',
      title: 'Connect with Sarah',
      description: "You haven't seen friends in 5 days. Grab coffee this afternoon?",
      image: '/api/placeholder/400/200',
      category: 'Social'
    },
    {
      id: 3,
      agent: 'SELF-CARE ADVISOR',
      agentColor: '#fce7f3',
      title: 'Evening Wind-down',
      description: 'Try a 15-min sketch session to disconnect from screens.',
      image: '/api/placeholder/400/200',
      category: 'Self-Care'
    },
    {
      id: 4,
      agent: 'WELLNESS MONITOR',
      agentColor: '#d1fae5',
      title: 'Morning Walk',
      description: '10 min gentle movement to start your day with energy.',
      image: '/api/placeholder/400/200',
      category: 'Self-Care'
    }
  ];

  const filteredActivities = activeFilter === 'All' 
    ? activities 
    : activities.filter(activity => activity.category === activeFilter);

  return (
    <div className="explore-container">
      {/* Header */}
      <div className="explore-header">
        <h1>Explore</h1>
        <button className="search-icon">
          <IoSearch />
        </button>
      </div>

      {/* Journal Prompt Card */}
      <div className="journal-prompt-section">
        <div className="journal-prompt-card" onClick={() => navigate('/journal')}>
          <div className="prompt-icon">
            <IoBookOutline />
          </div>
          <div className="prompt-content">
            <h3>Reflect on your thoughts</h3>
            <p>Take a moment to journal and process your day</p>
          </div>
          <span className="prompt-arrow">›</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-section">
        <h2>Personalized Tips</h2>
        <div className="filter-tabs">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Activity Cards */}
      <div className="activities-section">
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="activity-card">
            <div className="activity-image">
              <img src={activity.image} alt={activity.title} />
              <span className="activity-badge" style={{ background: activity.agentColor }}>
                {activity.agent}
              </span>
            </div>
            <div className="activity-content">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <div className="activity-actions">
                <button className="dismiss-btn">✕ Dismiss</button>
                <button className="accept-btn">✓ Accept</button>
              </div>
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
        <button className="nav-item" onClick={() => navigate('/resources')}>
          <IoMedkit />
          <span>Resources</span>
        </button>
        <button className="nav-item active">
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

export default Explore;