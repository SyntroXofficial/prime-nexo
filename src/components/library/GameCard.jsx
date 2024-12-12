import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RARITY_CONFIGS } from '../../utils/rarityConfig';

export default function GameCard({ game, index }) {
  const rarityConfig = RARITY_CONFIGS[game.rarity];
  
  return (
    <Link to={`/library/${game.game.toLowerCase().replace(/\s+/g, '-')}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative rounded-xl overflow-hidden h-[300px] group hover:scale-[1.02] transition-all duration-300"
      >
        <img
          src={game.imageUrl}
          alt={game.game}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{game.game}</h3>
            <div className="flex flex-wrap gap-3">
              {game.features.slice(0, 3).map((feature, idx) => (
                <span key={idx} className="text-sm text-gray-300 bg-black/50 px-3 py-1.5 rounded-full">
                  {feature.value}
                </span>
              ))}
            </div>
            <span className={`inline-block px-4 py-2 rounded-lg text-sm ${rarityConfig.bgColor} ${rarityConfig.textColor} border ${rarityConfig.borderColor}`}>
              {rarityConfig.label}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}