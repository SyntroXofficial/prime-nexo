import React, { useState } from 'react';
import { accounts } from '../data/accounts';
import SearchBar from '../components/SearchBar';
import RarityFilter from '../components/RarityFilter';
import AccountsHeader from '../components/accounts/AccountsHeader';
import AccountGrid from '../components/accounts/AccountGrid';

export default function Accounts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('all');

  const filteredAccounts = accounts.filter(account => {
    const matchesSearch = account.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = selectedRarity === 'all' || account.rarity === selectedRarity;
    return matchesSearch && matchesRarity;
  });

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <AccountsHeader />
        
        <div className="mb-12 space-y-4">
          <SearchBar onSearch={setSearchTerm} placeholder="Search accounts..." />
          <RarityFilter selectedRarity={selectedRarity} onRarityChange={setSelectedRarity} />
        </div>

        <AccountGrid accounts={filteredAccounts} />
      </div>
    </div>
  );
}