import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { RARITY_CONFIGS } from '../utils/rarityConfig';
import { RARITY_GLOW } from '../utils/glowStyles';
import { sortServicesByRarity } from '../utils/sortServices';
import SearchBar from '../components/SearchBar';
import ServiceCard from '../components/services/ServiceCard';

export default function Accounts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sortedServices = sortServicesByRarity(services);

  const filteredServices = sortedServices.filter(category =>
    selectedCategory === 'all' || category.category.toLowerCase().includes(selectedCategory)
  ).map(category => ({
    ...category,
    items: category.items.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div className="min-h-screen pt-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-red-500 mb-4">Premium Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access our exclusive collection of premium gaming and streaming services
          </p>
        </motion.div>

        <SearchBar onSearch={setSearchTerm} placeholder="Search services..." />

        <div className="space-y-12">
          {filteredServices.map((category) => (
            <div key={category.category} className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-red-500"
              >
                {category.category}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service) => (
                  <ServiceCard
                    key={service.id || `${category.category}-${service.name}`}
                    service={service}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}