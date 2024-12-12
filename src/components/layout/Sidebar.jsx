import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  FilmIcon,
  CloudArrowUpIcon,
  ExclamationTriangleIcon,
  QuestionMarkCircleIcon,
  Bars3Icon
} from '@heroicons/react/24/outline';

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: HomeIcon, label: 'Home' },
    { path: '/library', icon: BookOpenIcon, label: 'Library' },
    { path: '/accounts', icon: ShieldCheckIcon, label: 'Accounts' },
    { path: '/methods', icon: BookOpenIcon, label: 'Methods' },
    { path: '/geforce-now', icon: CloudArrowUpIcon, label: 'GeForce Now' },
    { path: '/stremio', icon: FilmIcon, label: 'Stremio' },
    { path: '/warning', icon: ExclamationTriangleIcon, label: 'Warning' },
    { path: '/faq', icon: QuestionMarkCircleIcon, label: 'FAQ' }
  ];

  return (
    <motion.div
      initial={false}
      animate={{ width: isCollapsed ? '80px' : '256px' }}
      className="fixed top-0 left-0 h-screen bg-black/90 backdrop-blur-md border-r border-white/10 z-50"
    >
      <div className="flex flex-col h-full">
        <div className="p-4">
          <Link to="/" className="flex items-center gap-4">
            <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700"
                >
                  Day27
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                <item.icon className="h-6 w-6" />
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </div>
        </nav>

        <div className="p-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full flex items-center justify-center p-2 text-gray-400 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}