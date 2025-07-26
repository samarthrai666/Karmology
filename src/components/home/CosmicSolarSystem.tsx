import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Planet {
  name: string;
  symbol: string;
  color: string;
  size: number;
  orbit: number;
  speed: number;
  gradient: string;
  description: string;
  initialAngle?: number;
  glowColor: string;
}

const CosmicSolarSystem: React.FC = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const planets: Planet[] = [
    {
      name: 'Sun',
      symbol: '☉',
      color: '#FFD700',
      size: 70,
      orbit: 0,
      speed: 0,
      gradient: 'from-yellow-200 via-yellow-400 to-orange-500',
      description: 'Soul, Father, Authority',
      glowColor: 'rgba(255, 215, 0, 0.6)',
    },
    {
      name: 'Mercury',
      symbol: '☿',
      color: '#8B7D6B',
      size: 25,
      orbit: 100,
      speed: 15,
      gradient: 'from-stone-400 via-stone-500 to-stone-600',
      description: 'Intelligence, Communication',
      initialAngle: 0,
      glowColor: 'rgba(139, 125, 107, 0.5)',
    },
    {
      name: 'Venus',
      symbol: '♀',
      color: '#FFC0CB',
      size: 35,
      orbit: 140,
      speed: 25,
      gradient: 'from-pink-300 via-pink-400 to-rose-500',
      description: 'Love, Beauty, Luxury',
      initialAngle: 45,
      glowColor: 'rgba(255, 192, 203, 0.5)',
    },
    {
      name: 'Moon',
      symbol: '☽',
      color: '#F0F0F0',
      size: 30,
      orbit: 180,
      speed: 20,
      gradient: 'from-gray-200 via-gray-300 to-gray-400',
      description: 'Mind, Mother, Emotions',
      initialAngle: 90,
      glowColor: 'rgba(240, 240, 240, 0.5)',
    },
    {
      name: 'Mars',
      symbol: '♂',
      color: '#DC143C',
      size: 32,
      orbit: 220,
      speed: 35,
      gradient: 'from-red-400 via-red-500 to-red-700',
      description: 'Energy, Action, Courage',
      initialAngle: 180,
      glowColor: 'rgba(220, 20, 60, 0.5)',
    },
    {
      name: 'Jupiter',
      symbol: '♃',
      color: '#DAA520',
      size: 55,
      orbit: 280,
      speed: 60,
      gradient: 'from-yellow-500 via-amber-500 to-orange-600',
      description: 'Wisdom, Fortune, Guru',
      initialAngle: 270,
      glowColor: 'rgba(218, 165, 32, 0.5)',
    },
    {
      name: 'Saturn',
      symbol: '♄',
      color: '#4682B4',
      size: 50,
      orbit: 340,
      speed: 80,
      gradient: 'from-blue-400 via-blue-500 to-blue-700',
      description: 'Discipline, Karma, Time',
      initialAngle: 120,
      glowColor: 'rgba(70, 130, 180, 0.5)',
    },
    {
      name: 'Rahu',
      symbol: '☊',
      color: '#9400D3',
      size: 38,
      orbit: 400,
      speed: 45,
      gradient: 'from-purple-500 via-purple-600 to-purple-800',
      description: 'Desires, Obsession, Innovation',
      initialAngle: 30,
      glowColor: 'rgba(148, 0, 211, 0.5)',
    },
    {
      name: 'Ketu',
      symbol: '☋',
      color: '#8B008B',
      size: 38,
      orbit: 400,
      speed: 45,
      gradient: 'from-purple-600 via-purple-700 to-purple-900',
      description: 'Spirituality, Detachment, Liberation',
      initialAngle: 210, // Opposite to Rahu (180 degrees apart)
      glowColor: 'rgba(139, 0, 139, 0.5)',
    },
  ];

  return (
    <div className="relative w-full h-full">
      {/* Cosmic Background Layers */}
      <div className="absolute inset-0">
        {/* Galaxy spiral effect */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at center, transparent 0%, transparent 20%, rgba(147, 51, 234, 0.05) 40%, transparent 70%),
                conic-gradient(from 0deg at 50% 50%, 
                  transparent 0deg, 
                  rgba(147, 51, 234, 0.1) 60deg, 
                  transparent 120deg,
                  rgba(236, 72, 153, 0.1) 180deg,
                  transparent 240deg,
                  rgba(147, 51, 234, 0.1) 300deg,
                  transparent 360deg
                )
              `,
              filter: 'blur(30px)',
            }}
          />
        </motion.div>

        {/* Nebula clouds */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Star clusters */}
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#B794F4' : i % 3 === 1 ? '#F687B3' : '#FFFFFF',
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Solar System Container */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-2xl h-[300px] mx-auto"
        style={{
          transform: `perspective(1200px) rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Orbital Grid Background */}
        <svg className="absolute inset-0 w-full h-full" style={{ transform: 'translateZ(-100px)' }}>
          <defs>
            <radialGradient id="orbitalGradient">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0)" />
            </radialGradient>
          </defs>
          
          {/* Grid lines for depth */}
          <g opacity="0.2">
            {[...Array(24)].map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const x1 = 50 + 48 * Math.cos(angle);
              const y1 = 50 + 48 * Math.sin(angle);
              return (
                <line
                  key={`grid-line-${i}`}
                  x1="50%"
                  y1="50%"
                  x2={`${x1}%`}
                  y2={`${y1}%`}
                  stroke="rgba(147, 51, 234, 0.3)"
                  strokeWidth="0.5"
                />
              );
            })}
          </g>
        </svg>

        {/* Orbital Rings */}
        {planets.filter(p => p.orbit > 0).map((planet, index) => (
          <motion.div
            key={`orbit-${planet.name}`}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: index * 0.1, 
              duration: 1, 
              ease: [0.23, 1, 0.32, 1] 
            }}
          >
            {/* Orbital path */}
            <div
              className="rounded-full border transition-all duration-500"
              style={{
                width: `${planet.orbit * 2}px`,
                height: `${planet.orbit * 2}px`,
                borderColor: hoveredPlanet === planet.name 
                  ? planet.color + '60' 
                  : 'rgba(147, 51, 234, 0.2)',
                borderWidth: hoveredPlanet === planet.name ? '2px' : '1px',
                boxShadow: hoveredPlanet === planet.name 
                  ? `0 0 30px ${planet.glowColor}, inset 0 0 30px ${planet.glowColor}` 
                  : 'none',
                borderStyle: planet.name === 'Rahu' || planet.name === 'Ketu' ? 'dashed' : 'solid',
              }}
            />
            
            {/* Orbital markers */}
            {[0, 90, 180, 270].map((angle) => (
              <div
                key={`marker-${planet.name}-${angle}`}
                className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                style={{
                  top: `${50 - (planet.orbit / 4) * Math.cos((angle * Math.PI) / 180)}%`,
                  left: `${50 + (planet.orbit / 4) * Math.sin((angle * Math.PI) / 180)}%`,
                }}
              />
            ))}
          </motion.div>
        ))}

        {/* Central Sun */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative cursor-pointer"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            onMouseEnter={() => setHoveredPlanet('Sun')}
            onMouseLeave={() => setHoveredPlanet(null)}
          >
            {/* Sun corona */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, transparent 70%)',
                filter: 'blur(20px)',
                transform: 'translate(-25%, -25%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            
            {/* Sun body */}
            <div className={`relative w-[70px] h-[70px] rounded-full bg-gradient-to-br ${planets[0].gradient} shadow-2xl`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-yellow-900">{planets[0].symbol}</span>
              </div>
              
              {/* Sun surface detail */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 40%)',
                  }}
                />
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `conic-gradient(from 0deg, transparent, rgba(255,140,0,0.2), transparent, rgba(255,140,0,0.2), transparent)`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>

            {/* Sun tooltip */}
            {hoveredPlanet === 'Sun' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg whitespace-nowrap z-50 border border-yellow-500/30"
              >
                <div className="text-sm font-semibold text-yellow-400">Sun (सूर्य)</div>
                <div className="text-xs text-gray-400">{planets[0].description}</div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Orbiting Planets */}
        {planets.slice(1).map((planet, index) => (
          <motion.div
            key={planet.name}
            className="absolute inset-0 flex items-center justify-center"
            style={{ pointerEvents: 'none' }}
            initial={{ rotate: planet.initialAngle || 0 }}
            animate={{
              rotate: (planet.initialAngle || 0) + 360,
            }}
            transition={{
              duration: planet.speed,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className="absolute"
              style={{
                width: `${planet.orbit * 2}px`,
                height: `${planet.orbit * 2}px`,
              }}
            >
              <motion.div
                className="absolute cursor-pointer"
                style={{
                  width: `${planet.size}px`,
                  height: `${planet.size}px`,
                  top: `-${planet.size / 2}px`,
                  left: `calc(50% - ${planet.size / 2}px)`,
                  pointerEvents: 'auto',
                }}
                animate={{
                  rotate: -(planet.initialAngle || 0) - 360,
                }}
                transition={{
                  duration: planet.speed,
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{ scale: 1.3, zIndex: 50 }}
                onMouseEnter={() => setHoveredPlanet(planet.name)}
                onMouseLeave={() => setHoveredPlanet(null)}
              >
                {/* Planet atmosphere/glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${planet.glowColor} 0%, transparent 70%)`,
                    transform: 'scale(2)',
                    filter: 'blur(15px)',
                  }}
                  animate={{
                    scale: hoveredPlanet === planet.name ? [2, 2.5, 2] : 2,
                    opacity: hoveredPlanet === planet.name ? [0.6, 0.8, 0.6] : 0.4,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                
                {/* Planet body */}
                <div 
                  className={`relative w-full h-full rounded-full bg-gradient-to-br ${planet.gradient} shadow-xl`}
                  style={{
                    boxShadow: `
                      0 0 ${planet.size/2}px ${planet.glowColor},
                      inset -${planet.size/8}px -${planet.size/8}px ${planet.size/4}px rgba(0,0,0,0.5),
                      inset ${planet.size/8}px ${planet.size/8}px ${planet.size/4}px rgba(255,255,255,0.2)
                    `,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold" style={{ fontSize: `${planet.size * 0.4}px` }}>
                      {planet.symbol}
                    </span>
                  </div>
                  
                  {/* Planet surface detail */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                      }}
                    />
                    {/* Ring for Saturn */}
                    {planet.name === 'Saturn' && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ transform: 'rotateX(75deg)' }}
                      >
                        <div 
                          className="absolute border-4 border-yellow-600/50 rounded-full"
                          style={{ width: '150%', height: '150%' }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Planet tooltip */}
                {hoveredPlanet === planet.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg whitespace-nowrap z-[100] border border-purple-500/30"
                    style={{ 
                      minWidth: '150px',
                      pointerEvents: 'none',
                    }}
                  >
                    <div 
                      className="text-sm font-semibold"
                      style={{ color: planet.color }}
                    >
                      {planet.name} {planet.name === 'Rahu' ? '(राहु)' : planet.name === 'Ketu' ? '(केतु)' : ''}
                    </div>
                    <div className="text-xs text-gray-400">{planet.description}</div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Asteroid belt between Mars and Jupiter */}
        {[...Array(50)].map((_, i) => {
          const angle = (i * 7.2) * Math.PI / 180;
          const radius = 250 + Math.random() * 20 - 10;
          const size = Math.random() * 2 + 1;
          
          return (
            <motion.div
              key={`asteroid-${i}`}
              className="absolute rounded-full bg-gray-600"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `calc(50% + ${radius * Math.cos(angle)}px - ${size/2}px)`,
                top: `calc(50% + ${radius * Math.sin(angle)}px - ${size/2}px)`,
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          );
        })}

        {/* Comet */}
        <motion.div
          className="absolute"
          initial={{ x: -100, y: -100 }}
          animate={{
            x: [1000, -100],
            y: [200, 600],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatDelay: 10,
            ease: "linear",
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <div className="absolute top-0 left-0 w-20 h-[2px] bg-gradient-to-r from-white to-transparent -rotate-45 origin-left" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CosmicSolarSystem;