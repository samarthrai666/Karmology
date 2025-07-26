import axios from 'axios';

export class ProkeralaService {
  private clientId: string;
  private clientSecret: string;
  private baseUrl = 'https://api.prokerala.com/v2';
  private accessToken: string | null = null;
  private tokenExpiry: Date | null = null;

  constructor() {
    this.clientId = process.env.PROKERALA_CLIENT_ID!;
    this.clientSecret = process.env.PROKERALA_CLIENT_SECRET!;
  }

  private async getAccessToken(): Promise<string> {
    if (this.accessToken && this.tokenExpiry && new Date() < this.tokenExpiry) {
      return this.accessToken;
    }

    try {
      const response = await axios.post(
        'https://api.prokerala.com/token',
        new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: this.clientId,
          client_secret: this.clientSecret
        }),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
      );

      this.accessToken = response.data.access_token;
      this.tokenExpiry = new Date(Date.now() + response.data.expires_in * 1000);
      
      // This is guaranteed to be a string now
      return response.data.access_token;
    } catch (error) {
      console.error('Failed to get Prokerala access token:', error);
      throw error;
    }
  }

  async getKundali(params: {
    datetime: string;
    latitude: number;
    longitude: number;
    timezone: string;
  }) {
    const token = await this.getAccessToken();

    try {
      const response = await axios.get(`${this.baseUrl}/astrology/kundli`, {
        params: {
          ayanamsa: 1,
          coordinates: `${params.latitude},${params.longitude}`,
          datetime: params.datetime,
          timezone: params.timezone,
          la: 'en'
        },
        headers: { 'Authorization': `Bearer ${token}` }
      });

      return response.data;
    } catch (error) {
      console.error('Prokerala API error:', error);
      throw error;
    }
  }

  async getPlanetaryPositions(params: {
    datetime: string;
    latitude: number;
    longitude: number;
    timezone: string;
  }) {
    const token = await this.getAccessToken();
    
    const response = await axios.get(`${this.baseUrl}/astrology/planet-position`, {
      params: {
        ayanamsa: 1,
        coordinates: `${params.latitude},${params.longitude}`,
        datetime: params.datetime,
        timezone: params.timezone
      },
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return response.data;
  }

  async getCurrentDasha(params: {
    datetime: string;
    latitude: number;
    longitude: number;
    timezone: string;
  }) {
    const token = await this.getAccessToken();
    
    const response = await axios.get(`${this.baseUrl}/astrology/current-vimshottari-dasha`, {
      params: {
        ayanamsa: 1,
        coordinates: `${params.latitude},${params.longitude}`,
        datetime: params.datetime,
        timezone: params.timezone
      },
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return response.data;
  }

  async getSadeSati(params: {
    datetime: string;
    latitude: number;
    longitude: number;
    timezone: string;
  }) {
    const token = await this.getAccessToken();
    
    const response = await axios.get(`${this.baseUrl}/astrology/sade-sati`, {
      params: {
        ayanamsa: 1,
        coordinates: `${params.latitude},${params.longitude}`,
        datetime: params.datetime,
        timezone: params.timezone
      },
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return response.data;
  }
}

export default new ProkeralaService();