import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function MobileNav({ isOpen, onToggle }) {
  const location = useLocation();

  return (
    <div className="md:hidden">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-black/90 backdrop-blur-md z-50 px-4 flex items-center justify-between border-b border-white/10">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
          Prime Nexo
        </Link>
        <button
          onClick={onToggle}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-400" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-400" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-16 left-0 bottom-0 w-64 bg-black/90 backdrop-blur-md z-50 border-r border-white/10"
      >
        <nav className="p-4 h-full overflow-y-auto">
          <div className="space-y-1">
            <NavLink to="/" active={location.pathname === '/'}>
              Home
            </NavLink>
            <NavLink to="/library" active={location.pathname === '/library'}>
              Library
            </NavLink>
            <NavLink to="/accounts" active={location.pathname === '/accounts'}>
              Accounts
            </NavLink>
            <NavLink to="/methods" active={location.pathname === '/methods'}>
              Methods
            </NavLink>
            <NavLink to="/geforce-now" active={location.pathname === '/geforce-now'}>
              GeForce Now
            </NavLink>
            <NavLink to="/stremio" active={location.pathname === '/stremio'}>
              Stremio
            </NavLink>
            <NavLink to="/warning" active={location.pathname === '/warning'}>
              Warning
            </NavLink>
            <NavLink to="/faq" active={location.pathname === '/faq'}>
              FAQ
            </NavLink>
          </div>
        </nav>
      </motion.div>
    </div>
  );
}

function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
        active
          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
          : 'text-gray-400 hover:bg-white/5'
      }`}
    >
      {children}
    </Link>
  );
}
