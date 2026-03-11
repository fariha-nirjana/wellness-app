import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CheckIn from './CheckIn';
import Resources from './Resources';
import Profile from './Profile';
import Journal from './Journal';
import Explore from './Explore';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/checkin" element={<CheckIn />} />
  <Route path="/resources" element={<Resources />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/journal" element={<Journal />} />
  <Route path="/explore" element={<Explore />} />
</Routes>
      </div>
    </Router>
  );
}

export default App;