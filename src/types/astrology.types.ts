export interface Kundali {
  userId: string;
  birthChart: BirthChart;
  planetaryPositions: PlanetaryPosition[];
  houses: House[];
  dashas: Dasha[];
  yogas: Yoga[];
  sadeSati?: SadeSati;
}

export interface BirthChart {
  ascendant: string;
  moon: string;
  sun: string;
  navamsa: string;
}

export interface PlanetaryPosition {
  planet: Planet;
  sign: string;
  house: number;
  degree: number;
  retrograde: boolean;
  nakshatra: string;
}

export interface House {
  number: number;
  sign: string;
  planets: Planet[];
  lord: Planet;
}

export interface Dasha {
  type: 'mahadasha' | 'antardasha' | 'pratyantardasha';
  planet: Planet;
  startDate: Date;
  endDate: Date;
  active: boolean;
}

export interface SadeSati {
  active: boolean;
  phase: 'rising' | 'peak' | 'setting' | null;
  startDate?: Date;
  endDate?: Date;
}

export type Planet = 
  | 'Sun' | 'Moon' | 'Mars' | 'Mercury' 
  | 'Jupiter' | 'Venus' | 'Saturn' 
  | 'Rahu' | 'Ketu';

export interface Yoga {
  name: string;
  type: 'rajyoga' | 'dhanyoga' | 'aristayoga';
  description: string;
  strength: 'strong' | 'moderate' | 'weak';
}