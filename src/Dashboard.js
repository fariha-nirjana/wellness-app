import React, { useState } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { WiDaySunny, WiStrongWind, WiCloudy, WiRain, WiNightClear } from 'react-icons/wi';
import { IoBatteryCharging, IoHome, IoCheckmarkCircle, IoPerson, IoMedkit, IoBookOutline } from 'react-icons/io5';
import { LuHeartPulse } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa6";

function Dashboard() {
  const [selectedMood, setSelectedMood] = useState(null);
  const navigate = useNavigate();

// Load latest journal entry
const getLatestEntry = () => {
  const stored = localStorage.getItem('journalEntries');
  if (stored) {
    const entries = JSON.parse(stored);
    if (entries.length > 0) {
      return entries[0]; // Most recent entry
    }
  }
  // Default mock data
  return {
    timestamp: 'TODAY, 9:41 AM',
    mood: 'Calm',
    moodEmoji: '😊',
    title: 'Feeling overwhelmed but hopeful'
  };
};

const latestEntry = getLatestEntry();

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    // this will send data to backend
    console.log('Mood selected:', mood);
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="greeting">
          <p className="date">Saturday, Mar 7th</p>
          <h1>Good Morning,</h1>
          <h1 className="name">Nirjana!</h1>
        </div>
        <div className="notification-icon">🔔</div>
      </div>

      {/* Wellness Score Card */}
      <div className="wellness-card">
        <div className="wellness-score-section">
          <p className="wellness-label">Wellness Score</p>
          <div className="score-display">
            <span className="score-number">7.2</span>
            <span className="score-total">/10</span>
          </div>
          <span className="status-badge">↓ STABLE</span>
        </div>
        
        <div className="wellness-monitor">
          <div className="monitor-icon">⚡</div>
          <div className="monitor-content">
            <h3>Workload Monitor</h3>
            <p>Major exams detected next week. Consider starting your project review today to avoid stress.</p>
          </div>
        </div>
      </div>

      {/* NEW: How are you feeling section */}
      <div className="mood-check">
        <h2>How are you feeling?</h2>
        <div className="mood-options">
          <button 
            className={`mood-button happy ${selectedMood === 'happy' ? 'selected' : ''}`}
            onClick={() => handleMoodClick('happy')}
          >
            <WiDaySunny />
            <span>Happy</span>
          </button>
          
          <button 
            className={`mood-button calm ${selectedMood === 'calm' ? 'selected' : ''}`}
            onClick={() => handleMoodClick('calm')}
          >
            <WiStrongWind />
            <span>Calm</span>
          </button>
          
          <button 
            className={`mood-button neutral ${selectedMood === 'neutral' ? 'selected' : ''}`}
            onClick={() => handleMoodClick('neutral')}
          >
            <WiCloudy />
            <span>Neutral</span>
          </button>
          
          <button 
            className={`mood-button sad ${selectedMood === 'sad' ? 'selected' : ''}`}
            onClick={() => handleMoodClick('sad')}
          >
            <WiRain />
            <span>Sad</span>
          </button>
          
          <button 
            className={`mood-button tired ${selectedMood === 'tired' ? 'selected' : ''}`}
            onClick={() => handleMoodClick('tired')}
          >
            <WiNightClear />
            <span>Tired</span>
          </button>
        </div>
      </div>

      {/* Daily Rhythm Section */}
      <div className="daily-rhythm">
        <h2>Daily Rhythm</h2>
        <div className="checkin-card" onClick={() => navigate('/checkin')}>
  <div className="checkin-icon">
    <LuHeartPulse />
  </div>
  <div className="checkin-content">
    <h3>Full Check-in</h3>
    <p>Log detailed mood & energy</p>
  </div>
  <span className="arrow">›</span>
</div>
      </div>

      {/* My Reflections Section */}
<div className="my-reflections">
  <h2>My Reflections</h2>
  
  <div className="reflections-card" onClick={() => navigate('/journal')}>
    <div className="reflections-icon">
      <IoBookOutline />
    </div>
    <div className="reflections-content">
      <h3>Journal Entries</h3>
      <div className="entry-meta">
  <span className="latest-entry-time">{latestEntry.timestamp}</span>
  {latestEntry.mood && (
    <span className="latest-entry-mood">{latestEntry.moodEmoji} {latestEntry.mood}</span>
  )}
</div>
<p className="latest-entry-title">{latestEntry.title}</p>
    </div>
    <span className="arrow">›</span>
  </div>
</div>

      {/* For You Section */}
      <div className="for-you">
        <div className="section-header">
          <h2>For You</h2>
          <a href="#" className="view-all">View all</a>
        </div>
        
        <div className="activity-cards">
          <div className="activity-card">
            <div className="card-image morning-walk"></div>
            <div className="card-content">
              <span className="card-tag">PHYSICAL</span>
              <h3>Morning Walk</h3>
              <p>10 min</p>
            </div>
          </div>
          
          <div className="activity-card">
            <div className="card-image focus-flow"></div>
            <div className="card-content">
              <span className="card-tag">MIND</span>
              <h3>Focus Flow</h3>
              <p>Music</p>
            </div>
          </div>
        </div>

        </div>

      {/* Bottom Navigation */}
<div className="bottom-nav">
  <button className="nav-item active">
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
  <button className="nav-item" onClick={() => navigate('/profile')}>
    <IoPerson />
    <span>Profile</span>
  </button>
</div>
    </div>
  );
}

export default Dashboard;