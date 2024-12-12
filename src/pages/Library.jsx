import React, { useState } from 'react';
import { steamAccounts } from '../data/steamAccounts';
import SearchBar from '../components/SearchBar';
import RarityFilter from '../components/RarityFilter';
import LibraryHeader from '../components/library/LibraryHeader';
import GameGrid from '../components/library/GameGrid';

export default function Library() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('all');

  const filteredGames = steamAccounts.filter(game => {
    const matchesSearch = game.game.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = selectedRarity === 'all' || game.rarity === selectedRarity;
    return matchesSearch && matchesRarity;
  });

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <LibraryHeader />
        
        <div className="mb-12 space-y-4">
          <SearchBar onSearch={setSearchTerm} />
          <RarityFilter selectedRarity={selectedRarity} onRarityChange={setSelectedRarity} />
        </div>

        <GameGrid games={filteredGames} />
      </div>
    </div>
  );
}