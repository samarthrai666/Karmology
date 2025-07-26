import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface SignupFormProps {
  onSwitchToLogin: () => void;
}

interface BirthDetails {
  date: string;
  time: string;
  place: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSwitchToLogin }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const [accountData, setAccountData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });

  const [birthDetails, setBirthDetails] = useState<BirthDetails>({
    date: '',
    time: '',
    place: ''
  });

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  // Simple geocoding function - in production, use Google Maps API
  const getCoordinatesForPlace = (place: string) => {
    const cityCoordinates: { [key: string]: { lat: number; lng: number; tz: string } } = {
      'delhi': { lat: 28.6139, lng: 77.2090, tz: 'Asia/Kolkata' },
      'new delhi': { lat: 28.6139, lng: 77.2090, tz: 'Asia/Kolkata' },
      'mumbai': { lat: 19.0760, lng: 72.8777, tz: 'Asia/Kolkata' },
      'bangalore': { lat: 12.9716, lng: 77.5946, tz: 'Asia/Kolkata' },
      'bengaluru': { lat: 12.9716, lng: 77.5946, tz: 'Asia/Kolkata' },
      'chennai': { lat: 13.0827, lng: 80.2707, tz: 'Asia/Kolkata' },
      'kolkata': { lat: 22.5726, lng: 88.3639, tz: 'Asia/Kolkata' },
      'hyderabad': { lat: 17.3850, lng: 78.4867, tz: 'Asia/Kolkata' },
      'pune': { lat: 18.5204, lng: 73.8567, tz: 'Asia/Kolkata' },
      'ahmedabad': { lat: 23.0225, lng: 72.5714, tz: 'Asia/Kolkata' },
      'new york': { lat: 40.7128, lng: -74.0060, tz: 'America/New_York' },
      'london': { lat: 51.5074, lng: -0.1278, tz: 'Europe/London' },
      'dubai': { lat: 25.2048, lng: 55.2708, tz: 'Asia/Dubai' },
      'singapore': { lat: 1.3521, lng: 103.8198, tz: 'Asia/Singapore' },
      'toronto': { lat: 43.6532, lng: -79.3832, tz: 'America/Toronto' },
      'sydney': { lat: -33.8688, lng: 151.2093, tz: 'Australia/Sydney' },
      'default': { lat: 28.6139, lng: 77.2090, tz: 'Asia/Kolkata' }
    };

    // Simple matching - check if the place contains any known city
    const placeLower = place.toLowerCase();
    for (const city in cityCoordinates) {
      if (placeLower.includes(city)) {
        return cityCoordinates[city];
      }
    }
    
    // Return default (Delhi) if no match found
    return cityCoordinates['default'];
  };

  const handleBirthDetailsSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  // TEST CONNECTION FIRST
  try {
    const testResponse = await fetch('http://localhost:5000/');
    console.log('Test connection status:', testResponse.status);
    const testData = await testResponse.text();
    console.log('Test response:', testData);
  } catch (testError) {
    console.error('Test connection failed:', testError);
  }

  try {
    const coordinates = getCoordinatesForPlace(birthDetails.place);
    
    // Log the exact URL we're trying
    const url = 'http://localhost:5000/api/auth/signup';
    console.log('Attempting to connect to:', url);

    const response = await axios.post(url, {
      name: accountData.name,
      email: accountData.email,
      password: accountData.password,
      phone: accountData.phone,
      birthDetails: {
        date: birthDetails.date,
        time: birthDetails.time,
        place: birthDetails.place,
        latitude: coordinates.lat,
        longitude: coordinates.lng,
        timezone: coordinates.tz
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000 // 10 second timeout
    });

    const { token, user } = response.data;
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', user.id);
    navigate('/profile');
    
  } catch (error: any) {
    console.error('DETAILED ERROR:', {
      message: error.message,
      code: error.code,
      response: error.response,
      request: error.request,
      config: error.config
    });
    
    if (error.code === 'ECONNREFUSED') {
      alert('Connection refused. Backend is not accepting connections on port 5000');
    } else if (error.code === 'ERR_NETWORK') {
      alert('Network error. Check if both servers are running on the correct ports');
    } else {
      alert(`Error: ${error.message}`);
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div>
      {step === 1 ? (
        <form onSubmit={handleAccountSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              value={accountData.name}
              onChange={(e) => setAccountData({...accountData, name: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={accountData.email}
              onChange={(e) => setAccountData({...accountData, email: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone
            </label>
            <input
              type="tel"
              required
              value={accountData.phone}
              onChange={(e) => setAccountData({...accountData, phone: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              placeholder="+1234567890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={accountData.password}
              onChange={(e) => setAccountData({...accountData, password: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            Next: Birth Details
          </button>

          <p className="text-center text-gray-400">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Login
            </button>
          </p>
        </form>
      ) : (
        <form onSubmit={handleBirthDetailsSubmit} className="space-y-4">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Birth Details for Kundali</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              required
              max={new Date().toISOString().split('T')[0]}
              value={birthDetails.date}
              onChange={(e) => setBirthDetails({...birthDetails, date: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Time of Birth (24-hour format)
            </label>
            <input
              type="time"
              required
              value={birthDetails.time}
              onChange={(e) => setBirthDetails({...birthDetails, time: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Place of Birth
            </label>
            <input
              type="text"
              required
              value={birthDetails.place}
              onChange={(e) => setBirthDetails({...birthDetails, place: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              placeholder="e.g., Delhi, Mumbai, New York"
            />
            <p className="text-xs text-gray-500 mt-1">
              Supported cities: Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, New York, London, Dubai, Singapore, Toronto, Sydney
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating Your Cosmic Profile...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignupForm;