import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';

export default function MainLayout({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Sidebar />
      {!isHomePage && <Header />}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`transition-all duration-300 ${!isHomePage ? 'pt-16' : ''}`}
        style={{ marginLeft: '256px' }}
      >
        {children}
      </motion.main>
    </div>
  );
}