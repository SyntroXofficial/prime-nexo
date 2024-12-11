import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon,
  FilmIcon,
  CloudArrowUpIcon,
  BookOpenIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  WrenchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const menuItems = [
  { icon: HomeIcon, label: 'Home', path: '/' },
  { icon: BookOpenIcon, label: 'Library', path: '/library' },
  { icon: UserGroupIcon, label: 'Accounts', path: '/accounts' },
  { icon: WrenchIcon, label: 'Methods', path: '/methods' },
  { icon: FilmIcon, label: 'Stremio', path: '/stremio' },
  { icon: CloudArrowUpIcon, label: 'GeForce Now', path: '/geforce-now' },
  { icon: ExclamationTriangleIcon, label: 'Warning', path: '/warning' },
  { icon: QuestionMarkCircleIcon, label: 'FAQ', path: '/faq' }
];

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <motion.div 
      initial={{ width: 256 }}
      animate={{ 
        width: isCollapsed ? 80 : 256,
        transition: { duration: 0.3 }
      }}
      className="fixed left-0 top-0 h-screen bg-black/80 backdrop-blur-md border-r border-white/10 z-50"
    >
      <div className="p-6 flex items-center justify-between border-b border-white/10">
        <AnimatePresence>
          {!isCollapsed && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700"
            >
              Prime Nexo
            </motion.h1>
          )}
        </AnimatePresence>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          {isCollapsed ? (
            <ChevronRightIcon className="h-5 w-5 text-gray-400" />
          ) : (
            <ChevronLeftIcon className="h-5 w-5 text-gray-400" />
          )}
        </button>
      </div>
      
      <nav className="p-4 h-[calc(100vh-88px)] overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 my-1 rounded-lg transition-all duration-300 ${
              isActive(item.path)
                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                : 'text-gray-400 hover:bg-white/5'
            }`}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}
