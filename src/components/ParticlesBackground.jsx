// src/components/ParticlesBackground.jsx
import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // ✅ Compatible loader

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // ✅ loadSlim is compatible with tsparticles
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: 'transparent',
          },
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: '#007bff',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            outModes: 'bounce',
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
