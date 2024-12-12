import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Library from './pages/Library';
import GameDetails from './pages/GameDetails';
import Stremio from './pages/Stremio';
import GeforceNow from './pages/GeforceNow';
import Warning from './pages/Warning';
import Methods from './pages/Methods';
import Accounts from './pages/Accounts';
import FAQ from './pages/FAQ';
import StaffOnly from './pages/StaffOnly';
import VerificationOverlay from './features/verification/VerificationOverlay';
import { logVisitor } from './features/staff/utils/visitorTracking';

function App() {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('verified') === 'true';
    setIsVerified(verified);
    logVisitor(verified);
  }, []);

  return (
    <Router>
      <MainLayout>
        {!isVerified && <VerificationOverlay />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/:gameId" element={<GameDetails />} />
          <Route path="/stremio" element={<Stremio />} />
          <Route path="/geforce-now" element={<GeforceNow />} />
          <Route path="/warning" element={<Warning />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/staff" element={<StaffOnly />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;