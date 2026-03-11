import React, { useState } from 'react';
import './Journal.css';
import { useNavigate } from 'react-router-dom';
import { IoHome, IoCheckmarkCircle, IoPerson, IoMedkit, IoSearch, IoImageOutline, IoMicOutline, IoHappyOutline } from 'react-icons/io5';
import { FaRegLightbulb } from 'react-icons/fa6';

function Journal() {
  const navigate = useNavigate();
  const [newEntry, setNewEntry] = useState({
    title: '',
    content: ''
  });

  // Load entries from localStorage on component mount
const loadEntries = () => {
  const stored = localStorage.getItem('journalEntries');
  if (stored) {
    return JSON.parse(stored);
  }
  // Default mock data if nothing in localStorage
  return [
    {
      id: 1,
      timestamp: 'TODAY, 9:41 AM',
      type: 'checkin',
      mood: 'Calm',
      moodEmoji: '😊',
      title: 'Daily Check-in - Good',
      content: 'Started the day with a lot on my mind. The meditation session really helped me center myself...',
      concerns: ['Workload']
    },
    {
      id: 2,
      timestamp: 'YESTERDAY, 8:30 PM',
      type: 'manual',
      mood: 'Happy',
      moodEmoji: '😄',
      title: 'Evening Reflection',
      content: 'Grateful for the sunset today. It was a beautiful reminder to slow down.',
      concerns: []
    }
  ];
};

const [entries, setEntries] = useState(loadEntries());

  const handleSave = () => {
  if (newEntry.title.trim() || newEntry.content.trim()) {
    const now = new Date();
    const timeString = now.toLocaleString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    }).toUpperCase();
    
    const newJournalEntry = {
      id: Date.now(),
      timestamp: `TODAY, ${timeString}`,
      type: 'manual',
      mood: '',
      moodEmoji: '',
      title: newEntry.title || 'Untitled Entry',
      content: newEntry.content,
      concerns: []
    };

    const updatedEntries = [newJournalEntry, ...entries];
    setEntries(updatedEntries);
    
    // Save to localStorage
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
    
    setNewEntry({ title: '', content: '' });
    
    // Show success feedback
    alert('Entry saved!');
  }
};

  return (
    <div className="journal-container">
      {/* Header */}
      <div className="journal-header">
        <h1>Journal</h1>
        <button className="search-icon">
          <IoSearch />
        </button>
      </div>

      {/* New Entry Section */}
      <div className="new-entry-section">
        <div className="entry-input-card">
          <input
            type="text"
            placeholder="Title your entry..."
            className="entry-title-input"
            value={newEntry.title}
            onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
          />
          <textarea
            placeholder="Write about your day..."
            className="entry-content-input"
            rows="6"
            value={newEntry.content}
            onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
          />
          
          <div className="entry-actions">
            <div className="entry-tools">
              <button className="tool-button">
                <IoImageOutline />
              </button>
              <button className="tool-button">
                <IoMicOutline />
              </button>
              <button className="tool-button">
                <IoHappyOutline />
              </button>
            </div>
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Recent Entries */}
      <div className="recent-entries-section">
        <h2>Recent Entries</h2>
        
        <div className="entries-list">
          {entries.map((entry) => (
            <div key={entry.id} className="entry-card">
              <div className="entry-header">
                <span className="entry-timestamp">{entry.timestamp}</span>
                <div className="entry-badges">
                  {entry.type === 'checkin' && (
                    <span className="badge checkin-badge">Daily Check-in</span>
                  )}
                  {entry.mood && (
                    <span className="badge mood-badge">{entry.mood}</span>
                  )}
                </div>
              </div>
              
              <h3 className="entry-title">{entry.title}</h3>
              <p className="entry-preview">{entry.content}</p>
              
              {entry.concerns.length > 0 && (
                <div className="entry-concerns">
                  {entry.concerns.map((concern, idx) => (
                    <span key={idx} className="concern-tag">{concern}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
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
        <button className="nav-item" onClick={() => navigate('/profile')}>
          <IoPerson />
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
}

export default Journal;