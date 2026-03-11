import React from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { IoHome, IoCheckmarkCircle, IoPerson, IoSettings, IoLogOut, IoMedkit } from 'react-icons/io5';
import { FaRegLightbulb } from 'react-icons/fa6';

function Profile() {
  const navigate = useNavigate();

  // Mock data - later this will come from backend
  const userData = {
    name: 'Nirjana',
    year: 'Junior',
    department: 'CS',
    daysStreak: 12,
    completionRate: 85
  };

  // Mock wellness history data (0-10 scale for each day)
  const weeklyData = [
    { day: 'Mon', score: 6.5 },
    { day: 'Tue', score: 6.0 },
    { day: 'Wed', score: 8.2 },
    { day: 'Thu', score: 7.0 },
    { day: 'Fri', score: 8.5 },
    { day: 'Sat', score: 8.0 },
    { day: 'Sun', score: 7.2 }
  ];

  const maxScore = 10;

  return (
    <div className="profile-container">
      {/* Header */}
      <div className="profile-header">
        <h1>Profile</h1>
        <button className="settings-icon">
          <IoSettings />
        </button>
      </div>

      {/* User Info Card */}
      <div className="user-info-card">
        <div className="user-avatar">
          <img src="https://ui-avatars.com/api/?name=Fariha&background=667eea&color=fff&size=80" alt="Profile" />
        </div>
        <h2>{userData.name}</h2>
        <p className="user-details">{userData.year} • {userData.department}</p>
        <span className="member-badge">Member Since May 01, 2026</span>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon days">📅</div>
          <div className="stat-content">
            <span className="stat-number">{userData.daysStreak}</span>
            <span className="stat-label">DAYS STREAK</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon completion">✓</div>
          <div className="stat-content">
            <span className="stat-number">{userData.completionRate}%</span>
            <span className="stat-label">COMPLETION</span>
          </div>
        </div>
      </div>

      {/* Wellness History */}
      <div className="wellness-history-section">
        <div className="section-header">
          <h3>Wellness History</h3>
          <select className="time-filter">
            <option>This Week</option>
            <option>This Month</option>
            <option>Last 3 Months</option>
          </select>
        </div>

        <div className="chart-container">
          {weeklyData.map((data, idx) => (
            <div key={idx} className="chart-bar">
              <div 
                className="bar-fill"
                style={{ 
                  height: `${(data.score / maxScore) * 100}%`,
                  background: data.score >= 7 ? '#667eea' : data.score >= 5 ? '#a78bfa' : '#d1d5db'
                }}
              ></div>
              <span className="bar-label">{data.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Menu */}
      <div className="settings-menu">
        <button className="menu-item">
          <IoSettings />
          <span>Preferences & Alerts</span>
          <span className="arrow">›</span>
        </button>
        
        <button className="menu-item">
          <IoPerson />
          <span>Account Details</span>
          <span className="arrow">›</span>
        </button>
        
        <button className="menu-item logout">
          <IoLogOut />
          <span>Log Out</span>
        </button>
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
  <button className="nav-item" onClick={() => navigate('/explore')}>
  <FaRegLightbulb />
  <span>Explore</span>
</button>
  <button className="nav-item active">
    <IoPerson />
    <span>Profile</span>
  </button>
</div>
    </div>
  );
}

export default Profile;