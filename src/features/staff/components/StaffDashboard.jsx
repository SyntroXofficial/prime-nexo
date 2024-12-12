import React from 'react';
import { motion } from 'framer-motion';
import StaffStats from './StaffStats';
import VisitorTable from './VisitorTable';
import { useStaffData } from '../hooks/useStaffData';

export default function StaffDashboard() {
  const { visitors, stats, isLoading, error } = useStaffData();

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

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

        <StaffStats stats={stats} />

        <div className="mt-8 space-y-8">
          <div className="glass-effect p-6 rounded-xl">
            <h2 className="text-xl font-bold text-white mb-4">Recent Visitors</h2>
            <VisitorTable visitors={visitors} />
          </div>
        </div>
      </div>
    </div>
  );
}