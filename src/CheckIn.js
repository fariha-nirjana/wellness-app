import React, { useState } from 'react';
import './CheckIn.css';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoBatteryFull, IoBatteryHalf, IoBatteryDead, IoBatteryCharging, IoHome, IoCheckmarkCircle, IoPerson, IoMedkit  } from 'react-icons/io5';
import { FaRegLightbulb } from "react-icons/fa6";

function CheckIn() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [checkInData, setCheckInData] = useState({
    mood: null,
    energy: null,
    concerns: [],
    notes: ''
  });

  const handleMoodSelect = (mood) => {
    setCheckInData({ ...checkInData, mood });
    setStep(2);
  };

  const handleEnergySelect = (energy) => {
    setCheckInData({ ...checkInData, energy });
    setStep(3);
  };

  const handleConcernToggle = (concern) => {
    const concerns = checkInData.concerns.includes(concern)
      ? checkInData.concerns.filter(c => c !== concern)
      : [...checkInData.concerns, concern];
    setCheckInData({ ...checkInData, concerns });
  };

  const handleComplete = () => {
  console.log('Check-in completed:', checkInData);
  
  // Create journal entry from check-in data
  const now = new Date();
  const timeString = now.toLocaleString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  }).toUpperCase();
  
  const dateString = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }).toUpperCase();
  
  // Map mood to emoji
  const moodEmojis = {
    'great': '😄',
    'good': '😊',
    'okay': '😐',
    'worried': '😟',
    'bad': '😢'
  };
  
  const moodLabels = {
    'great': 'Great',
    'good': 'Good',
    'okay': 'Okay',
    'worried': 'Worried',
    'bad': 'Bad'
  };
  
  const journalEntry = {
    id: Date.now(),
    timestamp: `${dateString === new Date().toLocaleDateString('en-US', {weekday: 'long', month: 'short', day: 'numeric'}).toUpperCase() ? 'TODAY' : dateString}, ${timeString}`,
    type: 'checkin',
    mood: moodLabels[checkInData.mood] || '',
    moodEmoji: moodEmojis[checkInData.mood] || '',
    energy: checkInData.energy,
    title: `Daily Check-in - ${moodLabels[checkInData.mood]}`,
    content: checkInData.notes || 'No additional notes.',
    concerns: checkInData.concerns
  };
  
  // Get existing journal entries from localStorage
  const existingEntries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
  
  // Add new entry at the beginning
  const updatedEntries = [journalEntry, ...existingEntries];
  
  // Save to localStorage
  localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
  
  // Navigate back to dashboard
  navigate('/');
};

  const progressPercentage = (step / 3) * 100;

  return (
    <div className="checkin-container">
      {/* Header with back button and progress */}
      <div className="checkin-header">
        <button className="back-button" onClick={() => step === 1 ? navigate('/') : setStep(step - 1)}>
          <IoArrowBack />
        </button>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      {/* Step 1: Mood Selection */}
      {step === 1 && (
        <div className="checkin-step">
          <h1>How are you feeling?</h1>
          <p className="step-subtitle">Select the emoji that matches your mood.</p>
          
          <div className="emoji-grid">
            <button className="emoji-option" onClick={() => handleMoodSelect('great')}>
              <span className="emoji">😄</span>
              <span className="emoji-label">GREAT</span>
            </button>
            
            <button className="emoji-option" onClick={() => handleMoodSelect('good')}>
              <span className="emoji">😊</span>
              <span className="emoji-label">GOOD</span>
            </button>
            
            <button className="emoji-option" onClick={() => handleMoodSelect('okay')}>
              <span className="emoji">😐</span>
              <span className="emoji-label">OKAY</span>
            </button>
            
            <button className="emoji-option" onClick={() => handleMoodSelect('worried')}>
              <span className="emoji">😟</span>
              <span className="emoji-label">WORRIED</span>
            </button>
            
            <button className="emoji-option" onClick={() => handleMoodSelect('bad')}>
              <span className="emoji">😢</span>
              <span className="emoji-label">BAD</span>
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Energy Level */}
{step === 2 && (
  <div className="checkin-step">
    <h1>Energy Level</h1>
    <p className="step-subtitle">Be honest, this helps us tailor suggestions.</p>
    
    <div className="energy-options">
      <button 
        className="energy-card high" 
        onClick={() => handleEnergySelect('high')}
      >
        <div className="energy-icon high">
          <IoBatteryFull />
        </div>
        <span className="energy-label">High Energy</span>
      </button>
      
      <button 
        className="energy-card moderate" 
        onClick={() => handleEnergySelect('moderate')}
      >
        <div className="energy-icon moderate">
          <IoBatteryCharging />
        </div>
        <span className="energy-label">Moderate</span>
      </button>
      
      <button 
        className="energy-card low" 
        onClick={() => handleEnergySelect('low')}
      >
        <div className="energy-icon low">
          <IoBatteryHalf />
        </div>
        <span className="energy-label">Low</span>
      </button>
      
      <button 
        className="energy-card depleted" 
        onClick={() => handleEnergySelect('depleted')}
      >
        <div className="energy-icon depleted">
          <IoBatteryDead />
        </div>
        <span className="energy-label">Depleted</span>
      </button>
    </div>
  </div>
)}

      {/* Step 3: Specific Concerns */}
      {step === 3 && (
        <div className="checkin-step">
          <h1>Anything specific?</h1>
          <p className="step-subtitle">What's on your mind today?</p>
          
          <div className="concerns-tags">
            {['Workload', 'Social Stress', 'Health', 'Family', 'Finances', 'Just Tired'].map(concern => (
              <button
                key={concern}
                className={`concern-tag ${checkInData.concerns.includes(concern) ? 'selected' : ''}`}
                onClick={() => handleConcernToggle(concern)}
              >
                {concern}
              </button>
            ))}
          </div>
          
          <textarea
            className="notes-input"
            placeholder="Type your thoughts here..."
            value={checkInData.notes}
            onChange={(e) => setCheckInData({ ...checkInData, notes: e.target.value })}
            rows="6"
          />
          
          <button className="complete-button" onClick={handleComplete}>
            Complete Check-in
          </button>
        </div>
      )}

      {/* Bottom Navigation */}
<div className="bottom-nav">
  <button className="nav-item" onClick={() => navigate('/')}>
    <IoHome />
    <span>Home</span>
  </button>
  <button className="nav-item active">
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

export default CheckIn;