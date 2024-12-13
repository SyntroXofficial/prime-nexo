import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import RarityFilter from '../components/RarityFilter';
import { steamAccounts } from '../data/steamAccounts';
import { RARITY_CONFIGS } from '../utils/rarityConfig';
import { RARITY_GLOW } from '../utils/glowStyles';

export default function Library() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('all');

  const filteredAccounts = steamAccounts.filter(game => {
    const matchesSearch = game.game.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = selectedRarity === 'all' || game.rarity === selectedRarity;
    return matchesSearch && matchesRarity;
  });

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-red-500 mb-4">Game Library</h1>
          <p className="text-gray-400">Browse our collection of premium gaming accounts</p>
        </motion.div>
        
        <div className="mb-12 space-y-4">
          <SearchBar onSearch={setSearchTerm} />
          <RarityFilter selectedRarity={selectedRarity} onRarityChange={setSelectedRarity} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredAccounts.map((game, index) => {
            const rarityConfig = RARITY_CONFIGS[game.rarity];
            const glowStyle = RARITY_GLOW[game.rarity];
            const gameUrl = `/library/${game.game.toLowerCase().replace(/\s+/g, '-')}`;

            return (
              <Link
                key={game.game}
                to={gameUrl}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    boxShadow: glowStyle.boxShadow,
                    animation: `${glowStyle.animation} 3s ease-in-out infinite`
                  }}
                >
                  <img
                    src={game.imageUrl}
                    alt={game.game}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className={`w-full py-3 text-center rounded-lg ${rarityConfig.bgColor} ${rarityConfig.textColor} border ${rarityConfig.borderColor} font-bold tracking-wider`}>
                      {rarityConfig.label}
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
