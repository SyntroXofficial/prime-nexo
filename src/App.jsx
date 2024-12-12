import React from 'react';
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
import VerifyAuth from './components/auth/VerifyAuth';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/verify" element={<VerifyAuth />} />
        <Route path="/" element={
          <ProtectedRoute>
            <MainLayout>
              <Home />
            </MainLayout>
          </ProtectedRoute>
        } />
        <Route path="/library" element={
          <ProtectedRoute>
            <MainLayout>
              <Library />
            </MainLayout>
          </ProtectedRoute>
        } />
        <Route path="/library/:gameId" element={
          <ProtectedRoute>
            <MainLayout>
              <GameDetails />
            </MainLayout>
          </ProtectedRoute>
        } />
        <Route path="/stremio" element={
          <ProtectedRoute>
            <MainLayout>
              <Stremio />
            </MainLayout>
          </ProtectedRoute>
        } />
        <Route path="/geforce-now" element={
          <ProtectedRoute>
            <MainLayout>
              <GeforceNow />
            </MainLayout>
          </ProtectedRoute>
        } />
        <Route path="/warning" element={
          <ProtectedRoute>
            <MainLayout>
              <Warning />
            </MainLayout>
          </ProtectedRoute>
        } />
        <Route path="/methods" element={
          <ProtectedRoute>
            <MainLayout>
              <Methods />
            </MainLayout>
          </ProtectedRoute>
        } />
        <Route path="/accounts" element={
          <ProtectedRoute>
            <MainLayout>
              <Accounts />
            </MainLayout>
          </ProtectedRoute>
        } />
        <Route path="/faq" element={
          <ProtectedRoute>
            <MainLayout>
              <FAQ />
            </MainLayout>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;