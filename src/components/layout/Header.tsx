import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LanguageToggle } from '../common/LanguageToggle';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          onClick={() => navigate('/')}
          className="text-2xl font-bold text-gradient cursor-pointer"
        >
          ✨ Karmalogy
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="hover:text-cosmic-purple transition-colors">Features</a>
          <a href="#astrology" className="hover:text-cosmic-purple transition-colors">Astrology</a>
          <a href="#consultation" className="hover:text-cosmic-purple transition-colors">Consultation</a>
          <LanguageToggle />
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 text-cosmic-purple hover:text-cosmic-pink transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="px-6 py-2 bg-cosmic text-white rounded-full hover:shadow-lg 
              hover:shadow-cosmic-purple/50 transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.header>
  );
};