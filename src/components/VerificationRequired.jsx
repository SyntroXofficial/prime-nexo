import React from 'react';
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function VerificationRequired() {
  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-effect p-8 rounded-xl max-w-lg w-full text-center"
      >
        <ExclamationTriangleIcon className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-white mb-4">Verification Required</h2>
        <p className="text-gray-300 mb-6">
          To access this website, you must verify your account through RestoreCord.
        </p>
        <a
          href="https://restorecord.com/verify/Day27"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Verify Now
        </a>
        <p className="mt-4 text-sm text-gray-400">
          After verification, refresh this page to access the website.
        </p>
      </motion.div>
    </div>
  );
}