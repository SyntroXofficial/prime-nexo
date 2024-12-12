import React from 'react';
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useVerification } from '../hooks/useVerification';

export default function VerificationOverlay() {
  const { isVerified, isLoading, verify } = useVerification();

  if (isVerified || isLoading) return null;

  const handleVerificationClick = () => {
    window.open('https://restorecord.com/verify/Day27', '_blank');
  };

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
          To access Day27, you must verify your account through our Discord server.
        </p>
        <button
          onClick={handleVerificationClick}
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Verify with Discord
        </button>
        <p className="mt-4 text-sm text-gray-400">
          After verification, this page will automatically refresh.
        </p>
      </motion.div>
    </div>
  );
}