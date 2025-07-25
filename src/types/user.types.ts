export interface User {
  id: string;
  email: string;
  phone?: string;
  profile: UserProfile;
  subscription: Subscription;
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  timeOfBirth: string;
  placeOfBirth: {
    city: string;
    state: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  gender?: 'male' | 'female' | 'other';
  avatar?: string;
}

export interface Subscription {
  plan: 'free' | 'pro' | 'premium';
  status: 'active' | 'inactive' | 'cancelled';
  startDate: Date;
  endDate?: Date;
  features: string[];
}

export interface UserPreferences {
  language: 'en' | 'hi' | 'ta' | 'te';
  notifications: {
    dailyInsights: boolean;
    predictions: boolean;
    meditation: boolean;
    marketing: boolean;
  };
  goals: string[];
}