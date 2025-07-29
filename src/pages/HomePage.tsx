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

  const features = [
    {
      icon: '🌟',
      title: 'Vedic Astrology',
      description: 'Ancient wisdom meets modern technology for precise celestial insights'
    },
    {
      icon: '🔮',
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithms interpret your cosmic blueprint with remarkable accuracy'
    },
    {
      icon: '📊',
      title: 'Detailed Charts',
      description: 'Comprehensive birth charts and planetary position visualizations'
    },
    {
      icon: '🎯',
      title: 'Personalized Guidance',
      description: 'Tailored insights for your life path, relationships, and career'
    },
    {
      icon: '⚡',
      title: 'Real-time Updates',
      description: 'Current planetary transits and their influence on your destiny'
    },
    {
      icon: '🧘',
      title: 'Spiritual Growth',
      description: 'Tools and practices for your cosmic evolution and self-discovery'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Entrepreneur',
      content: 'Karmalogy revealed insights about my business timing that proved incredibly accurate. The AI analysis is surprisingly deep.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Life Coach',
      content: 'The depth of Vedic analysis combined with modern presentation makes this tool invaluable for understanding life patterns.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Artist',
      content: 'Finally, astrology that speaks to the modern soul. The cosmic visualizations are as beautiful as they are insightful.',
      rating: 5
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Enter Your Details',
      description: 'Provide your birth date, time, and location for precise calculations'
    },
    {
      step: '02',
      title: 'AI Analysis',
      description: 'Our advanced system analyzes planetary positions and Vedic principles'
    },
    {
      step: '03',
      title: 'Receive Insights',
      description: 'Get personalized predictions, compatibility analysis, and life guidance'
    },
    {
      step: '04',
      title: 'Track & Grow',
      description: 'Monitor planetary transits and evolve with cosmic wisdom'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
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
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ✨ Karmalogy
            </span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <button 
              onClick={() => setShowAuthModal(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-white font-medium hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-8 -mt-20">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full max-w-2xl h-[400px]"
          >
            <CosmicSolarSystem />
          </motion.div>

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

        {/* Features Section */}
        <section id="features" className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cosmic Features
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Unlock the mysteries of your existence with cutting-edge astrological technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  How It Works
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Your journey to cosmic understanding in four simple steps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cosmic Testimonials
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Discover how Karmalogy has transformed lives across the universe
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-12 rounded-3xl border border-purple-500/30 backdrop-blur-sm"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Discover Your Cosmic Truth?
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands who have unlocked their celestial potential. Your journey to cosmic understanding starts now.
              </p>
              <button
                onClick={handleUnveilKarma}
                className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                Begin Your Cosmic Journey ✨
              </button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ✨ Karmalogy
                  </span>
                </h3>
                <p className="text-gray-400">
                  Bridging ancient wisdom with modern technology for cosmic enlightenment.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Features</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Birth Chart Analysis</li>
                  <li>Compatibility Reports</li>
                  <li>Career Guidance</li>
                  <li>Transit Predictions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Help Center</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Newsletter</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Karmalogy. All rights reserved. Made with cosmic love ✨</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </div>
  );
};

export default HomePage;