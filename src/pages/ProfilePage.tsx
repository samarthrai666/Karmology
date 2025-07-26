import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        navigate('/');
        return;
      }

      const response = await axios.get('http://localhost:5000/api/astrology/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setProfileData(response.data);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-2xl">Loading your cosmic blueprint...</div>
      </div>
    );
  }

  const { user, kundali } = profileData || {};

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Welcome, {user?.name}!
        </h1>

        {/* User Info */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">Birth Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400">Date of Birth:</p>
              <p>{new Date(user?.birthDetails.date).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-gray-400">Time of Birth:</p>
              <p>{user?.birthDetails.time}</p>
            </div>
            <div>
              <p className="text-gray-400">Place of Birth:</p>
              <p>{user?.birthDetails.place}</p>
            </div>
          </div>
        </div>

        {/* Kundali Data */}
        {kundali && (
          <>
            {/* Current Dasha */}
            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Current Dasha Period</h2>
              <pre className="text-sm overflow-auto">
                {JSON.stringify(kundali.dashaDetails, null, 2)}
              </pre>
            </div>

            {/* Planetary Positions */}
            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Planetary Positions</h2>
              <pre className="text-sm overflow-auto">
                {JSON.stringify(kundali.planetaryPositions, null, 2)}
              </pre>
            </div>

            {/* Sade Sati */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Sade Sati Status</h2>
              <pre className="text-sm overflow-auto">
                {JSON.stringify(kundali.sadeSatiDetails, null, 2)}
              </pre>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;