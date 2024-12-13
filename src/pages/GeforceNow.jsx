import React from 'react';
import { motion } from 'framer-motion';
import { CloudArrowUpIcon, DevicePhoneMobileIcon, ComputerDesktopIcon, WifiIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: CloudArrowUpIcon,
    title: 'Cloud Gaming',
    description: 'Play instantly without downloads or installations'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Cross-Platform',
    description: 'Play on PC, Mac, mobile, or smart TV'
  },
  {
    icon: ComputerDesktopIcon,
    title: 'RTX Graphics',
    description: 'Experience ray tracing and DLSS technology'
  },
  {
    icon: WifiIcon,
    title: 'Low Latency',
    description: 'Optimized streaming with minimal input lag'
  }
];

export default function GeforceNow() {
  return (
    <div className="min-h-screen pt-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-red-500 mb-6">GeForce NOW Gaming</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Play your favorite PC games on any device with NVIDIA's cloud gaming service. Experience high-performance gaming without expensive hardware.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-red-500 mb-4">Why GeForce NOW?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <span className="text-gray-300">Play on low-end devices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <span className="text-gray-300">Access to powerful NVIDIA RTX graphics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <span className="text-gray-300">No game downloads or updates needed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <span className="text-gray-300">Play across multiple devices seamlessly</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-red-500 mb-4">Requirements</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Internet Connection</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• 15 Mbps minimum for 720p at 60 FPS</li>
                  <li>• 25 Mbps recommended for 1080p at 60 FPS</li>
                  <li>• 35 Mbps for 1440p at 120 FPS</li>
                  <li>• 40 Mbps for 4K HDR at 60 FPS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Supported Devices</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Windows PC (Steam Deck included)</li>
                  <li>• macOS</li>
                  <li>• Android devices</li>
                  <li>• Smart TVs</li>
                  <li>• Chrome/Safari browsers</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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