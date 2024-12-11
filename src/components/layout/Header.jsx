import React from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="h-16 bg-black fixed top-0 left-64 right-0 z-50 flex items-center px-4 border-b border-white/10"
    >
      <div className="flex-1 max-w-xl relative">
        <input
          type="text"
          placeholder="Search games..."
          className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
      </div>
    </motion.header>
  );
}