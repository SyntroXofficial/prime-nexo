import React from 'react';
import { motion } from 'framer-motion';
import MethodsHeader from '../components/methods/MethodsHeader';
import MethodsGrid from '../components/methods/MethodsGrid';
import { methods } from '../data/methods';

export default function Methods() {
  return (
    <div className="min-h-screen bg-black">
      <MethodsHeader />
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <MethodsGrid methods={methods} />
      </div>
    </div>
  );
}