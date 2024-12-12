import React from 'react';
import { motion } from 'framer-motion';
import { CloudArrowUpIcon, DevicePhoneMobileIcon, ComputerDesktopIcon, WifiIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: CloudArrowUpIcon,
    title: 'Instant Play',
    description: 'No downloads required. Start playing your favorite games instantly.'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Play Anywhere',
    description: 'Access your games on any device - mobile, tablet, or computer.'
  },
  {
    icon: ComputerDesktopIcon,
    title: 'RTX Graphics',
    description: 'Experience ray tracing and DLSS with NVIDIA\'s powerful cloud infrastructure.'
  },
  {
    icon: WifiIcon,
    title: 'Low Latency',
    description: 'Enjoy responsive gameplay with minimal input lag across supported regions.'
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
          <p className="text-xl text-white max-w-2xl mx-auto">
            Experience the future of gaming with NVIDIA GeForce NOW. Play your favorite games on any device with our cloud-ready accounts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect p-8 rounded-xl border border-red-500/20"
          >
            <h3 className="text-2xl font-bold text-red-500 mb-4">Why GeForce NOW?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <span className="text-white">Play on low-end PCs and laptops</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <span className="text-white">Access to powerful NVIDIA RTX graphics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <span className="text-white">No game downloads or updates needed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <span className="text-white">Play across multiple devices seamlessly</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect p-8 rounded-xl border border-red-500/20"
          >
            <h3 className="text-2xl font-bold text-red-500 mb-4">Our GeForce NOW Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <span className="text-white">Premium GeForce NOW accounts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <span className="text-white">Instant activation and setup</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <span className="text-white">Premium support for cloud gaming</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">✓</span>
                <span className="text-white">Regular account maintenance</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass-effect p-6 rounded-xl text-center border border-red-500/20"
            >
              <feature.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-400 mb-2">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}