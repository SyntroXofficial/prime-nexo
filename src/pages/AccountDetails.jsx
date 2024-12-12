import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { accounts } from '../data/accounts';
import { RARITY_CONFIGS } from '../utils/rarityConfig';
import { RARITY_GLOW } from '../utils/glowStyles';
import PinModal from '../components/PinModal';

// Service-specific images mapping
const SERVICE_IMAGES = {
  'epic-games': 'https://wallpaper.forfun.com/fetch/aa/aa86d9a7875e7be5ff07dc6866b430ef.jpeg',
  'ubisoft': 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/449BBgnc3RYQcQhk55YwQu/e1077125021162ce2d59820739c316e7/ubicom-generic-meta-img-1.jpg',
  'ea': 'https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/images/2020/06/ea-play-feature-image-16x9.jpg.adapt.crop16x9.1023w.jpg',
  'battlenet': 'https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt6d7b0fd8453e72b9/646e720a71dda17643造4c7f/battle-net-desktop-app.jpg',
  'geforce-now': 'https://cdn.cloudflare.steamstatic.com/steam/apps/2239550/header.jpg',
  'playstation-plus': 'https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-monthly-games-banner-desktop-01-en-16jan23?$1600px$',
  'netflix': 'https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/US-en-20240115-trifectadaily-perspective_alpha_website_large.jpg',
  'roblox': 'https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg',
  'chatgpt': 'https://images.unsplash.com/photo-1686191128892-3f05c6302278?q=80&w=2070&auto=format&fit=crop',
  'rockstar': 'https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg',
  'valorant': 'https://cdn.oneesports.gg/cdn-data/2023/06/Valorant_Episode7_Wallpaper_Split.jpg',
  'amazon-prime': 'https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png',
  'duolingo': 'https://blog.duolingo.com/content/images/2024/01/240111_Super-Blog-Header_2024.png',
  'spotify': 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png',
  'xbox-gamepass': 'https://assets.xboxservices.com/assets/1d/6f/1d6f35da-514a-4bbe-9a97-c5b020a13d35.jpg?n=Game-Pass_Feature-0_XGP-PC-Console_1083x1222_02.jpg',
  'hbo-max': 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
  'vpn': 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032&auto=format&fit=crop',
  'iptv': 'https://img.freepik.com/premium-vector/iptv-logo-design-template_11481-805.jpg',
  'disney-plus': 'https://lumiere-a.akamaihd.net/v1/images/disney_logo_nov_2021_rbg_0fa74b54.jpeg',
  'crunchyroll': 'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/36bdc5ea4443cd8e42f22ec7d3884cbb.jpe',
  'proxy': 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=2032&auto=format&fit=crop',
  'league-of-legends': 'https://www.leagueoflegends.com/static/open-graph-2e582ae9fae8b0b396ca46ff21fd47a8.jpg',
  'hotmail': 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HELf?ver=bfa5'
};

export default function AccountDetails() {
  const { accountId } = useParams();
  const [showPinModal, setShowPinModal] = useState(false);
  const [error, setError] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const account = accounts.find(acc => acc.id === accountId);

  if (!account) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-black">
        <div className="text-red-500">Account not found</div>
      </div>
    );
  }

  const rarityConfig = RARITY_CONFIGS[account.rarity];
  const glowStyle = RARITY_GLOW[account.rarity];

  const handlePinSubmit = (pin) => {
    if (pin === account.pin) {
      setIsUnlocked(true);
      setShowPinModal(false);
      setError('');
    } else {
      setError('Incorrect PIN');
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-xl overflow-hidden"
          style={{
            boxShadow: glowStyle.boxShadow,
            animation: `${glowStyle.animation} 3s ease-in-out infinite`
          }}
        >
          <div className="relative h-[500px]">
            <img
              src={SERVICE_IMAGES[account.id] || SERVICE_IMAGES['epic-games']}
              alt={account.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-5xl font-bold text-white">{account.name}</h1>
                <span className={`px-4 py-2 rounded-lg ${rarityConfig.bgColor} ${rarityConfig.textColor} border ${rarityConfig.borderColor}`}>
                  {rarityConfig.label}
                </span>
              </div>
              <p className="text-xl text-gray-300">{account.description}</p>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${rarityConfig.bgColor}`}></span>
                    <span className="text-gray-300">Type: {account.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${rarityConfig.bgColor}`}></span>
                    <span className="text-gray-300">Status: {account.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {isUnlocked ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-lg bg-gradient-to-r from-black/90 to-green-500/10 border border-green-500/30"
              >
                <h3 className="text-xl font-bold text-green-400 mb-4">Account Link</h3>
                <a 
                  href={account.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-mono text-lg hover:text-green-400 transition-colors"
                >
                  {account.link}
                </a>
              </motion.div>
            ) : (
              <button
                onClick={() => setShowPinModal(true)}
                disabled={account.status !== 'inStock'}
                className={`w-full px-6 py-4 rounded-lg transition-all duration-300 ${
                  account.status === 'inStock'
                    ? `${rarityConfig.bgColor} ${rarityConfig.textColor} hover:scale-105`
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                {account.status === 'inStock' ? 'Unlock Account' : 'Out of Stock'}
              </button>
            )}
          </div>
        </motion.div>
      </div>

      <PinModal
        isOpen={showPinModal}
        onClose={() => {
          setShowPinModal(false);
          setError('');
        }}
        onSubmit={handlePinSubmit}
        rarity={account.rarity}
        error={error}
      />
    </div>
  );
}