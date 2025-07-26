import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-surface border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">✨ Karmalogy</h3>
            <p className="text-gray-400">
              Unveiling cosmic destinies with AI-powered Vedic astrology
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cosmic-purple">Features</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Birth Chart</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Predictions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dasha Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Remedies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cosmic-pink">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cosmic-blue">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-cosmic-purple transition-colors">📧</a>
              <a href="#" className="text-2xl hover:text-cosmic-purple transition-colors">📱</a>
              <a href="#" className="text-2xl hover:text-cosmic-purple transition-colors">💬</a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-500 pt-8 border-t border-white/10">
          <p>&copy; 2024 Karmalogy. Decode Your Karma. Design Your Life.</p>
        </div>
      </div>
    </footer>
  );
};