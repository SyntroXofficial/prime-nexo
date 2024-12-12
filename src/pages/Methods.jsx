import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { methods } from '../data/methods';
import { RARITY_CONFIGS } from '../utils/rarityConfig';
import { RARITY_GLOW } from '../utils/glowStyles';
import SearchBar from '../components/SearchBar';
import PinModal from '../components/PinModal';

export default function Methods() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showPinModal, setShowPinModal] = useState(false);
  const [error, setError] = useState('');
  const [unlockedMethods, setUnlockedMethods] = useState({});

  const filteredMethods = methods.filter(method =>
    method.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePinSubmit = (pin) => {
    if (selectedMethod && pin === selectedMethod.pin) {
      setUnlockedMethods(prev => ({
        ...prev,
        [selectedMethod.id]: true
      }));
      setShowPinModal(false);
      setError('');
    } else {
      setError('Incorrect PIN');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-red-500 mb-4">Gaming Methods</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover various gaming methods and techniques to enhance your gaming experience
          </p>
        </motion.div>

        <SearchBar onSearch={setSearchTerm} placeholder="Search methods..." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMethods.map((method) => {
            const rarityConfig = RARITY_CONFIGS[method.rarity];
            const glowStyle = RARITY_GLOW[method.rarity];
            const isUnlocked = unlockedMethods[method.id];

            return (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-effect rounded-xl overflow-hidden"
                style={{
                  boxShadow: glowStyle.boxShadow,
                  animation: `${glowStyle.animation} 3s ease-in-out infinite`
                }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{method.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${rarityConfig.bgColor} ${rarityConfig.textColor} border ${rarityConfig.borderColor}`}>
                      {rarityConfig.label}
                    </span>
                  </div>

                  {method.status === 'working' && (
                    <div className="mb-4 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm text-center border border-green-500/30">
                      Currently Working
                    </div>
                  )}

                  {isUnlocked ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {method.steps.map((step, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">{index + 1}</span>
                            <span className="text-gray-300">{step}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                        <p className="text-yellow-400 text-sm">{method.warning}</p>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedMethod(method);
                        setShowPinModal(true);
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-white transition-all duration-300 ${rarityConfig.bgColor} hover:brightness-110`}
                    >
                      View Method
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <PinModal
        isOpen={showPinModal}
        onClose={() => {
          setShowPinModal(false);
          setSelectedMethod(null);
          setError('');
        }}
        onSubmit={handlePinSubmit}
        rarity={selectedMethod?.rarity}
        error={error}
      />
    </div>
  );
}