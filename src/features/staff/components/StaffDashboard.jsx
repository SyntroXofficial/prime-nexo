import React from 'react';
import { motion } from 'framer-motion';
import VisitorTable from './VisitorTable';

export default function StaffDashboard({ visitors }) {
  return (
    <div className="min-h-screen pt-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-red-500 mb-4">Staff Dashboard</h1>
          <p className="text-gray-400">Monitor visitor activity and website statistics</p>
        </motion.div>

        <div className="space-y-8">
          <div className="glass-effect p-6 rounded-xl">
            <h2 className="text-xl font-bold text-white mb-4">Recent Visitors</h2>
            <VisitorTable visitors={visitors} />
          </div>
        </div>
      </div>
    </div>
  );
}