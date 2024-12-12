import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function StaffStats({ stats }) {
  const statItems = [
    {
      icon: UsersIcon,
      label: 'Total Visitors',
      value: stats.totalVisitors,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: ShieldCheckIcon,
      label: 'Verified Users',
      value: stats.verifiedUsers,
      color: 'text-green-500',
      bgColor: 'bg-green-500/20'
    },
    {
      icon: UserGroupIcon,
      label: 'Active Users',
      value: stats.activeUsers,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/20'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass-effect p-6 rounded-xl"
        >
          <div className={`${item.bgColor} p-3 rounded-lg w-12 h-12 mb-4`}>
            <item.icon className={`h-6 w-6 ${item.color}`} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{item.value}</h3>
          <p className="text-gray-400">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}