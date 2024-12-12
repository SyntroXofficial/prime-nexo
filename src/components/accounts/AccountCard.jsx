import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RARITY_CONFIGS } from '../../utils/rarityConfig';

export default function AccountCard({ account, index }) {
  const rarityConfig = RARITY_CONFIGS[account.rarity];
  
  return (
    <Link to={`/accounts/${account.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative rounded-xl overflow-hidden h-[300px] group hover:scale-[1.02] transition-all duration-300"
      >
        <img
          src={account.imageUrl}
          alt={account.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{account.name}</h3>
            <p className="text-gray-300">{account.description}</p>
            <div className="flex items-center justify-between">
              <span className={`px-4 py-2 rounded-lg text-sm ${rarityConfig.bgColor} ${rarityConfig.textColor} border ${rarityConfig.borderColor}`}>
                {rarityConfig.label}
              </span>
              <span className={`px-3 py-1.5 rounded-full text-sm ${
                account.status === 'inStock'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {account.status === 'inStock' ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}