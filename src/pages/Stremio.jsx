import React from 'react';
import { motion } from 'framer-motion';
import { FilmIcon, PuzzlePieceIcon, DeviceTabletIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { RARITY_CONFIGS } from '../utils/rarityConfig';

const features = [
  {
    icon: FilmIcon,
    title: 'Unlimited Content',
    description: 'Access movies, TV shows, web channels, and more'
  },
  {
    icon: PuzzlePieceIcon,
    title: 'Community Add-ons',
    description: 'Enhance your experience with powerful add-ons'
  },
  {
    icon: DeviceTabletIcon,
    title: 'Multi-Platform',
    description: 'Available on Windows, macOS, Linux, Android, and iOS'
  }
];

export default function Stremio() {
  return (
    <div className="min-h-screen pt-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-red-500 mb-6">Stremio Streaming</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your gateway to unlimited streaming entertainment. Access movies, TV shows, and more through community-driven add-ons.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-red-500 mb-4">About Stremio</h2>
            <p className="text-gray-300 mb-6">
              Stremio is a modern media center that organizes your video entertainment in one place. With its add-on system,
              you can access a wide variety of content from different sources.
            </p>
            <a 
              href="https://stremio-addons.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
            >
              Browse Add-ons
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-red-500 mb-4">Getting Started</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">1</span>
                <span className="text-gray-300">Download and install Stremio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">2</span>
                <span className="text-gray-300">Visit the add-ons catalog</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">3</span>
                <span className="text-gray-300">Install your preferred add-ons</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">4</span>
                <span className="text-gray-300">Start streaming your content</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass-effect p-8 rounded-xl text-center"
            >
              <feature.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-400 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}