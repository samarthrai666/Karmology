import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CosmicSolarSystem from '../components/home/CosmicSolarSystem';
import AuthModal from '../components/auth/AuthModal';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleUnveilKarma = () => {
    const isLoggedIn = localStorage.getItem('authToken');
    if (isLoggedIn) {
      navigate('/profile');
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Deep Space Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/20 via-transparent to-pink-950/20" />
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[100px]" />
        </div>

        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-[1px] h-[1px] bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-50 px-8 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <motion.div className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ✨ Karmalogy
            </span>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-8 -mt-20">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Decode Your
              </span>
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cosmic Destiny
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Experience the wisdom of Vedic astrology through advanced AI and precise planetary calculations
            </p>
          </motion.div>

          {/* Smaller Solar System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full max-w-2xl h-[400px]"
          >
            <CosmicSolarSystem />
          </motion.div>

          {/* Single CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <button
              onClick={handleUnveilKarma}
              className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl">🔮</span>
                <span>Unveil Your Karma</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                style={{ opacity: 0.2 }}
              />
            </button>
          </motion.div>
        </section>
      </main>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </div>
  );
};

export default HomePage;