import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';

export default function MainLayout({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const shouldShowHeader = !isHomePage && !location.pathname.includes('/library');
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          marginLeft: isCollapsed ? '80px' : '256px'
        }}
        transition={{ duration: 0.3 }}
        className="transition-all duration-300"
      >
        {shouldShowHeader && <Header isCollapsed={isCollapsed} />}
        <div className={shouldShowHeader ? 'pt-16' : ''}>
          {children}
        </div>
      </motion.main>
    </div>
  );
}
