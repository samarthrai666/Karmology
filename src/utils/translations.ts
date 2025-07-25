export const vedicTranslations: Record<string, string> = {
  // Astrology Terms
  kundali: "Birth Chart",
  janma_kundali: "Natal Chart",
  lagna: "Ascendant",
  rashi: "Moon Sign",
  nakshatra: "Lunar Mansion",
  graha: "Planet",
  bhava: "House",
  yoga: "Planetary Combination",
  dosha: "Affliction",
  
  // Dasha Terms
  mahadasha: "Major Period",
  antardasha: "Sub Period",
  pratyantar_dasha: "Sub-Sub Period",
  sookshma_dasha: "Minor Period",
  prana_dasha: "Micro Period",
  vimshottari_dasha: "120-Year Cycle",
  
  // Planets
  surya: "Sun",
  chandra: "Moon",
  mangal: "Mars",
  budh: "Mercury",
  guru: "Jupiter",
  shukra: "Venus",
  shani: "Saturn",
  rahu: "North Node",
  ketu: "South Node",
  
  // Houses
  pratham_bhava: "1st House",
  dwitiya_bhava: "2nd House",
  tritiya_bhava: "3rd House",
  chaturthi_bhava: "4th House",
  pancham_bhava: "5th House",
  shashth_bhava: "6th House",
  saptam_bhava: "7th House",
  ashtam_bhava: "8th House",
  navam_bhava: "9th House",
  dasham_bhava: "10th House",
  ekadash_bhava: "11th House",
  dwadash_bhava: "12th House",
  
  // Zodiac Signs
  mesha: "Aries",
  vrishabha: "Taurus",
  mithuna: "Gemini",
  karka: "Cancer",
  simha: "Leo",
  kanya: "Virgo",
  tula: "Libra",
  vrishchika: "Scorpio",
  dhanu: "Sagittarius",
  makara: "Capricorn",
  kumbha: "Aquarius",
  meena: "Pisces",
  
  // Special Terms
  sade_sati: "7.5 Year Saturn Cycle",
  kaal_sarp_dosha: "Serpent Curse",
  manglik_dosha: "Mars Affliction",
  pitra_dosha: "Ancestral Affliction",
  
  // Remedies
  upaya: "Remedy",
  mantra: "Sacred Chant",
  yantra: "Sacred Geometry",
  ratna: "Gemstone",
  puja: "Worship Ritual",
  homa: "Fire Ceremony",
  daan: "Charity",
  vrat: "Fasting",
  
  // Spiritual Terms
  karma: "Action & Consequence",
  dharma: "Life Purpose",
  artha: "Material Prosperity",
  kama: "Desires",
  moksha: "Liberation",
  sadhana: "Spiritual Practice",
  tapas: "Austerity",
  
  // Additional Terms
  gochar: "Transit",
  drishti: "Aspect",
  uccha: "Exaltation",
  neecha: "Debilitation",
};

// Reverse mapping for English to Vedic
export const englishToVedic = Object.entries(vedicTranslations).reduce(
  (acc, [vedic, english]) => ({ ...acc, [english.toLowerCase()]: vedic }),
  {} as Record<string, string>
);